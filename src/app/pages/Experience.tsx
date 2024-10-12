import React from 'react';
import ExperienceBlock from '../components/ExperienceBlock';

// List of title-content pairs
const experiences = [
    {
        title: "MIT Schwartzman AirBnb Data Set",
        content: "During my time at MIT I got to work with a variety of data sets, ranging from AirBnb to Flight Delays and Spam Mails, my goal was to learn about how to go through an ML cycle. I started with data preparation and with the different sets I implemented new ways you create learning models, using both supervised and unsupervised learning tactics. For the AirBnb set, I made a learning model to select which features in a listing were most appealing to customers, and the value that each feature had on the listing's overall marketability.",
        githubUrl: "https://github.com/tanisha-jainn/airbnb-ml-portfolio"
    },
    {
        title: "Toolhouse Homepage Designs",
        content: "I used Google Colab to help me identify which website personalization features were most important to HCPs viewing the site. By looking at the percentages of clicks on the site, conversions, based on different personalization tactics."
    },
    {
        title: "On Campus",
        content: "I joined the Dean of Students Appeal Board as a student advisor to champion the importance of Ethical AI Usage in the classroom. In Student Government, we ..."
    }
];

const Experience: React.FC = () => {
    return (
        <div style={{ fontFamily: 'Sabon', marginLeft: "20%", marginRight: "20%", }}>
            <p style={{ fontSize: '16px', fontFamily: 'Sabon', paddingBottom: 25 }}>Below is a collection of my professional experiences and academic projects, showcasing my journey through various data-driven challenges and design tasks.</p>
            {experiences.map((experience, index) => (
                <ExperienceBlock 
                    key={index}
                    title={experience.title} 
                    content={experience.content} 
                    githubUrl={experience.githubUrl}
                />
            ))}
        </div>
    );
};

export default Experience;
