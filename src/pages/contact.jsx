import Head from "next/head";
import Button from "src/components/Button";
import Footer from "src/components/Footer";
import Header from "src/components/Header";
import HomeContentTitle from "src/components/HomeContentTitle";

const Contact = () => {
  return (
    <div className="m-auto max-w-[390px]">
      <Head>
        <title>Contact</title>
      </Head>
      <Header />
      <main className="pt-[109px]">
        <HomeContentTitle title="Contact" />
        <form action="" className="mx-4 flex flex-col text-sm">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="your@email.com"
            className="mt-1 mb-4 border-[1px] border-[#CED4DA] px-[12px] py-[7px]"
          />
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Taro Yamada"
            className="mt-1 mb-4 border-[1px] border-[#CED4DA] px-[12px] py-[7px]"
          />
          <label htmlFor="your-message">Your message</label>
          <textarea
            id="your-message"
            name="your-message"
            cols="30"
            rows="2"
            placeholder="I want to order your goods"
            className="mt-1 mb-4 border-[1px] border-[#CED4DA] px-[12px] py-[7px]"
          ></textarea>
        </form>
        <Button text="Send message" href="#" />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
