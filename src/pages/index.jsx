import Blog from "src/components/Blog";
import Button from "src/components/Button";
import Github from "src/components/Github";
import Hero from "src/components/Hero";
import Portfolio from "src/components/Portfolio";
import useWindowSize from "src/hooks/useWindowSize";
import Layout from "src/components/Layout/Layout";

import { client } from "src/libs/client";
const { graphql } = require("@octokit/graphql");

export const getStaticProps = async () => {
  //ブログデータ取得
  const blogData = await client.getList({
    endpoint: "blog",
  });
  //ポートフォリオデータ取得
  const portfolioData = await client.getList({
    endpoint: "portfolio",
  });

  //GitHubデータ取得
  const graphqlWithAuth = graphql.defaults({
    headers: {
      authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
  });
  const QUERY = `
  query getUser($login: String!) {
    user(login: $login) {
      name
      url
      repositories(last:5
        ownerAffiliations: [OWNER]){
        nodes{
          name
          description
          url
          id
          stargazers{
            totalCount
          }
          forks{
            totalCount
          }
          languages (first:8){
            totalSize
            edges{
              size
              node{
                id
                name
                color
              }
            }
          }
        }
      }
    }
  }
`;
  // const { user } = await graphqlWithAuth(QUERY, {
  //   login: "tocchi-739",
  // });

  return {
    props: {
      blog: blogData,
      portfolio: portfolioData,
      // github: user,
    },
    revalidate: 10,
  };
};

const Home = (props) => {
  const width = useWindowSize();
  // const githubUser = {
  //   name: props.github.name,
  //   url: props.github.url,
  // };
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
        {/* {width < 640 ? (
          <Github
            githubList={props.github.repositories.nodes.slice(0, 3)}
            githubUser={githubUser}
          />
        ) : (
          <Github
            githubList={props.github.repositories.nodes}
            githubUser={githubUser}
          />
        )} */}
      </div>
    </Layout>
  );
};

export default Home;
