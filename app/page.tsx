"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { NavbarDemo } from "@/components/nav";
import { Profile } from "@/components/profile";
import { TimelineDemo } from "@/components/education";
import ContributionGraph from "@/components/GitHubContributionGraph";
import ExperienceSection from "@/components/WorkExperience";
import RetroGrid from "@/components/ui/retro-grid";
import { DotPattern } from "@/components/ui/dot-pattern";
import ProjectCard from "@/components/projectsmain"

import AnimatedCircularProgressBar from "@/components/ui/animated-circular-progress-bar";

import Contact from "@/pages/contact";
// import Loader3D from "@/components/loader";
import { TabsDemo } from "@/components/project";
import Skills from "@/components/skills";
import AchievementCard from "@/pages/achievements"

// import Footer from '@/components/footer';
import ThemeToggle from '@/components/ui/ThemeToggle';

export default function Home() {
  const [value, setValue] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleIncrement = (prev: number) => {
      if (prev === 100) {
        return 0;
      }
      return prev + 10;
    };
    const interval = setInterval(() => {
      setValue(handleIncrement);
    }, 1000); // Increment value every second

    setTimeout(() => {
      clearInterval(interval);
      setIsLoading(false);
    }, 10000); // Simulate loading for 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      {isLoading ? (
        // Loading Screen
        <div className="flex items-center justify-center min-h-screen bg-[#FEF3E2]">
          <AnimatedCircularProgressBar
            max={100}
            min={0}
            value={value}
            gaugePrimaryColor="rgb(79 70 229)"
            gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
          />        </div>
      ) : (
        // Main Content
        <div className="items-center justify-items-center">
          {/* Navbar */}
          <NavbarDemo />

          {/* Profile Section */}
          <div
            id="home"
            className="relative flex md:h-screen h-full w-full items-center justify-center overflow-hidden p-6 md:shadow-xl"
          >
            <div className="tracking-tighter text-black dark:text-white">
              <Profile />
            </div>
            <AnimatedGridPattern
              numSquares={30}
              maxOpacity={0.1}
              duration={3}
              repeatDelay={1}
              className={cn(
                "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
                "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
              )}
            />
          </div>

          {/* Contribution Graph Section */}
          <div className="relative flex w-full items-center justify-center dark:bg-[#2d2d2d] md:shadow-xl p-6 bg-[#fefbf7]">
            <div className="w-full max-w-[90vw] overflow-x-auto justify-center flex">
              <ContributionGraph
                username="aadityakolhapure"
                githubToken={process.env.NEXT_PUBLIC_GITHUB_TOKEN || ""}
              />
              <DotPattern
                width={20}
                height={20}
                cx={1}
                cy={1}
                cr={1}
                className={cn(
                  "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
                )}
              />
            </div>
          </div>


          {/* Timeline Section */}
          <div
            id="about"
            className="relative flex md:h-full h-full w-full items-center justify-center overflow-hidden p-6 md:shadow-xl"
          >
            <div className="tracking-tighter text-black dark:text-white">
              <TimelineDemo />
            </div>
            <AnimatedGridPattern
              numSquares={30}
              maxOpacity={0.1}
              duration={3}
              repeatDelay={1}
              className={cn(
                "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
                "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
              )}
            />
          </div>

          {/* Experience Section */}
          <div id="work" className="relative flex md:h-full h-full w-full items-center justify-center overflow-hidden md:shadow-xl bg-[#fefbf7] pb-10 shadow-lx">
            <div className="w-full max-w-[90vw] overflow-x-auto justify-center flex">
              <ExperienceSection />
              <DotPattern
                width={20}
                height={20}
                cx={1}
                cy={1}
                cr={1}
                className={cn(
                  "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
                )}
              />
            </div>
          </div>

          {/* Skills Section */}
          <div id="skills" className="relative flex flex-col md:h-full h-full w-full items-center justify-center overflow-hidden md:shadow-xl bg-[#fefbf7] pb-10 shadow-md shadow-black/30">
            <div className="max-w-7xl mx-auto py-20 px-4 md:px-4 lg:px-10">
              <h2 className="text-3xl md:text-4xl text-black dark:text-white max-w-4xl front-bold">
                My Skills
              </h2>
            </div>
            <Skills />
            <AnimatedGridPattern
              numSquares={30}
              maxOpacity={0.1}
              duration={3}
              repeatDelay={1}
              className={cn(
                "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
                "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
              )}
            />
          </div>

          {/* Certificate Tabs Section */}
          <div id="certificate" className="relative flex flex-col md:h-full h-full w-full items-center justify-center overflow-hidden md:shadow-xl bg-[#fefbf7] pb-10 shadow-mt shadow-black/30">
            <div className="max-w-7xl mx-auto py-14 px-4 md:px-4 lg:px-10">
              <h2 className="text-3xl md:text-4xl text-black dark:text-white max-w-4xl front-bold">
                Certificate
              </h2>
            </div>


            <TabsDemo />

            <AnimatedGridPattern
              numSquares={30}
              maxOpacity={0.1}
              duration={3}
              repeatDelay={1}
              className={cn(
                "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
              )}
            />
          </div>

          <div id="project" className="relative flex flex-col md:h-full h-full w-full items-center justify-center overflow-hidden md:shadow-xl bg-[#fefbf7] pb-10 shadow-mt shadow-black/30">
            <div className="max-w-7xl mx-auto py-14 px-4 md:px-4 lg:px-10">
              <h2 className="text-3xl md:text-4xl text-black dark:text-white max-w-4xl front-bold">
                Projects
              </h2>
            </div>
            <ProjectCard/>
          </div>

          <div id="project" className="relative flex flex-col md:h-full h-full w-full items-center justify-center overflow-hidden md:shadow-xl bg-[#fefbf7] pb-10 shadow-mt shadow-black/30">
            <div className="max-w-7xl mx-auto py-14 px-4 md:px-4 lg:px-10">
              <h1 className="text-3xl font-bold mb-6">My Achievements</h1>
            </div>
            <AchievementCard/>
          </div>


          {/* Contact Section */}
          <section id="contact" className="py-16">
            <Contact />
          </section>

          {/* <ThemeToggle /> */}
          
        </div>

      )
      }
      <footer className="bg-gray-800 text-white py-6 mt-12">
            <div className="container mx-auto text-center">
              <p className="text-sm">
                &copy; {new Date().getFullYear()} Aaditya Kolhapure. All rights reserved.
              </p>
              <div className="mt-4 space-x-4">
                <a
                  href="https://www.linkedin.com/in/aaditya-kolhapure-534a2b241/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/aadityakolhapure"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-400"
                >
                  GitHub
                </a>
                <a
                  href="mailto:your-email@example.com"
                  className="text-white hover:text-gray-400"
                >
                  Email
                </a>
              </div>
            </div>
          </footer>

    </div >
  );
}
