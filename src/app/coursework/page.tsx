import '../globals.css';

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <main className="flex-1 p-4">
      <div style={{ marginLeft: '20%', marginRight: '20%' }}>
            <h1 style={{ fontSize: '30px', fontWeight: 'bold', fontFamily: 'Sabon', color: '#333', paddingBottom: 25 }}>
                Current Coursework
            </h1>
            <li style={{ fontSize: '16px', fontFamily: 'Sabon', paddingBottom: 5 }}>
                CS 420: Intro to Theory of Computation 
            </li>
            <li style={{ fontSize: '16px', fontFamily: 'Sabon', paddingBottom: 20, listStyleType: 'none', paddingLeft: '16px' }}>
            This course is taught in <a href="https://coq.inria.fr" style={{ color: '#C8A2C8', fontWeight: 'bold' }}>Coq</a>, and it explores the fundamentals of computing, including how problems are solved by machines, limits of computation, the halting problem, P vs NP, and basics of automata and grammars.
            </li>
            <li style={{ fontSize: '16px', fontFamily: 'Sabon', paddingBottom: 5 }}>
                CS 240: Programming in C
            </li>
            <li style={{ fontSize: '16px', fontFamily: 'Sabon', paddingBottom: 20, listStyleType: 'none', paddingLeft: '16px' }}>
            As the title suggests, this course is taught in C, and it covers data structures and algorithms. 
            </li>
            <li style={{ fontSize: '16px', fontFamily: 'Sabon', paddingBottom: 5 }}>
                PHYSIC 114: Physics II
            </li>
            <li style={{ fontSize: '16px', fontFamily: 'Sabon', paddingBottom: 20, listStyleType: 'none', paddingLeft: '16px' }}>
            This class covers thermodynamics, electricity and magnetism, geometrical and wave optics.
            </li>
            <li style={{ fontSize: '16px', fontFamily: 'Sabon', paddingBottom: 5 }}>
                MATH 260: Linear Algebra
            </li>
            <li style={{ fontSize: '16px', fontFamily: 'Sabon', paddingBottom: 25, listStyleType: 'none', paddingLeft: '16px' }}>
            This course explores vectors, matrices, systems of linear equations, vector spaces, and their real-world applications.
            </li>
            <h1 style={{ fontSize: '30px', fontWeight: 'bold', fontFamily: 'Sabon', color: '#333', paddingBottom: 25 }}>
                Previous Coursework
            </h1>
            <li style={{ fontSize: '16px', fontFamily: 'Sabon', paddingBottom: 5 }}>
                CS 220: Discrete Mathematics
            </li>
            <li style={{ fontSize: '16px', fontFamily: 'Sabon', paddingBottom: 20, listStyleType: 'none', paddingLeft: '16px' }}>
            This course was my introduction to the key mathematical concepts used in computing, such as sets, logic, and proofs, with a focus on both formal and informal reasoning.
            </li>
            <li style={{ fontSize: '16px', fontFamily: 'Sabon', paddingBottom: 5 }}>
                CS 210: Computing with Data Structures
            </li>
            <li style={{ fontSize: '16px', fontFamily: 'Sabon', paddingBottom: 20, listStyleType: 'none', paddingLeft: '16px' }}>
            This course focused on designing and building programs using advanced concepts like data structures and recursion, using topics such as lists, stacks, queues, trees, and sorting techniques.
            </li>
            <li style={{ fontSize: '16px', fontFamily: 'Sabon', paddingBottom: 5 }}>
                MATH 141: Calculus II
            </li>
            <li style={{ fontSize: '16px', fontFamily: 'Sabon', paddingBottom: 20, listStyleType: 'none', paddingLeft: '16px' }}>
            This course covered topics, including integration techniques, infinite series, parametric equations, polar coordinates, and applications of integrals.
            </li>
        </div>
      </main>
    </div>
  );
}


