import { twitterClient } from "src/libs/twitterClient";

export const getServerSideProps = async () => {
  const readOnlyClient = twitterClient.readOnly;
  const user = await readOnlyClient.v2.userByUsername(
    process.env.TWITTER_USER_NAME,
    {
      "user.fields": "profile_image_url",
    }
  );
  const tweets = await twitterClient.v2.get(
    `users/${process.env.TWITTER_USER_ID}/tweets`,
    {
      max_results: 5,
      "tweet.fields": "created_at",
    }
  );
  return {
    props: {
      user: user,
      tweets: tweets,
    },
  };
};

const Twitter = (props) => {
  const twitterData = props.user.data;
  const tweetsData = props.tweets.data;
  return (
    <div>
      {tweetsData.map((tweet) => {
        return (
          <div key={tweet.id} className="mb-10">
            <img
              src={twitterData.profile_image_url}
              alt="twitterのprofile画像です"
            />
            <h2>{twitterData.name}</h2>
            <p>{twitterData.username}</p>
            {tweet.text}
          </div>
        );
      })}
    </div>
  );
};

export default Twitter;
