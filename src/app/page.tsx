"use client";

import { useState } from 'react';
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import About from './pages/About';
import Experience from './pages/Experience';
import './globals.css'; // Ensure this path is correct

export default function Home() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderContent = () => {
    switch (currentPage) {
      case 'Home':
        return <About />;
      case 'Experience':
        return <Experience />;
      case 'Services':
        return <p>We offer a variety of services to meet your needs.</p>;
      case 'Contact':
        return <p>Contact us for more information. We're happy to help!</p>;
      default:
        return <p>Welcome to the home page! Here's some random content.</p>;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <header className="py-6">
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <Image
              src="/Logo.jpeg"
              alt="Logo"
              width={1826 / 4}
              height={602 / 4}
              className="mx-auto"
            />
          </div>
          <nav className="flex gap-8" style={{fontFamily: 'Sabon'}}>
            <a
              onClick={() => setCurrentPage('Home')}
              className="text-lg cursor-pointer hover:text-blue-500"
            >
              Home
            </a>
            <a
              onClick={() => setCurrentPage('Experience')}
              className="text-lg cursor-pointer hover:text-blue-500"
            >
              Experience
            </a>
            <a
              onClick={() => setCurrentPage('Services')}
              className="text-lg cursor-pointer hover:text-blue-500"
            >
              Services
            </a>
            <a
              onClick={() => setCurrentPage('Contact')}
              className="text-lg cursor-pointer hover:text-blue-500"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1 p-8">{renderContent()}</main>

      <footer className="flex justify-center gap-6 py-4 bg-yellow-100">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="text-2xl text-gray-800 hover:text-blue-700"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="text-2xl text-gray-800 hover:text-black"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:youremail@example.com"
          className="text-2xl text-gray-800 hover:text-red-600"
        >
          <FaEnvelope />
        </a>
      </footer>
    </div>
  );
}
