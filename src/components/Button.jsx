import { useMantineColorScheme } from "@mantine/core";
import Link from "next/link";

const Button = (props) => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <div className="mt-6 flex items-center justify-center md:mt-10">
      <Link href={props.href}>
        <a
          target={props.target}
          rel={props.rel}
          className={`inline-block rounded-full px-[22px] py-[10px] text-center text-white transition duration-200 hover:opacity-60 ${
            dark ? "bg-[#676767]" : "bg-gray-800"
          }`}
        >
          {props.text}
        </a>
      </Link>
    </div>
  );
};

export default Button;
