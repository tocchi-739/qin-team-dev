import Blog from "src/components/Blog";
import Layout from "src/components/Layout/Layout";
import { Pagination } from "src/components/Pagination";
import { client } from "src/libs/client";

export const getStaticProps = async () => {
  const data = await client.getList({
    endpoint: "blog",
    queries: { offset: 0, limit: 10 },
  });
  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount,
    },
  };
};

const BlogPage = (props) => {
  return (
    <Layout title={"Blog"}>
      <Blog blogData={props.blog} />
      <div className="mt-6 text-center">
        <Pagination totalCount={props.totalCount} />
      </div>
    </Layout>
  );
};

export default BlogPage;
