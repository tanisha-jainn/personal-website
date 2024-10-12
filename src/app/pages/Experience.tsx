import React from 'react';
import ExperienceBlock from '../components/ExperienceBlock';

// List of title-content pairs
const experiences = [
    {
        title: "Lavender Box Title",
        content: "This is a much wider rounded rectangular box with a soft lavender background. You can use it to display more content beautifully across the screen."
    },
    {
        title: "Ocean Blue Box",
        content: "This box has a calming ocean blue background, ideal for displaying short and impactful messages or quotes."
    },
    {
        title: "Sunset Gradient",
        content: "A vibrant gradient inspired by sunset colors, adding warmth to the content displayed inside."
    },
    {
        title: "Minimalist Black and White",
        content: "This block embraces a minimalist theme with a sharp black border and clean white interior, suitable for professional use."
    },
    {
        title: "title",
        content: "content"
    }
];

const Experience: React.FC = () => {
    return (
        <div style={{ fontFamily: 'Sabon' }}>
            {experiences.map((experience, index) => (
                <ExperienceBlock 
                    key={index}
                    title={experience.title} 
                    content={experience.content} 
                />
            ))}
        </div>
    );
};

export default Experience;
