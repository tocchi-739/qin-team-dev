import Head from "next/head";
import Footer from "src/components/Footer";
import Header from "src/components/Header";

const Portfolio = () => {
  return (
    <div className="m-auto max-w-[390px]">
      <Head>
        <title>Portfolio</title>
      </Head>
      <Header />
      <main className="pt-[109px]">portfolioページです</main>
      <Footer />
    </div>
  );
};

export default Portfolio;
