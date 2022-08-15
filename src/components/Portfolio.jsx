import Image from "next/image";
import Link from "next/link";
import HomeContentTitle from "./HomeContentTitle";

export const PcPortfolioList = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
];
export const HomeSpPortfolioList = PcPortfolioList.slice(0, 3);
export const SpPortfolioList = PcPortfolioList.slice(0, 4);

const Portfolio = (props) => {
  return (
    <div>
      <HomeContentTitle title="Protfolio" />
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 md:pt-3 lg:grid-cols-3">
        {props.portfolioList.map((portfolio) => {
          return (
            <Link href="#" key={portfolio.id}>
              <a className="mt-10 block hover:opacity-60 md:mt-0">
                <div className="relative h-[184px] min-w-[200px] max-w-[700px]">
                  <Image
                    src="/assets/img/Thumbnail.jpg"
                    layout="fill"
                    objectFit="cover" //containだとsp版で横いっぱいの表示ができなかった
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
      </div>
    </div>
  );
};

export default Portfolio;
