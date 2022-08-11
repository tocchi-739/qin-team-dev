import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Burger } from "@mantine/core";

const NAV_ITEMS = [
  { id: 1, href: "/about", label: "About" },
  { id: 2, href: "/blog", label: "Blog" },
  { id: 3, href: "/portfolio", label: "portfolio" },
  { id: 4, href: "/contact", label: "Contact" },
];

const Header = () => {
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  return (
    <header className="fixed top-0 z-10 mb-5 mt-[44px] h-[65px] w-[390px] border-b-2 bg-white">
      {opened ? (
        <div className="fixed bottom-0 top-0 z-50 h-screen w-[390px] bg-[#E64980]">
          <div className="mt-[63px] ml-1">
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              title={title}
              color="#FFFFFF"
            />
          </div>

          <ul className="mt-[50px] ml-6 flex flex-col">
            {NAV_ITEMS.map((item) => {
              return (
                <li
                  className="mb-4 text-[28px] font-bold text-white"
                  key={item.id}
                >
                  <Link href={item.href}>
                    <a className="hover:opacity-60">{item.label}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div className="flex h-full items-center justify-between">
          <div>
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              title={title}
            />
          </div>
          <div className="text-lg font-bold">
            <Link href="/">
              <a>Shimabu IT University</a>
            </Link>
          </div>
          <button>
            <Image
              src="/assets/svgs/Dark_Mode.svg"
              width={34}
              height={34}
              alt="ダークモードのマーク"
            />
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
