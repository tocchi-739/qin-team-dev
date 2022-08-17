import Layout from "src/components/Layout/Layout";
import Portfolio, {
  PcPortfolioList,
  SpPortfolioList,
} from "src/components/Portfolio";
import useWindowSize from "src/hooks/useWindowSize";

const PortfolioPage = () => {
  const width = useWindowSize();
  return (
    <Layout title={"Portfolio"}>
      {width < 640 ? (
        <Portfolio portfolioList={SpPortfolioList} />
      ) : (
        <Portfolio portfolioList={PcPortfolioList} />
      )}
    </Layout>
  );
};

export default PortfolioPage;
