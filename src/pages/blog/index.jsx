import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "src/components/Footer";
import Header from "src/components/Header";
import HomeContentTitle from "src/components/HomeContentTitle";

const blogList = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
];

const Blog = () => {
  return (
    <div className="m-auto max-w-[390px]">
      <Head>
        <title>Blog</title>
      </Head>
      <Header />
      <main className="pt-[109px]">
        <HomeContentTitle title="Blog" />
        {blogList.map((blog) => {
          return (
            <div className="mx-4 mb-6" key={blog.id}>
              <Link href="/blog/1" key={blog.id}>
                <a className="mt-6 block hover:opacity-60">
                  <h3 className="text-[22px] font-bold">This is a header</h3>
                  <p className="mt-2 text-ellipsis leading-6  line-clamp-2">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                  <p className="mt-2 text-xs font-bold text-[#909296]">
                    2022.07.11
                  </p>
                </a>
              </Link>
            </div>
          );
        })}
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

export default Blog;
