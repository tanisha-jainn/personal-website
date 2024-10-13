import React from 'react';
import ExperienceBlock from '../components/ExperienceBlock';

// List of title-content pairs
const experiences = [
    {
        title: "MIT Schwartzman AirBnb Data Set",
        githubUrl: "https://github.com/tanisha-jainn/airbnb-ml-portfolio",
        content: <div>
            <li>During my time at MIT I got to work with a variety of data sets, ranging from AirBnb listings to Flight Delays and Spam Mails, my goal was to learn about how to go through an ML cycle.</li> 
            <li> I started with data preparation and with the different sets I implemented new ways to create learning models, using both supervised and unsupervised learning tactics. </li>
        <li>For the AirBnb set, I made a learning model to select which features in a listing were most appealing to customers, and the value that each feature had on the listing&apos;s overall marketability.</li>
        </div>
    },
    {
        title: "Toolhouse Client Webpage Redesigns",
        githubUrl: "https://github.com/tanisha-jainn/Toolhouse_FP/tree/main",
        content: <div>
            <li> I modeled different personalization tactics, and evaluated their impact on user conversions, specifcally HCP engagement rates.</li>
            <li> Built a Random Forest Classifier to predict conversion rates from personalization strategies, achieving 99% accuracy and identifying the most impactful features for users.</li>
            <li> Simulated data and visualized insights with Seaborn to provide recommendations for optimizing client websites.</li>
            </div>
    },
    {
        title: "On Campus",
        content: <div>
            <li>I serve on the Dean of Students&apos; Ethical AI Board, promoting the responsible use of AI to ensure tools like large language models (LLMs) enhance student success.</li>
            <li>As the Associate Justice of UMass Boston&apos;s Undergraduate Student Government, I collaborate with my team to provide equitable funding, engage with faculty to meet student
            needs.</li>
            <li>Along with my university-wide responsibilities, I also manage internal operations by organizing votes and fostering an inclusive, supportive environment for all USG members.</li>
        </div> 
    }
];

const Experience: React.FC = () => {
    return (
        <div style={{ fontFamily: 'Sabon', marginLeft: "20%", marginRight: "20%", paddingBottom: 50}}>
            <p style={{ fontSize: '16px', fontFamily: 'Sabon', paddingTop: 25 }}>Below is a collection of my professional experiences and academic projects, showcasing my journey through various data-driven challenges and design tasks.</p>
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
