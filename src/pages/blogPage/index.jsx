import Head from "next/head";
import Image from "next/image";
import Blog, { BlogPageBlogList } from "src/components/Blog";
import Layout from "src/components/Layout/Layout";

const BlogPage = () => {
  return (
    <Layout title={"Blog"}>
      <Blog blogList={BlogPageBlogList} />
      <div className="mt-6 text-center">
        <Image
          src="/assets/svgs/Loader.svg"
          width={36}
          height={36}
          alt="さらに読み込むマーク"
        />
      </div>
    </Layout>
  );
};

export default BlogPage;
