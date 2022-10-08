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
          <div className="mt-8 md:mt-10" key={github.id}>
            <a
              href={github.url}
              className="transition duration-200 hover:opacity-60"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="text-lg font-bold">{github.name}</h3>
              <p className="mt-2">
                {github.description ? github.description : "no description"}
              </p>
              <ul className="mt-2 flex font-bold text-gray-500">
                <li className="mr-4 flex">
                  <Image
                    src={"/assets/svgs/Star.svg"}
                    width={25}
                    height={25}
                    alt="Starのマーク"
                  />
                  <p className="ml-1">{github.stargazers.totalCount}</p>
                </li>
                <li className="mr-1 flex">
                  <Image
                    src={"/assets/svgs/Fork.svg"}
                    width={25}
                    height={25}
                    alt="Forkのマーク"
                  />
                  <p className="ml-1">{github.forks.totalCount}</p>
                </li>
              </ul>
              <div className="mt-2">
                <span className="flex h-2 w-full overflow-hidden rounded-full">
                  {github.languages.edges.map((language) => (
                    <span
                      style={{
                        width:
                          Math.round(
                            (language.size / github.languages.totalSize) * 1000
                          ) /
                            10 +
                          "%",
                        background: language.node.color,
                      }}
                      key={language.node.id}
                    ></span>
                  ))}
                </span>
              </div>
              <div className="mt-2">
                <ul className="flex flex-wrap">
                  {github.languages.edges.map((language) => (
                    <li
                      className="mr-4 mt-1 flex items-center"
                      key={language.node.id}
                    >
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{ background: language.node.color }}
                      ></span>
                      <span className="ml-[6px] text-xs font-bold">
                        {language.node.name}
                      </span>
                      <span className="ml-[6px] text-xs font-bold opacity-70">
                        {`${
                          Math.round(
                            (language.size / github.languages.totalSize) * 1000
                          ) / 10
                        }
                            %`}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </a>
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
