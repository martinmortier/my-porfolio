import Image from "next/image";
import Link from "next/link";
import styles from "./CurrentProject.module.css";
import magic_card from "../../public/projects/magic_card.png";
import planhess from "../../public/projects/planhess.png";
import portfolio from "../../public/projects/portfolio.png";
import { FaGithub } from "react-icons/fa";

const CurrentProject = ({ currentProjectRef }: any): JSX.Element => {
  return (
    <div className={styles.container} ref={currentProjectRef}>
      <h1 className={styles.title}>Latest Projects</h1>
      <div className={styles.projectsContainer}>
        <div className={styles.leftSection}>
          <div className={styles.projectContainer}>
            <div className={styles.imageContainer}>
              <Image
                src={magic_card}
                width={magic_card.width}
                height={magic_card.height}
                alt="Magic card project"
                placeholder="blur"
              />
            </div>
            <div className={styles.projectDescription}>
              <p>Magic Match is a flip card memory game.</p>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Link href="https://github.com/martinmortier/magic-memory">
                  <div>
                    <FaGithub size="2em" style={{ cursor: "pointer" }} />
                  </div>
                </Link>
                <Link href="https://magic-memory-mbtakvyhl-martinmortier.vercel.app/">
                  Play with it
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.projectContainer}>
            <div className={styles.imageContainer}>
              <Image
                src={portfolio}
                height={portfolio.height}
                width={portfolio.width}
                alt="Portfolio project"
                placeholder="blur"
              />
            </div>
            <div className={styles.projectDescription}>
              <p>Test 2</p>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Link href="https://www.google.fr">
                  <FaGithub size="2em" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.projectContainer}>
            <div className={styles.projectDescription}>
              <p>Test 3</p>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Link href="https://www.google.fr">
                  <FaGithub size="2em" />
                </Link>
              </div>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src={planhess}
                width={planhess.width}
                height={planhess.height}
                alt="Planhess project"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentProject;
