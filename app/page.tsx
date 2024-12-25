"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { NavbarDemo } from "@/components/nav";
import { Profile } from "@/components/profile";
import { TimelineDemo } from "@/components/education";
import ContributionGraph from "@/components/GitHubContributionGraph";

import AnimatedCircularProgressBar from "@/components/ui/animated-circular-progress-bar";

import Contact from "@/pages/contact";

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
    }, 10000); // Simulate loading for 5 seconds

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
            gaugePrimaryColor="#FA812F" // Darker shade of red
            gaugeSecondaryColor="rgba(0, 0, 0, 0.3)"
          />
        </div>
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
                "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
              )}
            />
          </div>

          {/* Contribution Graph Section */}
          <div className="relative flex w-full items-center justify-center bg-[#fefbf7] md:shadow-xl p-6">
            <div className="w-full max-w-[90vw] overflow-x-auto justify-center flex">
              <ContributionGraph
                username="aadityakolhapure"
                githubToken={process.env.NEXT_PUBLIC_GITHUB_TOKEN || ""}
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
                "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
              )}
            />
          </div>

          <section id="contact" className="py-16">
            <Contact />
          </section>
        </div>
      )}
    </div>
  );
}
