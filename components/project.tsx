"use client";
import { useState } from "react";
import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";
import cpp from "@/public/c.jpg";
import java from "@/public/java.jpg";
import webDev from "@/public/web.jpg";

const TabContent = ({ title, imagePath }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gradientStart via-gradientMid1 to-gradientEnd">
      <p>{title}</p>
      <Image
        src={imagePath}
        alt={`${title} illustration`}
        width={1000}
        height={1000}
        onClick={openModal}
        className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto cursor-pointer"
      />

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Background Blur */}
          <div className="absolute inset-0 bg-black bg-opacity-75 backdrop-blur-sm"></div>

          {/* Modal Content */}
          <div className="relative max-w-3xl w-full p-4 bg-white rounded-lg shadow-lg z-10">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
            >
              ✕
            </button>
            <Image
              src={imagePath}
              alt={`${title} illustration`}
              width={1000}
              height={1000}
              className="object-contain w-full max-h-[90vh] mx-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export function TabsDemo() {
  const tabs = [
    {
      title: "C Programming",
      value: "c-programming",
      content: <TabContent title="C Programming" imagePath={cpp} />,
    },
    {
      title: "Core Java",
      value: "core-java",
      content: <TabContent title="Core Java" imagePath={java} />,
    },
    {
      title: "Web Development",
      value: "web-development",
      content: <TabContent title="Web Development" imagePath={webDev} />,
    },
  ];

  return (
    <div className="min-h-screen w-full px-4 py-8 sm:px-6 md:px-8 lg:px-10">
      <div className="max-w-[90rem] mx-auto">
        <div className="h-[400px] sm:h-[500px] md:h-[500px] lg:h-[700px] [perspective:1000px] relative flex flex-col w-full items-start justify-start my-10 sm:my-20">
          <Tabs
            tabs={tabs}
            containerClassName="mb-4 sm:mb-6 md:mb-8"
            tabClassName="text-sm sm:text-base md:text-lg"
          />
        </div>
      </div>
    </div>
  );
}
