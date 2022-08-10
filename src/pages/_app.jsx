import "src/styles/globals.css";
import { MantineProvider } from "@mantine/core";

const MyApp = ({ Component, pageProps }) => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: "light" }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
};

export default MyApp;
