import Image from "next/image";
import Blog from "src/components/Blog";
import Layout from "src/components/Layout/Layout";
import { client } from "src/libs/client";

export const getStaticProps = async () => {
  const data = await client.getList({
    endpoint: "blog",
  });
  return {
    props: { data },
  };
};

const BlogPage = (props) => {
  return (
    <Layout title={"Blog"}>
      <Blog blogData={props.data.contents} />
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
