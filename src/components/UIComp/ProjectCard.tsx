import React from "react";
import { FaGithub, FaGlobe, FaMobileAlt } from "react-icons/fa"; // Import icons

export interface ProjectCardProps {
  image: string;
  title: string;
  year: string;
  description: string;
  technologies: string[];
  type: "Website" | "Mobile";
  githubLink?: string;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  year,
  description,
  technologies,
  type,
  githubLink,
}) => {
  return (
    <div className="w-full h-full dark:bg-zinc-900 border-1 border-gray-500/15 rounded-md hover:shadow-md transition">
      <div>
        <img
          src={image}
          alt={title}
          className="w-full rounded-t-sm h-48 object-cover"
        />
      </div>
      <div className="p-2">
        <div className="flex flex-col gap-1">
          <h2 className="font-geist font-bold text-bas mb-1">{title}</h2>
          <p className="text-xs font-semibold mb-2 text-black dark:text-white">
            {year}
          </p>
        </div>
        <p className="text-xs text-zinc-500 font-inter leading-5 dark:text-zinc-300 mb-3">
          {description}
        </p>
        <div className="flex flex-wrap font-inter gap-2 text-[10px] mb-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="bg-gray-200 text-black dark:bg-[#434343] dark:text-white px-2 py-1 rounded-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* ✅ Type and GitHub badge row */}
        <div className="flex items-center gap-2 font-inter">
          {/* Type badge with icon */}
          <span className="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-1 rounded-sm bg-black dark:bg-white dark:text-black text-white">
            {type === "Website" ? (
              <>
                <FaGlobe className="text-[10.5px]" />
                Website
              </>
            ) : (
              <>
                <FaMobileAlt className="text-[10.5px]" />
                Mobile
              </>
            )}
          </span>

          {/* GitHub button with icon */}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[10.5px] font-medium px-3 py-1 rounded-sm bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-300 transition"
            >
              <FaGithub className="text-[0.8rem]" />
              Github
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
