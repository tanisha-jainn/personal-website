import React from 'react';

const About: React.FC = () => {
    return (
        <div style={{ marginLeft: '20%', marginRight: '20%' }}>
            <h1 style={{ fontSize: '30px', fontWeight: 'bold', fontFamily: 'Sabon', color: '#333', paddingBottom: 25 }}>
                Hi There! 🍵
            </h1>
            <p style={{ fontSize: '16px', fontFamily: 'Sabon', paddingBottom: 25 }}>
            I&apos;m Tanisha, a Computer Science and Economics double major at the University of Massachusetts' Honors college in Boston.
            </p>
            <p style={{ fontSize: '16px', fontFamily: 'Sabon' }}>
            This semester, I am working with a team at <a href="https://www.microsoft.com/en-us/research/lab/microsoft-research-new-england/" style={{ color: '#C8A2C8', fontWeight: 'bold' }}>Microsoft’s Cambridge office</a> to help with AI Prompt Efficiency. Our goal is to measure the quality and relevance of prompts in producing desired outcomes. This past summer, I interned at <a href="https://toolhouse.com/" style={{ color: '#C8A2C8', fontWeight: 'bold' }}>Toolhouse</a>, a life sciences digital agency, where I automated their sales analysis tactics using Pandas and NumPy. Along with that, I was admitted to join a team at MITs Schwarzman College of Computing as a <a href="https://www.breakthroughtech.org/programs/the-ai-program/" style={{ color: '#C8A2C8', fontWeight: 'bold' }}>BreakThroughTech</a> AI Fellow. In school, I am an active member of our <a href="https://www.instagram.com/umassusg/" style={{ color: '#C8A2C8', fontWeight: 'bold' }}>Undergraduate Student Government</a>, where I serve as Associate Justice. 
            </p>
            <p style={{ fontSize: '16px', fontFamily: 'Sabon', paddingTop: 25 }}>
            I love getting to support student run organizations around campus, and working closely with faculty to find innovative ways for our community to grow. I hope you enjoy exploring this page to learn more about my diverse interests and project experience!
            </p>
        </div>
    );
};



export default About;
