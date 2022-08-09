import Head from "next/head";
import Footer from "src/components/Footer";
import Header from "src/components/Header";

const BlogDetail = () => {
  return (
    <div className="m-auto max-w-[390px]">
      <Head>
        <title>BlogDetail</title>
      </Head>
      <Header />
      <main>blog詳細ページです</main>
      <Footer />
    </div>
  );
};

export default BlogDetail;
