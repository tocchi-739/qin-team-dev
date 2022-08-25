import { useMantineColorScheme } from "@mantine/core";
import axios from "axios";
import { useState } from "react";
import Button from "src/components/Button";
import HomeContentTitle from "src/components/HomeContentTitle";
import Layout from "src/components/Layout/Layout";

const Contact = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    //バリデーションここから
    const regex =
      /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/; //メールアドレス正規表現 username@example.com
    if (!regex.test(email)) {
      alert("メールアドレスに誤りがあります");
      return;
    } else if ((email == "") | (name == "") | (message == "")) {
      alert("空欄を埋めてください");
      return;
    }
    //バリデーションここまで

    const url = "https://qin-team-dev-blog.microcms.io/api/v1/contact";
    const data = {
      email,
      name,
      message,
    };
    await axios
      .post(url, data, {
        headers: {
          "Content-Type": "application/json",
          "X-MICROCMS-API-KEY": process.env.NEXT_PUBLIC_BLOG_API_KEY, // 作成したAPI-KEY
        },
      })
      .then(function (response) {
        console.log(response);
        setEmail(""), setName(""), setMessage("");
        alert("フォームを送信しました");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Taro Yamada"
          className="mt-1 mb-4 border-[1px] border-[#CED4DA] px-[12px] py-[7px]"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label htmlFor="message">Your message</label>
        <textarea
          id="message"
          name="message"
          cols="30"
          rows="2"
          placeholder="I want to order your goods"
          className="mt-1 mb-4 border-[1px] border-[#CED4DA] py-[7px] pl-[12px]"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        ></textarea>
      </form>
      {/* <Button text="Send message" href="/contact" /> */}
      <button
        type="submit"
        onClick={handleSubmit}
        className="mx-auto mt-6 flex md:mt-10"
      >
        <a
          className={`inline-block rounded-full px-[18px] py-[12px] text-center text-white hover:opacity-60  ${
            dark ? "bg-[#676767]" : "bg-gray-800"
          }`}
        >
          Send message
        </a>
      </button>
    </Layout>
  );
};

export default Contact;
