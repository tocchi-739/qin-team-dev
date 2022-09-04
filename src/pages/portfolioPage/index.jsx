import Layout from "src/components/Layout/Layout";
import Portfolio from "src/components/Portfolio";
import useWindowSize from "src/hooks/useWindowSize";
import { client } from "src/libs/client";

export const getStaticProps = async () => {
  const portfolioData = await client.getList({
    endpoint: "portfolio",
  });
  return {
    props: { portfolio: portfolioData },
  };
};

const PortfolioPage = (props) => {
  const width = useWindowSize();
  return (
    <Layout title={"Portfolio"}>
      {width < 640 ? (
        <Portfolio portfolioList={props.portfolio.contents.slice(0, 4)} />
      ) : (
        <Portfolio portfolioList={props.portfolio.contents} />
      )}
    </Layout>
  );
};

export default PortfolioPage;
