import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import HomeContentTitle from "./HomeContentTitle";

export const PcGithubList = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
];
export const SpGithubList = PcGithubList.slice(0, 3);
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

const Github = (props) => {
  return (
    <div className="mx-4 mt-[61px] md:mt-[100px]">
      <HomeContentTitle title="GitHub" />
      {props.githubList.map((github) => {
        return (
          <div className="mt-8 md:mt-10" key={github.id}>
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
                    <li
                      className="mr-2 hover:text-blue-500"
                      key={githubProgressDetail.id}
                    >
                      <Link href="">
                        <a>
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
                          <span className="ml-[6px] text-xs font-bold opacity-70">
                            {githubProgressDetail.percent}%
                          </span>
                        </a>
                      </Link>
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
  );
};

export default Github;
