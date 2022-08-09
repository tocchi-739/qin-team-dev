import Link from "next/link";

const NAV_ITEMS = [
  { id: 1, href: "/", label: "Index" },
  { id: 2, href: "/about", label: "About" },
  { id: 3, href: "/blog", label: "Blog" },
  { id: 4, href: "/portfolio", label: "portfolio" },
  { id: 5, href: "/contact", label: "Contact" },
];

const Header = () => {
  return (
    <header className="mt-[44px] h-[65px]">
      <div className="flex justify-between">
        <div>ハンバーガー</div>
        <div>Shimabu IT University</div>
        <div>月</div>
      </div>
      <br />
      {/* ハンバーガー内容 */}
      <ul className="flex">
        {NAV_ITEMS.map((item) => {
          return (
            <li className="mr-2" key={item.id}>
              <Link href={item.href}>
                <a>{item.label}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;
