import NextNProgress from "nextjs-progressbar";
import Layout from "../containers/Layout";
import ContextProvider from "../context/Context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Layout>
        <NextNProgress />
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  );
}

export default MyApp;
