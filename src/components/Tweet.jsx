import Image from "next/image";
import Button from "./Button";
import HomeContentTitle from "./HomeContentTitle";

const tweetList = [{ id: 1 }, { id: 2 }, { id: 3 }];

const Tweet = () => {
  return (
    <div className="mx-4 mt-[61px] md:mt-[100px]">
      <HomeContentTitle title="Twitter" />
      {tweetList.map((tweet) => {
        return (
          <div className="mt-10 mb-[56px] flex" key={tweet.id}>
            <div className="mr-4">
              <Image
                src="/assets/img/TwitterAccountImage.jpg"
                width={38}
                height={38}
                alt="twitterアカウント画像"
              />
            </div>
            <div className="w-[80%]">
              <div className="flex flex-col md:flex-row md:items-center">
                <h2 className="font-bold">しまぶーのIT大学</h2>
                <p className="text-xs font-bold text-[#909296] md:ml-2">
                  @shimabu_it・5月25日
                </p>
              </div>
              <p className="mt-1 text-sm">
                📣 新サービス「Noway Form」をリリースしました！
                <br />
                <br />
                NowayFormは、Notionのデータベースをもとにフォームを作成できるサービスです。これまでGoogle
                FormsでやっていたことがNotionだけで完結します✌✨
                <br />
                <br />
                試しに使っていただけると幸いです😊
                <br />
                <br />
                <a
                  href="https://www.noway-form.com/ja"
                  className="text-[#228BE6]"
                >
                  https://www.noway-form.com/ja
                </a>
              </p>
            </div>
          </div>
        );
      })}
      <Button text="View on Twitter" href="#" />
    </div>
  );
};

export default Tweet;
