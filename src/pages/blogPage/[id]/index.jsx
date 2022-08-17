import HomeContentTitle from "src/components/HomeContentTitle";
import Layout from "src/components/Layout/Layout";

const BlogDetail = () => {
  return (
    <Layout title={"BlogDetail"}>
      <HomeContentTitle title="This is a header" />

      <p className="text-xs font-bold text-[#909296]">2022.07.11</p>
      <p className="mt-2 text-ellipsis leading-6  line-clamp-2">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit.
      </p>
    </Layout>
  );
};

export default BlogDetail;
