import dayjs from "dayjs";
import Image from "next/image";
import HomeContentTitle from "src/components/HomeContentTitle";
import Layout from "src/components/Layout/Layout";
import { client } from "src/libs/client";

const portfolioDetail = (props) => {
  const portfolioData = props.data;
  return (
    <Layout title={portfolioData.title}>
      <HomeContentTitle title={portfolioData.title} />
      <p className="mt-2 text-xs font-bold text-[#909296]">
        {`制作期間：${dayjs(portfolioData.productionStart).format(
          "YYYY.MM"
        )}-${dayjs(portfolioData.productionEnd).format("YYYY.MM")}`}
      </p>
      <div className="relative aspect-video w-full">
        <Image
          src={portfolioData.thumbnail.url}
          layout="fill"
          objectFit="contain" //containだとsp版で横いっぱいの表示ができなかった
          alt="portfolioの画像です"
        />
      </div>
      <p className="mt-2">{portfolioData.description}</p>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const data = await client.getList({ endpoint: "portfolio" });
  const ids = data.contents.map((content) => `/portfolioPage/${content.id}`);
  return {
    paths: ids,
    fallback: "blocking",
  };
};

export const getStaticProps = async (ctx) => {
  const data = await client.getListDetail({
    endpoint: "portfolio",
    contentId: ctx.params.id,
  });
  console.log(`${data.title}がSG化されました`);
  return {
    props: { data },
  };
};

export default portfolioDetail;
