import Blog from "src/components/Blog";
import Button from "src/components/Button";
import Github, { PcGithubList, SpGithubList } from "src/components/Github";
import Hero from "src/components/Hero";
import Portfolio from "src/components/Portfolio";
import Tweet from "src/components/Tweet";
import useWindowSize from "src/hooks/useWindowSize";
import Layout from "src/components/Layout/Layout";

import { client } from "src/libs/client";
import { twitterClient } from "src/libs/twitterClient";

export const getStaticProps = async () => {
  const blogData = await client.getList({
    endpoint: "blog",
  });
  const portfolioData = await client.getList({
    endpoint: "portfolio",
  });

  const readOnlyClient = twitterClient.readOnly;
  const user = await readOnlyClient.v2.userByUsername("uolYUd2kPpw3yRY", {
    "user.fields": "profile_image_url",
  });
  const tweets = await twitterClient.v2.get(
    "users/1231153112464838661/tweets",
    {
      max_results: 5,
      "tweet.fields": ["created_at"],
      // expansions: ["author_id"], userの情報を取得するための指定
      // "user.fields": ["profile_image_url"], userの情報を取得しようとしたが、うまく取得できなかった。includesが必要になりそう
    }
  );
  return {
    props: {
      blog: blogData,
      portfolio: portfolioData,
      user: user,
      tweets: tweets,
    },
  };
};

const Home = (props) => {
  const width = useWindowSize();
  return (
    <Layout title={"Home"}>
      <Hero />
      <div className="mx-4 mt-10">
        {width < 640 ? (
          <Blog blogData={props.blog.contents.slice(0, 4)} />
        ) : (
          <Blog blogData={props.blog.contents.slice(0, 5)} />
        )}
        <Button text="View All" href="/blogPage/page/1" />
      </div>
      <div className="mx-4 mt-[61px] md:mt-[100px]">
        {width < 640 ? (
          <Portfolio portfolioList={props.portfolio.contents.slice(0, 3)} />
        ) : (
          <Portfolio portfolioList={props.portfolio.contents} />
        )}
        <Button text="View All" href="/portfolioPage" />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-20">
        {width < 640 ? (
          <Github githubList={SpGithubList} />
        ) : (
          <Github githubList={PcGithubList} />
        )}
        <Tweet
          twitterUser={props.user.data}
          tweetsData={props.tweets.data.slice(0, 3)}
        />
      </div>
    </Layout>
  );
};

export default Home;
