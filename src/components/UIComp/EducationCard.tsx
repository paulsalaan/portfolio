import React from "react";
import { HiChevronRight } from "react-icons/hi2";

interface EducationCardProps {
  image: string;
  schoolName: string;
  description: string;
  schoolYear: string;
  schoolLink?: string;
}

const EducationCard: React.FC<EducationCardProps> = ({
  image,
  schoolName,
  description,
  schoolYear,
  schoolLink,
}) => {
  return (
    <div className="flex gap-6 space-y-3">
      <div className="flex-shrink-0">
        <img
          src={image}
          alt={schoolName}
          className="object-cover size-15 rounded-full lg:size-17"
        />
      </div>

      <div className="w-full">
        <div className="flex items-center justify-between">
          <h2 className="group text-sm font-inter font-semibold flex items-center gap-1">
            {schoolLink ? (
              <a
                href={schoolLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1"
              >
                {schoolName}
                <HiChevronRight className="size-3 lg:size-3 stroke-[1px] text-black dark:text-white opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-200" />
              </a>
            ) : (
              <>
                {schoolName}
                <HiChevronRight className="size-3 lg:size-3 stroke-[1px] text-black dark:text-white opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-200" />
              </>
            )}
          </h2>
        </div>

        <p className="mt-1 text-[12px] text-gray-500 dark:text-gray-300 font-inter font-medium">
          {description}
        </p>
        <span className="text-[11px] text-gray-500 dark:text-gray-300 font-inter">
          {schoolYear}
        </span>
      </div>
    </div>
  );
};

export default EducationCard;
