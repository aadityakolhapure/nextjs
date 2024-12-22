"use client";

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  link?: string;
  className?: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  githubLink?: string;
  liveLink?: string;
  className?: string;
}

interface SkillCardProps {
  category: string;
  skills: string[];
  className?: string;
}

// Basic Card Component
const Card: React.FC<CardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  link, 
  className = "" 
}) => {
  return (
    <div 
      className={`
        bg-[#FEF3E2] 
        rounded-lg 
        p-6 
        transition-all 
        duration-300 
        hover:shadow-lg 
        border-2 
        border-[#FAB12F] 
        ${className}
      `}
    >
      {Icon && (
        <div className="mb-4">
          <Icon className="w-8 h-8 text-[#FA812F]" />
        </div>
      )}
      <h3 className="text-xl font-bold mb-2 text-[#FA4032]">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      {link && (
        <a 
          href={link} 
          className="
            inline-flex 
            items-center 
            text-[#FA812F] 
            hover:text-[#FA4032] 
            transition-colors
          "
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More →
        </a>
      )}
    </div>
  );
};

// Project Card Component
const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies = [],
  imageUrl,
  githubLink,
  liveLink,
  className = ""
}) => {
  return (
    <div 
      className={`
        bg-[#FEF3E2] 
        rounded-lg 
        overflow-hidden 
        transition-all 
        duration-300 
        hover:shadow-lg 
        border-2 
        border-[#FAB12F] 
        ${className}
      `}
    >
      {imageUrl && (
        <div className="h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-[#FA4032]">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="
                px-3 
                py-1 
                bg-[#FAB12F] 
                text-white 
                rounded-full 
                text-sm
              "
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {githubLink && (
            <a 
              href={githubLink}
              className="
                inline-flex 
                items-center 
                text-[#FA812F] 
                hover:text-[#FA4032] 
                transition-colors
              "
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub →
            </a>
          )}
          {liveLink && (
            <a 
              href={liveLink}
              className="
                inline-flex 
                items-center 
                text-[#FA812F] 
                hover:text-[#FA4032] 
                transition-colors
              "
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// Skills Card Component
const SkillCard: React.FC<SkillCardProps> = ({
  category,
  skills = [],
  className = ""
}) => {
  return (
    <div 
      className={`
        bg-[#FEF3E2] 
        rounded-lg 
        p-6 
        transition-all 
        duration-300 
        hover:shadow-lg 
        border-2 
        border-[#FAB12F] 
        ${className}
      `}
    >
      <h3 className="text-xl font-bold mb-4 text-[#FA4032]">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index}
            className="
              px-4 
              py-2 
              bg-[#FAB12F] 
              text-white 
              rounded-lg 
              text-sm
              hover:bg-[#FA812F] 
              transition-colors
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export { Card, ProjectCard, SkillCard };