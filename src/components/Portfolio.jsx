import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import HomeContentTitle from "./HomeContentTitle";

const Portfolio = (props) => {
  return (
    <div>
      <HomeContentTitle title="Protfolio" />
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 md:pt-3 lg:grid-cols-3">
        {props.portfolioList.map((portfolio) => {
          return (
            <Link
              href={`/portfolioPage/${portfolio.id}`}
              key={portfolio.id}
              prefetch={false}
            >
              <a className="group mt-10 block transition duration-200 hover:opacity-60 md:mt-0">
                <div className="relative h-[184px] min-w-[200px] max-w-[700px]">
                  <Image
                    src={portfolio.thumbnail.url}
                    layout="fill"
                    objectFit="cover" //containだとsp版で横いっぱいの表示ができなかった
                    alt="portfolioの画像です"
                    className="transition duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="mt-2 text-[22px] font-bold">
                  {portfolio.title}
                </h3>
                <p className="mt-2">{portfolio.description}</p>
                <p className="mt-2 text-xs font-bold text-[#909296]">
                  {`${dayjs(portfolio.productionStart).format(
                    "YYYY.MM"
                  )}-${dayjs(portfolio.productionEnd).format("YYYY.MM")}`}
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
