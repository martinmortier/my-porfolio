import type { NextPage } from "next";
import { useRef } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Main from "../components/Main/Main";
import About from "../components/About/About";
import CurrentProject from "../components/CurrentProject/CurrentProject";
import { BsSuitHeartFill } from "react-icons/bs";
const Home: NextPage = () => {
  const aboutRef = useRef<null | HTMLDivElement>();
  const currentProjectRef = useRef<null | HTMLDivElement>(null);

  return (
    <div>
      <Head>
        <title>Martin Mortier&apos;s portfolio</title>
        <meta name="description" content="Martin Mortier's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <Main aboutRef={aboutRef} currentProjectRef={currentProjectRef} />
          <About aboutRef={aboutRef} />
          <CurrentProject currentProjectRef={currentProjectRef} />
        </main>
        <footer className={styles.footer}>
          <div>
            <p>
              Made with <BsSuitHeartFill color="red" />
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
