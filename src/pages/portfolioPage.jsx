import Head from "next/head";
import Footer from "src/components/Footer";
import Header from "src/components/Header";
import Portfolio from "src/components/Portfolio";

const PortfolioPage = () => {
  return (
    <div id="wrapper">
      <Head>
        <title>Portfolio</title>
      </Head>
      <Header />
      <main>
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
