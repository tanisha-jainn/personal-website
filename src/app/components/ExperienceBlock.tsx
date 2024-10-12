import React from 'react';

interface ExperienceBlockProps {
    title: string;
    content: string;
}

const ExperienceBlock: React.FC<ExperienceBlockProps> = ({ title, content }) => {
    return (
        <div
            className="p-8 rounded-lg shadow-lg mx-auto mt-10 text-gray-800"
            style={{ backgroundColor: '#F7F2F9', maxWidth: '80%', minHeight: '200px' }}
        >
            <h2 className="text-2xl mb-4">{title}</h2>
            <p className="text-lg">{content}</p>
        </div>
    );
};

export default ExperienceBlock;
