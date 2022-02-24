import NextNProgress from "nextjs-progressbar";
import Layout from "../containers/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <NextNProgress />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
