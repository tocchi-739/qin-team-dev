import Link from "next/link";

const NAV_ITEMS = [
  { href: "/about", label: "About" },
  { href: "/blogPage/page/1", label: "Blog" },
  { href: "/portfolioPage", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

const NavItems = (props) => {
  return (
    <ul
      className={`${
        props.width == "md"
          ? "ml-6 hidden md:flex md:items-center"
          : "mt-[100px] ml-7 flex flex-col"
      }`}
    >
      {NAV_ITEMS.map((item, index) => {
        return (
          <li
            className={`${
              props.width == "md"
                ? "mr-4 text-lg font-bold"
                : "mb-4 text-[28px] font-bold text-white"
            }`}
            key={index}
          >
            <Link href={item.href}>
              <a
                className={`transition duration-200 hover:opacity-60 ${
                  props.width == "md" ? "" : "block"
                }`}
              >
                {item.label}
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
