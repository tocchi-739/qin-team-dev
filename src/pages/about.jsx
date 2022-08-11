import Head from "next/head";
import Footer from "src/components/Footer";
import Header from "src/components/Header";

const About = () => {
  return (
    <div className="m-auto max-w-[390px]">
      <Head>
        <title>About</title>
      </Head>
      <Header />
      <main className="pt-[109px]">aboutページです</main>
      <Footer />
    </div>
  );
};

export default About;
