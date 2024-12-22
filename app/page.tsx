import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { DockDemo } from "@/components/navbar";
import { NavbarDemo } from "@/components/nav";
import { Profile } from "@/components/profile";
import { TimelineDemo } from "@/components/education";
import DotPattern from "@/components/ui/dot-pattern";
import GitHubContributionGraph from "@/components/GitHubContributionGraph";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <NavbarDemo />
      <div className="relative flex md:h-screen h-full w-full items-center justify-center overflow-hidden p-6 md:shadow-xl">
        <div className=" tracking-tighter text-black dark:text-white">
          {/* <DockDemo /> */}
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

      <TimelineDemo />
      <div>
        {/* <GitHubContributionGraph
          username="aadityakolhapure"
          token={process.env.NEXT_PUBLIC_GITHUB_TOKEN as string}
        /> */}
      </div>
    </div>
  );
}
