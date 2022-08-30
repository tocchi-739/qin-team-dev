import "src/styles/globals.css";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

const MyApp = ({ Component, pageProps }) => {
  const [colorScheme, setColorScheme] = useState("light");
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default MyApp;
