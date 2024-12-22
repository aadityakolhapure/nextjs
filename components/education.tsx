import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2025",
      content: (
        <div className="bg-[#FEF3E2] p-4 md:p-10 rounded-lg shadow-lg">
          <h1 className="text-[#FA4032] text-lg md:text-2xl font-bold mb-4">
            Bachelor Of Technology
          </h1>
          <h2 className="text-[#FA812F] text-sm md:text-lg font-semibold mb-3">
            Computer Science and Engineering
          </h2>
          <p className="text-neutral-700 dark:text-neutral-400 text-sm md:text-base font-medium mb-2">
            Dnyanshree Institute of Engineering and Technology, Satara
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base font-medium mb-2">
            CGPA: <span className="text-[#FAB12F] font-semibold">7.5</span>
          </p>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div className="bg-[#FEF3E2] p-4 md:p-10 rounded-lg shadow-lg">
          <h1 className="text-[#FA4032] text-lg md:text-2xl font-bold mb-4">
            Junior College(HSC)
          </h1>
          <h2 className="text-[#FA812F] text-sm md:text-lg font-semibold mb-3">
            Science
          </h2>
          <p className="text-neutral-700 dark:text-neutral-400 text-sm md:text-base font-medium mb-2">
            Yashwantrao Chavan Institute of Science, Satara
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base font-medium mb-2">
            Percentage: <span className="text-[#FAB12F] font-semibold">86.83%</span>
          </p>
        </div>
      ),
    },
    {
      title: "2019",
      content: (
        <div className="bg-[#FEF3E2] p-4 md:p-10 rounded-lg shadow-lg">
          <h1 className="text-[#FA4032] text-lg md:text-2xl font-bold mb-4">
            Schooling(SSC)
          </h1>
          <p className="text-neutral-700 dark:text-neutral-400 text-sm md:text-base font-medium mb-2">
            Gurukul School, Satara
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base font-medium mb-2">
            Percentage: <span className="text-[#FAB12F] font-semibold">84.00%</span>
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full md:h-full h-screen">
      <Timeline data={data} />
    </div>
  );
}
