import axios from "axios";

const handler = async (req, res) => {
  const url = "https://qin-team-dev-blog.microcms.io/api/v1/contact";
  await axios.post(url, req.body.inputData, {
    headers: {
      "Content-Type": "application/json",
      "X-MICROCMS-API-KEY": process.env.API_KEY, // 作成したAPI-KEY
    },
  });
  res.status(200).json({ status: "success" });
};

export default handler;
