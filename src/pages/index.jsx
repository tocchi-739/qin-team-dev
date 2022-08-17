import Blog, { HomePageBlogList } from "src/components/Blog";
import Button from "src/components/Button";
import Github, { PcGithubList, SpGithubList } from "src/components/Github";
import Hero from "src/components/Hero";
import Portfolio, {
  HomeSpPortfolioList,
  PcPortfolioList,
} from "src/components/Portfolio";
import Tweet from "src/components/Tweet";
import useWindowSize from "src/hooks/useWindowSize";
import Layout from "src/components/Layout/Layout";

const Home = () => {
  const width = useWindowSize();
  return (
    <Layout title={"Home"}>
      <Hero />
      <div className="mx-4 mt-10">
        <Blog blogList={HomePageBlogList} />
        <Button text="View All" href="/blogPage" />
      </div>
      <div className="mx-4 mt-[61px] md:mt-[100px]">
        {width < 640 ? (
          <Portfolio portfolioList={HomeSpPortfolioList} />
        ) : (
          <Portfolio portfolioList={PcPortfolioList} />
        )}
        <Button text="View All" href="/portfolioPage" />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-20">
        {width < 640 ? (
          <Github githubList={SpGithubList} />
        ) : (
          <Github githubList={PcGithubList} />
        )}
        <Tweet />
      </div>
    </Layout>
  );
};

export default Home;
