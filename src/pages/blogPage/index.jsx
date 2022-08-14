import Head from "next/head";
import Image from "next/image";
import Blog, { BlogPageBlogList } from "src/components/Blog";
import Footer from "src/components/Footer";
import Header from "src/components/Header";

const BlogPage = () => {
  return (
    <div id="wrapper">
      <Head>
        <title>Blog</title>
      </Head>
      <Header />
      <main>
        <Blog blogList={BlogPageBlogList} />
        <div className="mt-6 text-center">
          <Image
            src="/assets/svgs/Loader.svg"
            width={36}
            height={36}
            alt="さらに読み込むマーク"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
