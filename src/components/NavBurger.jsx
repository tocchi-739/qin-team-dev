import { useState } from "react";
import { Burger } from "@mantine/core";

const NavBurger = () => {
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  return (
    <Burger
      opened={opened}
      onClick={() => setOpened((o) => !o)}
      title={title}
    />
  );
};

export default NavBurger;
