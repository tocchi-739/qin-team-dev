import Head from "next/head";
import Footer from "src/components/Footer";
import Header from "src/components/Header";

const Blog = () => {
  return (
    <div className="m-auto max-w-[390px]">
      <Head>
        <title>Blog</title>
      </Head>
      <Header />
      <main className="pt-[109px]">blogページです</main>
      <Footer />
    </div>
  );
};

export default Blog;
