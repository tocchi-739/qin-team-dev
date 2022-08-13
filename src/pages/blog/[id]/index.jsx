import Head from "next/head";
import Footer from "src/components/Footer";
import Header from "src/components/Header";
import HomeContentTitle from "src/components/HomeContentTitle";

const BlogDetail = () => {
  return (
    <div className="m-auto max-w-[1000px]">
      <Head>
        <title>BlogDetail</title>
      </Head>
      <Header />
      <main className="mx-4 pt-[109px]">
        <HomeContentTitle title="This is a header" />

        <p className="text-xs font-bold text-[#909296]">2022.07.11</p>
        <p className="mt-2 text-ellipsis leading-6  line-clamp-2">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetail;
