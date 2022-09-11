import { useMantineColorScheme } from "@mantine/core";
import { useState } from "react";
import HomeContentTitle from "src/components/HomeContentTitle";
import Layout from "src/components/Layout/Layout";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast("Here is your toast.");

const Contact = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    // バリデーションここから;
    const regex =
      /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/; //メールアドレス正規表現 username@example.com
    if (!regex.test(email)) {
      toast.error("メールアドレスに誤りがあります");
      return;
    } else if ((email == "") | (name == "") | (message == "")) {
      toast.error("空欄を埋めてください");
      return;
    }
    // バリデーションここまで;

    const inputData = {
      email,
      name,
      message,
    };
    toast.loading("送信中...");
    const data = await fetch("/api/contactPost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputData }),
    });
    toast.remove();
    const json = await data.json();

    if (json) {
      setEmail(""), setName(""), setMessage("");
      toast.success("フォームを送信しました");
    } else {
      toast.error("エラーです");
    }
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
      <button
        type="submit"
        onClick={handleSubmit}
        className="mx-auto mt-6 flex md:mt-10"
      >
        <a
          className={`inline-block rounded-full px-[18px] py-[12px] text-center text-white transition duration-200 hover:opacity-60  ${
            dark ? "bg-[#676767]" : "bg-gray-800"
          }`}
        >
          Send message
        </a>
      </button>
      <Toaster />
    </Layout>
  );
};

export default Contact;
