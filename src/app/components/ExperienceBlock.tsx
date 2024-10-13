import React, { ReactNode } from 'react';
import { FaGithub } from 'react-icons/fa';

interface ExperienceBlockProps {
    title: string;
    content: ReactNode;
    githubUrl?: string; // Optional GitHub URL prop
}

const ExperienceBlock: React.FC<ExperienceBlockProps> = ({ title, content, githubUrl }) => {
    return (
        <div
            className="relative p-8 rounded-lg shadow-lg mx-auto mt-10 text-gray-800"
            style={{ backgroundColor: '#F7F2F9', minHeight: '200px' }}
        >
            {githubUrl && (
                <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 py-2 px-4 bg-[#FCE7F2] text-white rounded-lg transition-all duration-200 ease-out hover:bg-[#D98A9B] hover:shadow-inner flex items-center"
                    style={{
                        color: '#000000', // Ensures white text on button
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Regular shadow
                    }}
                >
                    View on GitHub <FaGithub className="ml-3 text-xl" /> {/* Increase the size of the icon */}
                </a>
            )}
            <h2 className="text-2xl mb-4">{title}</h2>
            <p className="text-lg">{content}</p>
        </div>
    );
};

export default ExperienceBlock;
