import '../globals.css';

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <main className="flex-1 p-4">
      <div style={{ marginLeft: '20%', marginRight: '20%' }}>
            <h1 style={{ fontSize: '30px', fontWeight: 'bold', fontFamily: 'Sabon', color: '#333', paddingBottom: 25 }}>
                Current Coursework at UIUC
            </h1>
            <li style={{ fontSize: '16px', fontFamily: 'Sabon', paddingBottom: 5 }}>
                INFO 333: User Experience Design in Action
            </li>
            <li style={{ fontSize: '16px', fontFamily: 'Sabon', paddingBottom: 20, listStyleType: 'none', paddingLeft: '16px' }}>
            Explores user experience design through visual, sensory, and data-driven approaches, combining hands-on assignments like rapid prototyping with emerging fields such as AI and interactive data visualization.
            </li>
            <li style={{ fontSize: '16px', fontFamily: 'Sabon', paddingBottom: 5 }}>
                CS 361: Probability and Statistics for CS
            </li>
            <li style={{ fontSize: '16px', fontFamily: 'Sabon', paddingBottom: 5 }}>
                LING 250: Lingusitic Diversity in the US
            </li>
            
            <h1 style={{ fontSize: '30px', fontWeight: 'bold', fontFamily: 'Sabon', color: '#333', paddingBottom: 25 }}>
                Previous Coursework at UMass
            </h1>
            <li style={{ fontSize: '16px', fontFamily: 'Sabon', paddingBottom: 5 }}>
                CS 220: Discrete Mathematics
            </li>
            <li style={{ fontSize: '16px', fontFamily: 'Sabon', paddingBottom: 5 }}>
                CS 210: Computing with Data Structures
            </li>
            <li style={{ fontSize: '16px', fontFamily: 'Sabon', paddingBottom: 5 }}>
                CS 420: Intro to Theory of Computation 
            </li>
            <li style={{ fontSize: '16px', fontFamily: 'Sabon', paddingBottom: 20, listStyleType: 'none', paddingLeft: '16px' }}>
            This course is taught in <a href="https://coq.inria.fr" style={{ color: '#C8A2C8', fontWeight: 'bold' }}>Coq</a>, and it explores the fundamentals of computing, including how problems are solved by machines, limits of computation, the halting problem, P vs NP, and basics of automata and grammars.
            </li>
        </div>
      </main>
    </div>
  );
}


