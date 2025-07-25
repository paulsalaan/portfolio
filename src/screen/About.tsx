import { motion } from "framer-motion";

const content = [
  <>
    I'm a{" "}
    <span className="text-black dark:text-white font-semibold">
      4th-year BSIT student at USTP-CDO Campus
    </span>{" "}
    with a passion for building accessible, user-centered digital experiences,
    continuously learning and growing as a future full-stack developer.
  </>,
  <>
    <span className="text-black dark:text-white font-semibold">
      With a strong interest in UI/UX design,
    </span>{" "}
    I aim to craft interfaces that are both functional and visually engaging. I
    am committed to designing user-centric solutions that enhance usability and
    accessibility.{" "}
    <span className="text-black dark:text-white font-semibold">
      By combining aesthetic appeal with strategic functionality, I strive to
      deliver intuitive and effective digital experiences.
    </span>
  </>,
];

const About = () => {
  return (
    <section>
      <motion.h1
        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
        className="font-inter text-lg font-bold mb-2 lg:mb-3"
      >
        About
      </motion.h1>

      {content.map((paragraph, index) => (
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 1 + index * 0.1,
          }}
          className="text-sm leading-6 lg:text-[15px] font-inter text-gray-800 dark:text-gray-200 mb-3"
        >
          {paragraph}
        </motion.p>
      ))}
    </section>
  );
};

export default About;
