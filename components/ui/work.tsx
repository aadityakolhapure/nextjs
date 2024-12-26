"use client";

import React from "react";

type WorkExperienceProps = {
  internshipName: string;
  by: string,
  duration: string;
  workDone: string[];
  certificateLink?: string; // Optional
};

const WorkExperience: React.FC<WorkExperienceProps> = ({
  internshipName,
  by,
  duration,
  workDone,
  certificateLink,
}) => {
  return (
    <div className="p-6 border rounded-xl shadow-md bg-white dark:bg-gray-800">
      <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
        {internshipName}
      </h3 >
      <h6 className="text-lg font-semibold text-gray-800 dark:text-white">
        {by}
      </h6>
      <p className="text-gray-600 dark:text-gray-400">{duration}</p>
      <ul className="list-disc pl-6 mt-4 text-gray-700 dark:text-gray-300">
        {workDone.map((task, idx) => (
          <li key={idx}>{task}</li>
        ))}
      </ul>
      {certificateLink && (
        <a
          href={certificateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-orange-600 dark:text-orange-400 hover:underline"
        >
          View Certificate
        </a>
      )}
    </div>
  );
};

export default WorkExperience;
