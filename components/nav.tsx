"use client";
import React, { useState, useEffect } from "react";
import ShimmerButton from "@/components/ui/shimmer-button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { BorderBeam } from "@/components/ui/border-beam";

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

  // Set active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop;
          const sectionBottom = sectionTop + sectionElement.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (item: string) => {
    setActive(item);
  };

  const handleMouseLeave = () => {
    setActive(null);
  };

  return (
    <div
      className={cn(
        "fixed top-0 inset-x-0 max-w-5xl mx-auto z-50 bg-[#FEF3E2]/40  backdrop-blur-xl border border-gray-200 shadow-lg px-6 py-2",
        className
      )}
    >
      <nav className="flex items-center justify-between">
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
                "hover:text-[#FA812F] transition-colors dark:text-gray-900",
                active === "home" && "text-[#FB9D5C]"
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
                "hover:text-[#FA812F] transition-colors dark:text-gray-900",
                active === "about" && "text-[#FB9D5C]"
              )}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#work"
              onMouseEnter={() => handleMouseEnter("work")}
              onMouseLeave={handleMouseLeave}
              className={cn(
                "hover:text-[#FA812F] transition-colors dark:text-gray-900",
                active === "work" && "text-[#FB9D5C]"
              )}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onMouseEnter={() => handleMouseEnter("skills")}
              onMouseLeave={handleMouseLeave}
              className={cn(
                "hover:text-[#FA812F] transition-colors dark:text-gray-900",
                active === "skills" && "text-[#FB9D5C]"
              )}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onMouseEnter={() => handleMouseEnter("projects")}
              onMouseLeave={handleMouseLeave}
              className={cn(
                "hover:text-[#FA812F] transition-colors dark:text-gray-900",
                active === "projects" && "text-[#FB9D5C]"
              )}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#achievement"
              onMouseEnter={() => handleMouseEnter("achievement")}
              onMouseLeave={handleMouseLeave}
              className={cn(
                "hover:text-[#FA812F] transition-colors dark:text-gray-900",
                active === "achievement" && "text-[#FB9D5C]"
              )}
            >
              Achievement
            </a>
          </li>
          <li>
            <Link
              href="#contact"  // Corrected href to #contact
              onMouseEnter={() => handleMouseEnter("contact")}
              onMouseLeave={handleMouseLeave}
              className={cn(
                "hover:text-[#FA812F] transition-colors dark:text-gray-900",
                active === "contact" && "text-[#FB9D5C]"
              )}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Call-to-Action Button */}
        <div className="flex items-center justify-center">
          <ShimmerButton className="shadow-2xl">
            <svg
              className="w-6 h-6 text-text-white dark:text-white "
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
        <BorderBeam size={250} duration={12} delay={9} />
      </nav>
    </div>
  );
}
