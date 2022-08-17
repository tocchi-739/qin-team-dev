import HomeContentTitle from "src/components/HomeContentTitle";
import Layout from "src/components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About"}>
      <HomeContentTitle title="About" />
      <h3 className="text-[22px] font-bold">Lightsound Shimabu</h3>
      <p className="mt-6 leading-8">
        ITエンジニアYouTuber。神戸大学経営学部卒。未経験から独学でプログラミングを勉強し、新卒でヤフーに入社。2019年に株式会社GameHintを創業。
      </p>
    </Layout>
  );
};

export default About;
