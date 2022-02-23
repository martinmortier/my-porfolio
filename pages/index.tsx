import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Main from "../components/Main/Main";
import About from "../components/About/About";
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <Main />
          <About />
        </main>
      </div>
    </div>
  );
};

export default Home;
