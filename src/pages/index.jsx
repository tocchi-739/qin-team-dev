import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Button from "src/components/Button";
import Footer from "src/components/Footer";
import Header from "src/components/Header";
import HomeContentTitle from "src/components/HomeContentTitle";

const blogList = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
const portfolioList = [{ id: 1 }, { id: 2 }, { id: 3 }];
const githubList = [{ id: 1 }, { id: 2 }, { id: 3 }];
const svgImages = [
  { id: 1, src: "/assets/svgs/Twitter.svg", alt: "Twitterのマーク" },
  { id: 2, src: "/assets/svgs/Facebook.svg", alt: "Facebookのマーク" },
  { id: 3, src: "/assets/svgs/RSS.svg", alt: "RSSのマーク" },
];
const githubProgressDetails = [
  {
    id: 1,
    src: "/assets/svgs/Ellipse_blue.svg",
    alt: "箇条書きの点",
    text: "TypeScript",
    percent: 65.5,
  },
  {
    id: 2,
    src: "/assets/svgs/Ellipse_yellow.svg",
    alt: "箇条書きの点",
    text: "JavaScript",
    percent: 33.7,
  },
  {
    id: 3,
    src: "/assets/svgs/Ellipse_gray.svg",
    alt: "箇条書きの点",
    text: "Other",
    percent: 0.8,
  },
];

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
            <h2 className="text-[28px] font-bold">Shimabu IT University</h2>
            <p className="font-bold">
              しまぶーのポートフォリオのためのページです
            </p>
            <ul className="mt-[43.5px] flex">
              {svgImages.map((svgImage) => {
                return (
                  <li className="mr-2" key={svgImage.id}>
                    <Link href="#">
                      <a>
                        <Image
                          src={svgImage.src}
                          width={25}
                          height={25}
                          alt={svgImage.alt}
                        />
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="mx-3 mt-10">
          <HomeContentTitle title="Blog" />
          {blogList.map((blog) => {
            return (
              <Link href="#" key={blog.id}>
                <a className="mt-6 block hover:opacity-60">
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
          <Button text="View All" href="/blog" />
        </div>
        <div className="mx-3 mt-[61px]">
          <HomeContentTitle title="Protfolio" />
          {portfolioList.map((portfolio) => {
            return (
              <Link href="#" key={portfolio.id}>
                <a className="mt-10 block hover:opacity-60">
                  <Image
                    src="/assets/img/Thumbnail.jpg"
                    width={358}
                    height={184}
                    alt="portfolioの画像です"
                  />
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
          <Button text="View All" href="/portfolio" />
        </div>
        <div className="mx-3 mt-[61px]">
          <HomeContentTitle title="GitHub" />
          {githubList.map((github) => {
            return (
              <div className="mt-8" key={github.id}>
                <h3 className="text-lg font-bold">lightsound/nexts-tailwind</h3>
                <p className="mt-2">Next.js starter template.</p>
                <ul className="mt-2 flex">
                  <li className="mr-4">
                    <Image
                      src="/assets/svgs/Star.svg"
                      width={46}
                      height={19}
                      alt="Githubのスター件数の画像です"
                    />
                  </li>
                  <li>
                    <Image
                      src="/assets/svgs/Fork.svg"
                      width={46}
                      height={19}
                      alt="Githubのfork件数の画像です"
                    />
                  </li>
                </ul>
                <div className="mt-2">
                  <span className="flex h-2 w-full overflow-hidden rounded-md">
                    <span className="w-[65.5%] bg-[#3178C6]"></span>
                    <span className="w-[33.7%] bg-[#F1E05A]"></span>
                    <span className="w-[0.8%] bg-[#EDEDED]"></span>
                  </span>
                </div>
                <div className="mt-2">
                  <ul className="flex flex-wrap">
                    {githubProgressDetails.map((githubProgressDetail) => {
                      return (
                        <li className="mr-2" key={githubProgressDetail.id}>
                          <span>
                            <span>
                              <Image
                                src={githubProgressDetail.src}
                                width={6}
                                height={6}
                                alt={githubProgressDetail.alt}
                              />
                            </span>
                            <span className="ml-[6px] text-xs font-bold">
                              {githubProgressDetail.text}
                            </span>
                            <span className="ml-[6px] text-xs font-bold text-[#909296]">
                              {githubProgressDetail.percent}%
                            </span>
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
          <Button text="View on GitHub" href="#" />
        </div>
        <div className="mx-3 mt-[61px]">
          <HomeContentTitle title="Twitter" />
          <div>中身</div>
          <Button text="View on Twitter" href="#" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
