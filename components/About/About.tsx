import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./About.module.css";
import { motion, useAnimation } from "framer-motion";
import memoji from "../../public/memoji.png";
import carouselImages from "../carouselimages";

const About = (): JSX.Element => {
  const [width, setWidth] = useState<number>(0);
  const carousel = useRef(null);
  const controls = useAnimation();

  const sequences = async () => {
    await controls.start({
      x: -width,
      transition: { duration: 5, ease: "linear" },
    });
    await controls.start({
      x: 0,
      transition: { duration: 5, ease: "linear" },
    });
    sequences();
  };
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    sequences();
  });

  return (
    <div className={styles.container}>
      <div className={styles.aboutMeContainer}>
        <div className={styles.emojiContainer}>
          <div className={styles.emojiBackground}>
            <div className={styles.emojiImage}>
              <Image src={memoji} layout="fill" alt="bitmoji" />
            </div>
          </div>
        </div>
        <section className={styles.textContainer}>
          <p>
            <span style={{ fontWeight: "bold" }}>- About me</span>
            <br />
            Hi, I&apos;m Martin. I&apos;m 26 years old, and I&apos;m currently
            located in Tournai, Belgium. I have a computer science degree done
            at Haute Ecole Louvain en Hainaut.
          </p>
        </section>
      </div>
      <div className={styles.mySkillsContainer}>
        <div>My skills</div>
        <motion.div
          ref={carousel}
          className={styles.carousel}
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            animate={controls}
            className={styles.inner_carousel}
          >
            {carouselImages.map((image) => {
              return (
                <motion.div className={styles.item} key={image.src}>
                  <Image src={image} alt="" width={230} height={200} />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
