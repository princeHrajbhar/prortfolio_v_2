import React from "react";
import myimage from "../../../public/my.jpeg";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"; // Import icons

interface AboutMeProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutMe: React.FC<AboutMeProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Do not render the component if it's not open

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="relative bg-transparent text-white p-8 rounded-lg shadow-lg max-w-md w-full mx-4">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white hover:text-gray-400"
        >
          &times;
        </button>
        <div className="text-center">
          <img
            src={myimage.src}
            alt="Your Name"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-white text-2xl font-bold mb-2">Prince Rajbhar</h2>
          <p className="text-gray-400 mb-4">Experienced software engineer specializing in Android development with Kotlin and web technologies like Next.js and TypeScript. Passionate about creating intuitive and high-performance applications.</p>
          <p className="text-gray-300">
            <strong>Qualification:</strong> B.Tech in CSE with Data science & AI
          </p>
          <div className="flex justify-center mt-4 space-x-4">
            <a href="https://www.instagram.com/r_prince_h?utm_source=qr&igsh=eHg4MHpwNDh4ZXdi" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white hover:text-gray-400" size={24} />
            </a>
            <a href="https://www.linkedin.com/in/prince-rajbhar-062996267/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white hover:text-gray-400" size={24} />
            </a>
            <a href="https://x.com/_rbprince_" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-white hover:text-gray-400" size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
