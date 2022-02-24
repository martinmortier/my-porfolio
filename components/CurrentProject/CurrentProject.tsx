import Image from "next/image";
import styles from "./CurrentProject.module.css";
import magic_card from "../../public/projects/magic_card.png";
import planhess from "../../public/projects/planhess.png";
import portfolio from "../../public/projects/portfolio.png";

const CurrentProject = (): JSX.Element => {
  return (
    <div className={styles.container}>
      Latest Projects
      <div className={styles.projectsContainer}>
        <div className={styles.leftSection}>
          <div style={{ flex: 1 }}>
            <div className={styles.imageContainer}>
              <Image
                src={magic_card}
                width={magic_card.width}
                height={magic_card.height}
                alt="Magic card project"
                placeholder="blur"
              />
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div className={styles.imageContainer}>
              <Image
                src={portfolio}
                height={portfolio.height}
                width={portfolio.width}
                alt="Portfolio project"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
        <div className={styles.rightSection}>
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
  );
};

export default CurrentProject;
