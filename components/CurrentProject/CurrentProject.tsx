import Image from "next/image";
import Link from "next/link";
import styles from "./CurrentProject.module.css";
import magic_card from "../../public/projects/magic_card.webp";
import planhess from "../../public/projects/planhess.webp";
import portfolio from "../../public/projects/portfolio.webp";
import { FaGithub } from "react-icons/fa";

const CurrentProject = ({ currentProjectRef }: any): JSX.Element => {
  return (
    <div className={styles.container} ref={currentProjectRef}>
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
              <p>Magic Match is a flip card memory game</p>
              <p>Made with React</p>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Link href="https://github.com/martinmortier/magic-memory">
                  <div>
                    <FaGithub size="2em" style={{ cursor: "pointer" }} />
                  </div>
                </Link>
                <Link href="https://magic-memory-mbtakvyhl-martinmortier.vercel.app/">
                  <a>Play with it</a>
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
              <p>My personal website</p>
              <p>Made with NextJS</p>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Link href="https://github.com/martinmortier/my-porfolio">
                  <a>
                    <FaGithub size="2em" style={{ cursor: "pointer" }} />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.projectContainer}>
            <div className={styles.projectDescription}>
              <p>
                Planhess is currently my biggest project with React and Node.
                This is an app used to take an overview of which discounts are
                available for the day in your city. <br />
                In relation with this instagram page, we worked together to get
                the first version available.
              </p>
              <p>
                Made with <br />
                React native <br />
                Amazon Web Services hosting MySQL database
                <br />
                NodeJS - ExpressJS framework and Prisma (ORM)
                <br />
                Both front-end and back-end work with GraphQL thank to Apollo
                <br />
              </p>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Link href="https://github.com/planhess/planhess">
                  <a>
                    <FaGithub size="2em" style={{ cursor: "pointer" }} />
                  </a>
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
