import React from "react";
import Link from "next/link";
import GradualSpacing from "@/components/ui/gradual-spacing";
import { DockDemo } from "@/components/navbar";
import IconCloud from "@/components/ui/icon-cloud";
import Image from "next/image";
import mockup from "../public/mockup.png";
import ContributionGraph from "@/components/GitHubContributionGraph";

export function Profile() {
  return (
    <div className="flex justify-start items-start md:mt-20 mt-20 px-6 md:text-left">
      <div className="w-full">
        <div className="flex flex-col md:flex-row items-start justify-start">
          {/* Text Section */}
          <div className="flex flex-col items-start justify-start">
            <p className="text-3xl md:text-3xl text-[#FA4032] mb-4">hi! 👋</p>
            <h1 className="text-4xl md:text-6xl font-bold text-[#FA812F] mb-4">
              Aaditya Kolhapure,
            </h1>
            <p className="text-xl text-[#FA4032] mb-6 flex space-x-4 tracking-wide">
              a full-stack developer crafting elegant solutions with MERN &
              Laravel.
            </p>

            <p className="text-gray-700 mb-8 text-3xl tracking-wide">
              Let's transform your vision into reality with sleek code and
              captivating design!
            </p>

            {/* Buttons */}
            <div className="flex items-start space-x-4">
              <DockDemo />
            </div>
          </div>

          {/* Image Section */}
          <div className="mt-12 md:mt-0 hidden md:block">
            <Image src={mockup} alt="Mockup Image" />
          </div>
        </div>
      </div>
      
    </div>
  );
}
