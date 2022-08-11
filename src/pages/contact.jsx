import Head from "next/head";
import Footer from "src/components/Footer";
import Header from "src/components/Header";

const Contact = () => {
  return (
    <div className="m-auto max-w-[390px]">
      <Head>
        <title>Contact</title>
      </Head>
      <Header />
      <main className="pt-[109px]">contactページです</main>
      <Footer />
    </div>
  );
};

export default Contact;
