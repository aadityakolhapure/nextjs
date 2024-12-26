"use client";

import React, { useState } from "react";
import { skills } from "@/data/skills";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { BorderBeam } from "@/components/ui/border-beam";
// import React from "react";

const SkillsTabsWithBalancedWarmColors: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(skills[0].category);

  return (
    <div className="p-8 rounded-lg shadow-md bg-[#FEF3E2] dark:bg-[#1A1A1A]">
      {/* Tabs */}
      <div className="flex overflow-x-auto space-x-4 pb-4">
        {skills.map((category) => (
          <button
            key={category.category}
            onClick={() => setActiveCategory(category.category)}
            className={cn(
              "px-4 py-2 text-sm font-semibold rounded-lg transition-all",
              activeCategory === category.category
                ? "bg-gradient-to-r from-[#FAB12F] to-[#FA812F] text-white shadow-md"
                : "bg-opacity-20 bg-white text-[#FA812F] dark:text-[#FAB12F]",
              "hover:shadow-lg hover:scale-105"
            )}
          >
            {category.category}
          </button>
        ))}
      </div>
      {/* <BorderBeam size={250} duration={12} delay={9} /> */}

      {/* Skills Grid */}
      <AnimatePresence>
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-6"
        >
          {skills
            .find((category) => category.category === activeCategory)
            ?.items.map((skill) => (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center p-4 rounded-lg shadow-lg transition-transform transform hover:scale-110 bg-white dark:bg-gray-900"
                whileHover={{ rotate: 3 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="w-16 h-16 mb-3 drop-shadow-md"
                />
                <span className="text-sm font-medium text-[#FA4032] dark:text-gray-100">
                  {skill.name}
                </span>
              </motion.div>
           
            ))}
             
        </motion.div>
       
      </AnimatePresence>
     
    </div>
  );
};

export default SkillsTabsWithBalancedWarmColors;
