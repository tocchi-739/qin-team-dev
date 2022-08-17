import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
  return (
    <div id="wrapper">
      <Head>
        <title>{props.title}</title>
      </Head>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
