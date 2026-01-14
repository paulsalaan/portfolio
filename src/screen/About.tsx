import { motion } from "framer-motion";

const content = [
  <>
    I am a{" "}
    <span className="text-black dark:text-white font-semibold">
      fourth-year college student
    </span>{" "}
    pursuing a{" "}
    <span className="text-black dark:text-white font-semibold">
      Bachelor of Science in Information Technology
    </span>{" "}
    at{" "}
    <span className="text-black dark:text-white font-semibold">
      the University of Science and Technology of Southern Philippines – Cagayan
      de Oro Campus (USTP-CDO)
    </span>
    , with a strong interest in{" "}
    <span className="text-black dark:text-white font-semibold">
      building accessible, user-centered digital experiences{" "}
    </span>
    and a commitment to continuous learning as a future full-stack developer.
  </>,
  <>
    <span className="text-black dark:text-white font-semibold">
      With a growing focus on UI/UX design practices,
    </span>{" "}
    I focus on crafting interfaces that are both functional and visually
    engaging. I am committed to developing user-centered solutions that improve
    usability and accessibility.{" "}
    <span className="text-black dark:text-white font-semibold">
      By balancing aesthetic quality with purposeful functionality, I aim to
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
          className="text-sm leading-6 lg:text-[15px] font-inter text-zinc-700 dark:text-zinc-300 mb-3"
        >
          {paragraph}
        </motion.p>
      ))}
    </section>
  );
};

export default About;
