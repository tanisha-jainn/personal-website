import React from 'react';

const About: React.FC = () => {
    return (
        <div style={{ marginLeft: '20%', marginRight: '20%' }}>
            <h1 style={{ fontSize: '30px', fontWeight: 'bold', fontFamily: 'Sabon', color: '#333', paddingBottom: 25 }}>
                Hi There! 🍵
            </h1>
            <p style={{ fontSize: '16px', fontFamily: 'Sabon', paddingBottom: 25 }}>
            I&apos;m Tanisha, a Computer Science and Linguistics student at the University of Illinois Urbana-Champaign. I’m passionate about merging language and computer science to preserve linguistic diversity through technology. I enjoy creating user-centered designs that are both functional and visually engaging.
            </p>
            <p style={{ fontSize: '16px', fontFamily: 'Sabon' }}>
            Last semester, I worked with a team at <a href="https://www.microsoft.com/en-us/research/lab/microsoft-research-new-england/" style={{ color: '#C8A2C8', fontWeight: 'bold' }}>Microsoft&apos;s Cambridge office</a> to help with AI Prompt Efficiency. Our goal was to measure the quality and relevance of prompts in producing desired outcomes. This past summer, I interned at <a href="https://toolhouse.com/" style={{ color: '#C8A2C8', fontWeight: 'bold' }}>Toolhouse</a>, a life sciences digital agency, where I automated their sales analysis tactics using Pandas and NumPy. Along with that, I was admitted to join a team at MITs Schwarzman College of Computing as a <a href="https://www.breakthroughtech.org/programs/the-ai-program/" style={{ color: '#C8A2C8', fontWeight: 'bold' }}>BreakThroughTech</a> AI Fellow. 
            </p>
            <p style={{ fontSize: '16px', fontFamily: 'Sabon', paddingTop: 25 }}>
            I hope you enjoy exploring this page to learn more about my diverse interests and project experience! Feel free to reach me at tj32@illinois.edu ⋆˙⟡♡
            </p>
        </div>
    );
};



export default About;
