import React from 'react';

interface ExperienceBlockProps {
    title: string;
    content: string;
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
                    className="absolute top-4 right-4 py-2 px-4 bg-[#F4A8C0] text-white rounded-lg font-semibold transition-all duration-200 ease-out hover:bg-[#D98A9B] hover:shadow-inner"
                    style={{
                        color: '#FFFFFF', // Ensures white text on button
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Regular shadow
                    }}
                >
                    View on GitHub
                </a>
            )}
            <h2 className="text-2xl mb-4">{title}</h2>
            <p className="text-lg">{content}</p>
        </div>
    );
};

export default ExperienceBlock;
