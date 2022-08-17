import Button from "src/components/Button";
import HomeContentTitle from "src/components/HomeContentTitle";
import Layout from "src/components/Layout/Layout";

const Contact = () => {
  return (
    <Layout title={"Contact"}>
      <HomeContentTitle title="Contact" />
      <form action="" className="flex flex-col text-sm">
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
          className="mt-1 mb-4 border-[1px] border-[#CED4DA] py-[7px] pl-[12px]"
        ></textarea>
      </form>
      <Button text="Send message" href="#" />
    </Layout>
  );
};

export default Contact;
