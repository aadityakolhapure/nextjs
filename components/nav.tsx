"use client";
import React, { useState } from "react";
import ShimmerButton from "@/components/ui/shimmer-button";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  const handleMouseEnter = (item: string) => {
    setActive(item);
  };

  const handleMouseLeave = () => {
    setActive(null);
  };

  return (
    <div
      className={cn(
        "fixed top-0 inset-x-0 max-w-5xl mx-auto z-50 bg-[#FEF3E2]/90 backdrop-blur-xl border border-gray-200 shadow-lg rounded-3xl px-6 py-2",
        className
      )}
    >
      <nav className="flex items-center justify-between">
        {/* Logo */}
        {/* <a
          href="#"
          className="text-2xl font-bold text-gray-800 hover:text-[#FAB12F] mr-14"
        >
          Portfolio
        </a> */}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className="text-3xl text-gray-800">&#9776;</span>
        </button>

        {/* Links */}
        <ul
          className={cn(
            "flex flex-col md:flex-row md:space-x-8 text-lg font-medium",
            isMenuOpen
              ? "flex mt-4 md:mt-0 space-y-4 md:space-y-0"
              : "hidden md:flex",
            "absolute top-full left-0 w-full md:static bg-[#FEF3E2] md:bg-transparent px-6 py-4 md:p-0 rounded-lg md:rounded-none shadow-md md:shadow-none"
          )}
        >
          <li>
            <a
              href="#home"
              onMouseEnter={() => handleMouseEnter("home")}
              onMouseLeave={handleMouseLeave}
              className={cn(
                "hover:text-[#FA812F] transition-colors",
                active === "home" && "text-[#FAB12F]"
              )}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onMouseEnter={() => handleMouseEnter("about")}
              onMouseLeave={handleMouseLeave}
              className={cn(
                "hover:text-[#FA812F] transition-colors",
                active === "about" && "text-[#FAB12F]"
              )}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onMouseEnter={() => handleMouseEnter("projects")}
              onMouseLeave={handleMouseLeave}
              className={cn(
                "hover:text-[#FA812F] transition-colors",
                active === "projects" && "text-[#FAB12F]"
              )}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onMouseEnter={() => handleMouseEnter("contact")}
              onMouseLeave={handleMouseLeave}
              className={cn(
                "hover:text-[#FA812F] transition-colors",
                active === "contact" && "text-[#FAB12F]"
              )}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Call-to-Action Button */}
        {/* <a
          href="#resume"
          className="hidden md:block px-6 py-2 bg-[#FAB12F]/90 text-white rounded-lg shadow-md hover:bg-[#FA4032]/90 transition"
        >
          Download Resume
        </a> */}
        <div className=" flex items-center justify-center">
          <ShimmerButton className="shadow-2xl">
            <svg
              className="w-6 h-6 text-text-white dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                
                d="M10 3v4a1 1 0 0 1-1 1H5m4 8h6m-6-4h6m4-8v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z"
              />
            </svg>

            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg ml-2">
              Resume
            </span>
          </ShimmerButton>
        </div>
      </nav>
    </div>
  );
}
