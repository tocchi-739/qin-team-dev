import dayjs from "dayjs";
import HomeContentTitle from "src/components/HomeContentTitle";
import Layout from "src/components/Layout/Layout";
import { client } from "src/libs/client";

const BlogDetail = (props) => {
  return (
    <Layout title={props.data.title}>
      <HomeContentTitle title={props.data.title} />

      <time
        dateTime={props.data.publishedAt}
        className="text-xs font-bold text-[#909296]"
      >
        {dayjs(props.data.publishedAt).format("YYYY.MM.DD")}
      </time>
      <article
        className="prose prose-sm mt-6 max-w-full"
        dangerouslySetInnerHTML={{ __html: props.data.body }}
      />
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const data = await client.getList({ endpoint: "blog" });
  const ids = data.contents.map((content) => `/blogPage/${content.id}`);
  return {
    paths: ids,
    fallback: "blocking",
  };
};

export const getStaticProps = async (ctx) => {
  const data = await client.getListDetail({
    endpoint: "blog",
    contentId: ctx.params.id,
  });
  console.log(`${data.title}がSG化されました`);
  return {
    props: { data },
  };
};

export default BlogDetail;
