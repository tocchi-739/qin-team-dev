import Image from "next/image";
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
        <div className="text-lg font-bold">Shimabu IT University</div>
        <div>
          <Image
            src="/assets/svgs/Dark_Mode.svg"
            width={34}
            height={34}
            alt="ダークモードのマーク"
          />
        </div>
      </div>
      <br />
      {/* ハンバーガー内容 */}
      <ul className="flex">
        {NAV_ITEMS.map((item) => {
          return (
            <li className="mr-2" key={item.id}>
              <Link href={item.href}>
                <a className="hover:opacity-60">{item.label}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;
