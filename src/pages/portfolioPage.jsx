import Head from "next/head";
import Footer from "src/components/Footer";
import Header from "src/components/Header";
import Portfolio, {
  PcPortfolioList,
  SpPortfolioList,
} from "src/components/Portfolio";
import useWindowSize from "src/hooks/useWindowSize";

const PortfolioPage = () => {
  const width = useWindowSize();
  return (
    <div id="wrapper">
      <Head>
        <title>Portfolio</title>
      </Head>
      <Header />
      <main>
        {width < 640 ? (
          <Portfolio portfolioList={SpPortfolioList} />
        ) : (
          <Portfolio portfolioList={PcPortfolioList} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
