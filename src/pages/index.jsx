import Head from "next/head";
import Link from "next/link";
import Button from "src/components/Button";
import Footer from "src/components/Footer";
import Header from "src/components/Header";
import HomeContentTitle from "src/components/HomeContentTitle";

const blogList = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
const portfolioList = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

const Home = () => {
  return (
    <div className="m-auto max-w-[390px]">
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <main>
        <div className="h-[248px] bg-[#E64980] text-white">
          <div className="mx-auto w-[358px] pt-[53.5px]">
            <h2>Shimabu IT University</h2>
            <p>しまぶーのポートフォリオのためのページです</p>
            <ul className="mt-[43.5px] flex">
              <li className="mr-2">twitter</li>
              <li className="mr-2">facebook</li>
              <li>radio</li>
            </ul>
          </div>
        </div>
        <div className="mx-3">
          <HomeContentTitle title="Blog" />
          {blogList.map((blog) => {
            return (
              <Link href="#" key={blog.id}>
                <a className="mt-6 block hover:bg-slate-300">
                  <h3 className="text-[22px] font-bold">This is a header</h3>
                  <p className="mt-2 text-ellipsis font-medium line-clamp-2">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                  <p className="mt-2 text-xs font-bold text-[#909296]">
                    2022.07.11
                  </p>
                </a>
              </Link>
            );
          })}
          <Button text="View All" />
        </div>
        <div className="mx-3">
          <HomeContentTitle title="Protfolio" />
          {portfolioList.map((portfolio) => {
            return (
              <Link href="#" key={portfolio.id}>
                <a className="mt-10 block hover:bg-slate-300">
                  <img src="assets/img/Thumbnail.jpg"></img>
                  <h3 className="mt-2 text-[22px] font-bold">IT KINGDOM</h3>
                  <p className="mt-2">
                    当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうどいい難易度の制作物です。
                  </p>
                  <p className="mt-2 text-xs font-bold text-[#909296]">
                    2021.10-2021.12
                  </p>
                </a>
              </Link>
            );
          })}
          <Button text="View All" />
        </div>
        <div className="mx-3">
          <HomeContentTitle title="GitHub" />
          <div>
            <h3>lightsound/nexts-tailwind</h3>
            <p>Next.js starter template.</p>
            <ul>
              <li>☆117</li>
              <li>アイコン 18</li>
            </ul>
            <div>横棒</div>
            <div>
              <ul>
                <li>○</li>
                <li>TypeScript</li>
                <li>65.5%</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>○</li>
                <li>Javascript</li>
                <li>33.7%</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>○</li>
                <li>Other</li>
                <li>0.8%</li>
              </ul>
            </div>
          </div>
          <Button text="View on GitHub" />
        </div>
        <div className="mx-3">
          <HomeContentTitle title="Twitter" />
          <div>中身</div>
          <Button text="View on Twitter" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
