import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { BlurFade } from "@/components/magicui/blur-fade";

const techStack = [
  "React",
  "Vite",
  "Tailwind",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Cassandra",
  "Figma",
  "Framer",
  "VS Code",
  "GitHub",
  "Git",
  "Slack",
  "Abobe Photoshop",
  "Adobe Illustrator",
  "Framer",
  "Typescript",
  "Firebase",
  "Canva",
];

const TechStack = () => {
  const { ref, inView } = useInView({ threshold: 0.7 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView) setHasAnimated(true);
  }, [inView]);

  return (
    <section ref={ref} className="">
      <BlurFade delay={2} inView={hasAnimated} blur="12px">
        {/* Animated Section Title */}
        <motion.h1
          className="font-inter text-lg lg:text-xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Skills
        </motion.h1>

        {/* Animated Tech Stack Items */}
        <div className="w-full flex flex-wrap gap-2 text-[12px] lg:text-[13px] font-inter">
          {techStack.map((tool, index) => (
            <motion.div
              key={tool}
              className="bg-black text-white dark:bg-white dark:text-black py-1 px-3 font-medium rounded-sm hover:bg-gray-800 dark:hover:bg-gray-300"
              initial={{ opacity: 0, y: 10 }}
              animate={
                hasAnimated ? { opacity: 1, y: 0 } : { filter: "blur(8px)" }
              }
              transition={{
                duration: 0.3,
                delay: 0.2 + index * 0.05,
              }}
            >
              {tool}
            </motion.div>
          ))}
        </div>
      </BlurFade>
    </section>
  );
};

export default TechStack;
