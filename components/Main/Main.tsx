import { NextPage } from "next";
import Image from "next/image";
import Navbar from "../Navbar/Navbar";
import profilePhoto from "../../public/profile_photo.png";
import southPic from "../../public/south.png";
import styles from "./Main.module.css";

const Home = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Navbar />
      <section className={styles.mainSection}>
        <div className={styles.leftSection}>
          <div>- Hi there</div>
          <div>
            I&apos;m <span style={{ fontWeight: "bold" }}>Martin Mortier</span>
            <br />I like to code things from scratch, and enjoy bringing ideas
            to life in the browser.
          </div>
          <div className={styles.containerButton}>
            <div className={styles.cvButton}>
              <a href="/Martin_Mortier_CV.pdf" download>
                Download my CV
              </a>
            </div>
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.profilePhotoContainer}>
            <div className={styles.profilePhotoRender}>
              <Image
                src={profilePhoto}
                layout="fill"
                alt="profile picture"
                placeholder="blur"
              />
            </div>
          </div>
          <video className="codingVideo" autoPlay muted loop>
            <source src="/coding_vid.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
      <div className={styles.iconDiv}>
        <Image src={southPic} height={40} width={40} />
      </div>
    </div>
  );
};

export default Home;
