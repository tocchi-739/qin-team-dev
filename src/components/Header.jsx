import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Burger } from "@mantine/core";

const NAV_ITEMS = [
  { id: 1, href: "/about", label: "About" },
  { id: 2, href: "/blog", label: "Blog" },
  { id: 3, href: "/portfolio", label: "Portfolio" },
  { id: 4, href: "/contact", label: "Contact" },
];

const Header = () => {
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  return (
    <header className="fixed left-0 z-10 h-[65px] w-full bg-white pb-12 pt-[44px]">
      <div className="mx-auto w-full max-w-[1000px]">
        {opened ? (
          <div className="fixed bottom-0 top-0 left-0 z-50 h-screen w-screen bg-[#E64980]">
            <div className="md:nhidden mt-[63px] ml-1">
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
                      <a className="block hover:opacity-60">{item.label}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <div className="mx-4 flex items-center justify-between">
            <div className="md:hidden">
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                title={title}
              />
            </div>
            <div className="text-lg font-bold hover:opacity-60">
              <Link href="/">
                <a>Shimabu IT University</a>
              </Link>
            </div>
            <div className="flex">
              <ul className="ml-6 hidden md:flex md:items-center">
                {NAV_ITEMS.map((item) => {
                  return (
                    <li className="mr-4 text-lg font-bold" key={item.id}>
                      <Link href={item.href}>
                        <a className="hover:opacity-60">{item.label}</a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <button className="hover:opacity-60">
                <Image
                  src="/assets/svgs/Dark_Mode.svg"
                  width={34}
                  height={34}
                  alt="ダークモードのマーク"
                />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
