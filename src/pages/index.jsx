import Head from "next/head";
import Link from "next/link";
import Blog from "src/components/Blog";
import Button from "src/components/Button";
import Footer from "src/components/Footer";
import Github from "src/components/Github";
import Header from "src/components/Header";
import Hero from "src/components/Hero";
import Portfolio from "src/components/Portfolio";
import Tweet from "src/components/Tweet";

const Home = () => {
  return (
    <div id="wrapper">
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <main>
        <Hero />
        <div className="mx-4 mt-10">
          <Blog />
          <Button text="View All" href="/blogPage" />
        </div>
        <div className="mx-4 mt-[61px] md:mt-[100px]">
          <Portfolio />
          <Button text="View All" href="/portfolioPage" />
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-20">
          <Github />
          <Tweet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
