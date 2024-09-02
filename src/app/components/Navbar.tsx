"use client"; // Ensure this component runs on the client side

import React, { useState, useEffect } from "react";
import AboutMe from "./AboutMe"; // Import the new AboutMe component

export default function ResponsiveNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAboutMeOpen, setIsAboutMeOpen] = useState(false); // State for the About Me popup

  const handleButtonClick = (section: string) => {
    switch (section) {
      case "Projects":
        scrollToSection("projects");
        break;
      case "Skills":
        scrollToSection("skills");
        break;
      case "Contact Us":
        scrollToSection("contact");
        break;
      case "About Me":
        setIsAboutMeOpen(true); // Show the About Me popup
        break;
      default:
        break;
    }
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll event listener to hide/show navbar based on scroll direction
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`${
          isVisible ? "top-0" : "-top-16"
        } bg-transparent text-white px-4 py-2 fixed w-full z-50 transition-all duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold">Prince Rajbhar</div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none"
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </button>
          </div>
          <div className="hidden md:flex space-x-4">
            <button
              onClick={() => handleButtonClick("Projects")}
              className="hover:text-yellow-300"
            >
              Projects
            </button>
            <button
              onClick={() => handleButtonClick("Skills")}
              className="hover:text-yellow-300"
            >
              Skills
            </button>
            <button
              onClick={() => handleButtonClick("Contact Us")}
              className="hover:text-yellow-300"
            >
              Contact Us!
            </button>
            <button
              onClick={() => handleButtonClick("About Me")}
              className="hover:text-yellow-300"
            >
              About Me
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2">
            <button
              onClick={() => handleButtonClick("Projects")}
              className="block w-full text-left py-2 px-4 hover:bg-gray-700"
            >
              Projects
            </button>
            <button
              onClick={() => handleButtonClick("Skills")}
              className="block w-full text-left py-2 px-4 hover:bg-gray-700"
            >
              Skills
            </button>
            <button
              onClick={() => handleButtonClick("Contact Us")}
              className="block w-full text-left py-2 px-4 hover:bg-gray-700"
            >
              Contact Us!
            </button>
            <button
              onClick={() => handleButtonClick("About Me")}
              className="block w-full text-left py-2 px-4 hover:bg-gray-700"
            >
              About Me
            </button>
          </div>
        )}
      </nav>

      {/* About Me Popup */}
      <AboutMe isOpen={isAboutMeOpen} onClose={() => setIsAboutMeOpen(false)} />
    </>
  );
}
