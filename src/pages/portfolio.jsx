import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "src/components/Footer";
import Header from "src/components/Header";
import HomeContentTitle from "src/components/HomeContentTitle";

const portfolioList = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

const Portfolio = () => {
  return (
    <div className="m-auto max-w-[390px]">
      <Head>
        <title>Portfolio</title>
      </Head>
      <Header />
      <main className="pt-[109px]">
        <HomeContentTitle title="Portfolio" />
        {portfolioList.map((portfolio) => {
          return (
            <Link href="#" key={portfolio.id}>
              <a className="mx-4 mt-10 block hover:opacity-60">
                <div className="relative h-[184px] w-full">
                  <Image
                    src="/assets/img/Thumbnail.jpg"
                    layout="fill"
                    objectFit="contain"
                    alt="portfolioの画像です"
                  />
                </div>
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
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
