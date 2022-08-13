import Head from "next/head";
import Footer from "src/components/Footer";
import Header from "src/components/Header";
import HomeContentTitle from "src/components/HomeContentTitle";

const About = () => {
  return (
    <div className="m-auto max-w-[1000px]">
      <Head>
        <title>About</title>
      </Head>
      <Header />
      <main className="mx-4 pt-[109px]">
        <HomeContentTitle title="About" />
        <h3 className="text-[22px] font-bold">Lightsound Shimabu</h3>
        <p className="mt-6 leading-8">
          ITエンジニアYouTuber。神戸大学経営学部卒。未経験から独学でプログラミングを勉強し、新卒でヤフーに入社。2019年に株式会社GameHintを創業。
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default About;
