import { TypographyStylesProvider } from "@mantine/core";
import dayjs from "dayjs";
import Link from "next/link";
import Button from "src/components/Button";
import HomeContentTitle from "./HomeContentTitle";

const Tweet = (props) => {
  const user = props.twitterUser;
  return (
    <div className="mx-4 mt-[61px] md:mt-[100px]">
      <HomeContentTitle title="Twitter" />
      <div className="md:h-[482px] md:overflow-y-scroll">
        {props.embedTweets.map((tweet) => {
          return (
            <Link
              href={`https://twitter.com/${user.username}/status/${tweet.id}`}
              key={tweet.id}
            >
              <a
                className="mt-10 mb-[44px] flex transition duration-200 hover:opacity-60"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="mr-4">
                  <img
                    src={user.profile_image_url}
                    alt="twitterアカウント画像"
                    className="rounded-full"
                  />
                </div>
                <div className="w-[80%]">
                  <div className="flex flex-col md:flex-row md:items-center">
                    <h2 className="font-bold">{user.name}</h2>
                    <p className="text-xs font-bold text-[#909296] md:ml-2">
                      {`@${user.username}・${dayjs(tweet.created_at).format(
                        "M月D日"
                      )}`}
                    </p>
                  </div>
                  <TypographyStylesProvider>
                    <div
                      className="mt-1 leading-6"
                      dangerouslySetInnerHTML={{
                        __html: tweet.html
                          .split(`<blockquote class="twitter-tweet">`)[1]
                          .split(`&mdash;`)[0],
                      }}
                    />
                  </TypographyStylesProvider>
                </div>
              </a>
            </Link>
          );
        })}
      </div>
      <Button
        text="View on Twitter"
        href="https://twitter.com/uolYUd2kPpw3yRY"
        target="_blank"
        rel="noopener noreferrer"
      />
    </div>
  );
};

export default Tweet;
