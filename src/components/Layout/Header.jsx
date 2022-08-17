import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Burger } from "@mantine/core";
import { ActionIcon, useMantineColorScheme } from "@mantine/core";

const NAV_ITEMS = [
  { id: 1, href: "/about", label: "About" },
  { id: 2, href: "/blogPage", label: "Blog" },
  { id: 3, href: "/portfolioPage", label: "Portfolio" },
  { id: 4, href: "/contact", label: "Contact" },
];

const Header = () => {
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <header
      className={`fixed left-0 z-10 h-[65px] w-full bg-white pb-12 pt-[44px] ${
        dark ? "bg-[#1A1B1E]" : ""
      }`}
    >
      <nav className="mx-auto w-full max-w-[1000px]">
        {opened ? (
          <div
            className={`fixed bottom-0 top-0 left-0 z-50 h-screen w-screen bg-[#E64980] ${
              dark ? "bg-[#882a4b]" : ""
            }`}
          >
            <ul className="mt-[100px] ml-7 flex flex-col">
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
        ) : null}

        <div className="mx-4 flex items-center justify-between">
          {opened ? (
            <div className="z-50  ml-1 md:hidden">
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                title={title}
                color="#FFFFFF"
              />
            </div>
          ) : (
            <div className=" ml-1 md:hidden">
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                title={title}
              />
            </div>
          )}
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
            {/* <button className="hover:opacity-60"> */}
            <ActionIcon
              // variant="outline"
              color={dark ? "yellow" : "blue"}
              onClick={() => toggleColorScheme()}
              title="Toggle color scheme"
            >
              <Image
                src="/assets/svgs/Dark_Mode.svg"
                width={34}
                height={34}
                alt="ダークモードのマーク"
              />
            </ActionIcon>
            {/* </button> */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
