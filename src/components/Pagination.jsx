import { useMantineColorScheme } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";

export const Pagination = ({ totalCount }) => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const PER_PAGE = 10;
  const router = useRouter();
  const pageNumber = router.query.id;

  const getRangeArray = (totalCount, perPage) =>
    [...Array(Math.ceil(totalCount / perPage))].map((_, index) => index + 1);

  return (
    <ul className="mt-10 flex justify-center">
      {getRangeArray(totalCount, PER_PAGE).map((number, index) => (
        <li
          key={index}
          className={`mr-2 rounded-full transition duration-200 hover:opacity-60 ${
            number == pageNumber
              ? `${dark ? "bg-gray-300 text-black" : "bg-gray-800 text-white"}`
              : "bg-inherit"
          }  `}
        >
          {number == pageNumber ? (
            <div className="block px-4 py-2">{number}</div>
          ) : (
            <Link href={`/blogPage/page/${number}`}>
              <a className="block px-4 py-2">{number}</a>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};
