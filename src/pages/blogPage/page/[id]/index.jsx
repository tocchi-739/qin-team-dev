import Image from "next/image";
import Blog from "src/components/Blog";
import Layout from "src/components/Layout/Layout";
import { Pagination } from "src/components/Pagination";
import { client } from "src/libs/client";

const PER_PAGE = 10;

const BlogPagedId = (props) => {
  return (
    <Layout title={"Blog"}>
      <Blog blogData={props.blog} />
      <div className="mt-6 text-center">
        <Pagination totalCount={props.totalCount} />
      </div>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const repos = await client.get({ endpoint: "blog" });
  const pageNumbers = [];
  const range = (start, end) =>
    [...Array(end - start + 1)].map((_, i) => start + i);
  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map(
    (repo) => `/blogPage/page/${repo}`
  );
  return { paths, fallback: false };
};

export const getStaticProps = async (ctx) => {
  const contentId = ctx.params.id;
  const data = await client.getList({
    endpoint: "blog",
    queries: { offset: (contentId - 1) * 10, limit: 10 },
    contentId,
  });
  console.log(data);
  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount,
    },
  };
};

export default BlogPagedId;
