import Link from "next/link";
import { useEffect, useState } from "react";
import { Burger } from "@mantine/core";
import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { FaRegMoon, FaSun } from "react-icons/fa";

import NavItems from "./NavItems";

const Header = () => {
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  useEffect(() => {
    if (opened) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [opened]);

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
            <NavItems />
          </div>
        ) : null}

        <div className="mx-4 flex items-center justify-between">
          <div className={`ml-1 md:hidden ${opened ? "z-50" : ""}`}>
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              title={title}
              color={opened ? "#FFFFFF" : ""}
            />
          </div>

          <div className="text-lg font-bold transition duration-200 hover:opacity-60">
            <Link href="/">
              <a>Shimabu IT University</a>
            </Link>
          </div>
          <div className="flex">
            <NavItems width="md" />
            <ActionIcon
              variant="outline"
              color={dark ? "yellow" : "blue"}
              onClick={() => toggleColorScheme()}
              title="Toggle color scheme"
            >
              {dark ? <FaSun size={18} /> : <FaRegMoon size={18} />}
            </ActionIcon>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
