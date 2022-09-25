import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import HomeContentTitle from "./HomeContentTitle";

const Github = (props) => {
  return (
    <div className="mx-4 mt-[61px] md:mt-[100px]">
      <HomeContentTitle title="GitHub" />
      {props.githubList.map((github) => {
        return (
          <div className="mt-8 md:mt-10" key={github.name}>
            <Link href={github.url}>
              <a
                className="transition duration-200 hover:opacity-60"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="text-lg font-bold">{github.resourcePath}</h3>
                <p className="mt-2">{github.description}</p>
                <ul className="mt-2 flex">
                  <li className="mr-1">
                    <Image
                      src={"/assets/svgs/Star.svg"}
                      width={25}
                      height={25}
                      alt="Starのマーク"
                    />
                  </li>
                  <li className="mr-4 font-bold text-gray-500">
                    {github.stargazers.totalCount}
                  </li>
                  <li className="mr-1">
                    <Image
                      src={"/assets/svgs/Fork.svg"}
                      width={25}
                      height={25}
                      alt="Forkのマーク"
                    />
                  </li>
                  <li className="font-bold text-gray-500">
                    {github.forks.totalCount}
                  </li>
                </ul>
                <div className="mt-2">
                  <span className="flex h-2 w-full overflow-hidden rounded-md">
                    {github.languages.edges.map((language) => {
                      return (
                        <span
                          style={{
                            width:
                              Math.round(
                                (language.size / github.languages.totalSize) *
                                  1000
                              ) /
                                10 +
                              "%",
                            background: language.node.color,
                          }}
                          key={language.node.name}
                        ></span>
                      );
                    })}
                  </span>
                </div>
                <div className="mt-2">
                  <ul className="flex flex-wrap">
                    {github.languages.edges.map((language) => {
                      return (
                        <li
                          className="mr-2 flex items-center"
                          key={language.node.name}
                        >
                          <span
                            className="h-2 w-2 rounded-full"
                            style={{ background: language.node.color }}
                          ></span>
                          <span className="ml-[6px] text-xs font-bold">
                            {language.node.name}
                          </span>
                          <span className="ml-[6px] text-xs font-bold opacity-70">
                            {Math.round(
                              (language.size / github.languages.totalSize) *
                                1000
                            ) / 10}
                            %
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </a>
            </Link>
          </div>
        );
      })}
      <Button
        text="View on GitHub"
        href={props.githubUser.url}
        target="_blank"
        rel="noopener noreferrer"
      />
    </div>
  );
};

export default Github;
