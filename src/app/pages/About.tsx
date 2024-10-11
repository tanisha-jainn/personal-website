import React from 'react';

const About: React.FC = () => {
    return (
        <div style={{ marginTop: '100px', marginLeft: '20%', marginRight: '20%' }}>
            <h1 style={{ fontSize: '30px', fontWeight: 'bold', fontFamily: 'Sabon', color: '#333', paddingBottom: 25 }}>
                Welcome! &lt;3
            </h1>
            <p style={{ fontSize: '20px', fontFamily: 'Sabon', paddingBottom: 25 }}>
                Hey, I'm Anjali! I'm a Scholar of Distinction at Barnard College of Columbia University studying computer science and math. This past summer, I interned at Google Labs in Mountain View where I worked on applied AI features for NotebookLM - an AI-powered learning assistant built on the Gemini API. The feature I implemented was featured in Google's The Keyword blog, and I even got a shout-out from Jeff Dean! The previous summer, I interned on Google Ads in New York City, where I worked on the Advertiser Platform's Recommendations page.
            </p>
            <p style={{ fontSize: '20px', fontFamily: 'Sabon' }}>
                In my free time, I enjoy contributing to open-source software projects which has been a fun way to collaborate with and learn from other developers! Among these, I've worked on SSLANG at Columbia University, a functional programming language that allows precise timing control, and Reanimate, a Haskell-built library for animation. I also love taking pictures (check out my photography collection here), singing with Sur (Columbia's South Asian Fusion A Capella Group), going on runs, and trying new food!
            </p>
        </div>
    );
};



export default About;
