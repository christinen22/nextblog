import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/Layout";
import Script from "next/script";

const FirstPost = () => {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      {/*      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload" //load this particular script lazily during browser idle time
        onLoad={() =>
          //un any JavaScript code immediately after the script has finished loading.
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      /> */}
      <h1>First Post</h1>
      <p>HALLÅ</p>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </>
  );
};

export default FirstPost;
