import Image from "next/image";
import { useMantineColorScheme } from "@mantine/core";

const { default: Link } = require("next/link");

const svgImages = [
  { id: 1, src: "/assets/svgs/Twitter.svg", alt: "Twitterのマーク" },
  { id: 2, src: "/assets/svgs/Facebook.svg", alt: "Facebookのマーク" },
  { id: 3, src: "/assets/svgs/RSS.svg", alt: "RSSのマーク" },
];

const Hero = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <div
      className={`mx-[-16px] h-[248px] bg-[#E64980] text-white  lg:mx-[-1000px] ${
        dark ? "bg-[#882a4b]" : ""
      }`}
    >
      <div className="mx-auto max-w-[1000px]">
        <div className="mx-4 flex flex-col pt-[53.5px] lg:flex-row lg:justify-between lg:pt-[85.5px]">
          <div>
            <h2 className="text-[28px] font-bold lg:text-4xl">
              Shimabu IT University
            </h2>
            <p className="mt-1 font-bold">
              しまぶーのポートフォリオのためのページです
            </p>
          </div>
          <ul className="mt-[43.5px] flex">
            {svgImages.map((svgImage) => {
              return (
                <li
                  className="mr-2 transition duration-200 hover:opacity-60"
                  key={svgImage.id}
                >
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
    </div>
  );
};

export default Hero;
