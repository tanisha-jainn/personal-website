import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <div>
        <footer className="flex justify-center gap-6 py-4 bg-yellow-100">
        <a
          href="https://linkedin.com/in/jainntanisha"
          target="_blank"
          rel="noreferrer"
          className="text-2xl text-gray-800 hover:text-blue-700"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/tanisha-jainn"
          target="_blank"
          rel="noreferrer"
          className="text-2xl text-gray-800 hover:text-black"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:tanisha.jain001@umb.edu"
          className="text-2xl text-gray-800 hover:text-red-600"
        >
          <FaEnvelope />
        </a>
      </footer>
      </div>
      );
};



export default Footer;


