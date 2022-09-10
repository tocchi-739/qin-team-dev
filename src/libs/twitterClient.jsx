import { TwitterApi } from "twitter-api-v2";

export const twitterClient = new TwitterApi(process.env.TWITTER_USER_TOKEN);
