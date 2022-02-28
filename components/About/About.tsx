import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./About.module.css";
import { motion, useAnimation } from "framer-motion";
import memoji from "../../public/memoji.png";
import carouselImages from "../carouselImages";

const About = ({ aboutRef }: any): JSX.Element => {
  const [width, setWidth] = useState<number>(0);
  const carousel = useRef<null | HTMLDivElement>(null);
  const controls = useAnimation();

  const sequences = async () => {
    await controls.start({
      x: -width,
      transition: { duration: 10, ease: "linear" },
    });
    await controls.start({
      x: 0,
      transition: { duration: 10, ease: "linear" },
    });
    sequences();
  };
  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
    sequences();
  });

  return (
    <div className={styles.container} ref={aboutRef}>
      <div className={styles.aboutMeContainer}>
        <div className={styles.emojiContainer}>
          <div className={styles.emojiBackground}>
            <div className={styles.emojiImage}>
              <Image
                src={memoji}
                layout="fill"
                alt="bitmoji"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
        <section className={styles.textContainer}>
          <h1 className={styles.aboutMeTitle}>- About me</h1>
          <p className={styles.textDescription}>
            Hi, I&apos;m Martin. I&apos;m 26 years old and I&apos;m currently
            located in Rennaz, Switzerland.🇨🇭 <br /> I did a computer science
            degree at Haute Ecole Louvain en Hainaut in Belgium. <br />I would
            like to join a team as front-end developer but I can also code in
            back-end. I&apos;m in love with React so I&apos;d like work with
            this library. However, I am open-minded and like to learn new things
            so feel free to send me some offers. 😁
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
                  <Image
                    src={image}
                    alt=""
                    width={230}
                    height={200}
                    placeholder="blur"
                  />
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
