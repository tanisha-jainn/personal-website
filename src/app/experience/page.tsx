import React from 'react';
import ExperienceBlock from '../components/ExperienceBlock';

// List of title-content pairs
const experiences = [
    {
        title: "Microsoft Prompt Tuning",
        content: <div>
            <li>At Microsoft, I worked with a team to craft smarter, optimized prompts for LLMs, comparing them with human inputs to boost effectiveness and tackle challenges like gibberish outputs and repetition.</li> 
            <li>By using BLEU scores to measure quality, we improved AI responses while uncovering room to better evaluate creativity and coherence. It was all about pushing the boundaries of what these models can do!</li>
        </div>
    },

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
        title: "My Time at UMass",
        content: <div>
            <li>I served on the Dean of Students&apos; Ethical AI Board, promoting the responsible use of AI to ensure tools like large language models (LLMs) enhance student success.</li>
            <li>As the Associate Justice of UMass Boston&apos;s Undergraduate Student Government, I collaborated with my team to provide equitable funding, and engaged with faculty to meet student
            needs.</li>
            <li>Along with my university-wide responsibilities, I also managed internal operations by organizing votes and fostering an inclusive, supportive environment for all USG members.</li>
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
