import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ProjectCard from "@/components/UIComp/ProjectCard";
import type { ProjectCardProps } from "@/components/UIComp/ProjectCard";
import { cardVariants } from "@/cardVariant";
import ExerEase from "@/assets/exerease_3.png";
import Interture from "@/assets/interture_1.png";
import UniClaim from "@/assets/uniclaim.png";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: "some" });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [activeTab, setActiveTab] = useState<"development" | "design">(
    () =>
      (localStorage.getItem("lastViewedTab") as "development" | "design") ||
      "development"
  );

  useEffect(() => {
    if (isInView) setHasAnimated(true);
  }, [isInView]);

  useEffect(() => {
    localStorage.setItem("lastViewedTab", activeTab);
  }, [activeTab]);

  const developmentProjects: ProjectCardProps[] = [
    {
      id: "dev-1",
      image: Interture,
      title: "Interture",
      year: "2023",
      description:
        "Interture is a sleek furniture e-commerce platform that lets users easily browse and buy quality home pieces from trusted brands.",
      technologies: ["React", "Firebase"],
      type: ["Website"], // ✅ now an array of literals
      githubLink: "https://github.com/paulsalaan",
    },
    {
      id: "dev-2",
      image: UniClaim,
      title: "UniClaim",
      year: "2025",
      description:
        "UniClaim is a cross-platform lost and found system specifically tailored for the USTP-CDO campus, designed to help the students and locate lost items efficiently.",
      technologies: ["React", "Firebase", "Django"],
      type: ["Mobile", "Website"],
      githubLink: "",
    },
  ];

  const designProjects: ProjectCardProps[] = [
    {
      id: "des-1",
      image: ExerEase,
      title: "ExerEase",
      year: "2025",
      description:
        "ExerEase makes workout planning easy with a clean, responsive design and personalized routines based on time, goals, and skill level—featuring animated demos and adaptive difficulty.",
      technologies: ["Figma", "Canva", "Pexels", "Mobbin"],
      type: ["Mobile"], // ✅ now an array
    },
  ];

  const projects =
    activeTab === "development" ? developmentProjects : designProjects;

  return (
    <section ref={ref} className="py-10">
      {/* Section title */}
      <motion.div
        className="w-full flex items-center justify-center"
        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        animate={hasAnimated ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
      >
        <h1 className="font-inter text-sm font-bold bg-black text-white mb-5 mt-7 px-3 py-1 rounded-md dark:bg-white dark:text-black">
          My Projects
        </h1>
      </motion.div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        animate={hasAnimated ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.7 }}
        className="text-black dark:text-white"
      >
        <h1 className="text-4xl lg:text-5xl text-center font-geist tracking-tighter font-bold">
          Have a look at my recent builds
        </h1>
        <p className="mt-3 text-center text-lg font-inter leading-7 lg:leading-9 tracking-tight lg:text-2xl max-w-lg text-zinc-500 dark:text-zinc-400 mx-auto">
          From 'Hello World' to centering divs like it's a boss battle. Here are
          the projects I made instead of touching grass.
        </p>
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        animate={hasAnimated ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
        transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
        className="text-black dark:text-white"
      >
        <div className="flex mt-8 lg:mt-14 gap-2 bg-gray-100 dark:bg-[#1b1b1b] rounded-md p-1">
          <button
            onClick={() => setActiveTab("development")}
            className={`px-4 py-2 text-sm font-inter w-full rounded-sm font-medium transition-all ${
              activeTab === "development"
                ? "bg-white text-black dark:bg-black dark:text-white"
                : ""
            }`}
          >
            Development
          </button>
          <button
            onClick={() => setActiveTab("design")}
            className={`px-4 py-2 text-sm font-inter w-full rounded-sm font-medium transition-all ${
              activeTab === "design"
                ? "bg-white text-black dark:bg-black dark:text-white"
                : ""
            }`}
          >
            Design
          </button>
        </div>
      </motion.div>

      {/* Projects */}
      <motion.div
        className="mt-5"
        initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          delay: 0.7,
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
            >
              <ProjectCard
                {...project}
                delay={index * 0.2}
                type={project.type}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
