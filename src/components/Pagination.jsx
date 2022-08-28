import { useMantineColorScheme } from "@mantine/core";
import Link from "next/link";

export const Pagination = ({ totalCount }) => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const PER_PAGE = 10;

  const range = (start, end) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  return (
    <ul className="mt-10 flex justify-center">
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li
          key={index}
          className={`mr-2 text-white  hover:opacity-60 ${
            dark ? "bg-[#676767]" : "bg-gray-800"
          }`}
        >
          <Link href={`/blogPage/page/${number}`}>
            <a className="block px-4 py-2">{number}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
