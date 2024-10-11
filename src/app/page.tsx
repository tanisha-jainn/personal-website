"use client";

import { useState } from 'react';
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import About from './pages/About';
import './globals.css'; // Ensure this path is correct


export default function Home() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderContent = () => {
    switch (currentPage) {
      case 'Home':
        return <About />
      case 'About':
        return <p>This is the about page. Learn more about us here!</p>;
      case 'Services':
        return <p>We offer a variety of services to meet your needs.</p>;
      case 'Contact':
        return <p>Contact us for more information. We're happy to help!</p>;
      default:
        return <p>Welcome to the home page! Here's some random content.</p>;
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.logo}>
          <Image src="/Logo.jpeg" alt="Logo" width={1826/4} height={602/4} />
        </div>
        <nav style={styles.nav}>
          <a onClick={() => setCurrentPage('Home')} style={styles.link}>
            Home
          </a>
          <a onClick={() => setCurrentPage('About')} style={styles.link}>
            About
          </a>
          <a onClick={() => setCurrentPage('Services')} style={styles.link}>
            Services
          </a>
          <a onClick={() => setCurrentPage('Contact')} style={styles.link}>
            Contact
          </a>
        </nav>
      </header>

      <main style={styles.main}>
        {renderContent()}
      </main>

      <footer style={styles.footer}>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={styles.icon}>
          <FaLinkedin />
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer" style={styles.icon}>
          <FaGithub />
        </a>
        <a href="mailto:youremail@example.com" style={styles.icon}>
          <FaEnvelope />
        </a>
      </footer>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    fontFamily: 'Sabon, serif',
    backgroundColor: '#fff',
    color: '#333',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    // backgroundColor: '#ffcccb',
    padding: '20px',
    textAlign: 'center',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  nav: {
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  link: {
    fontSize: '18px',
    color: '#333',
    cursor: 'pointer',
    textDecoration: 'none',
    padding: '5px 10px',
  },
  main: {
    flex: '1',
    padding: '20px',
  },
  footer: {
    backgroundColor: '#ffcccb',
    padding: '10px',
    display: 'flex',
    justifyContent: 'center',
  },
  icon: {
    color: '#333',
    fontSize: '24px',
    textDecoration: 'none',
  },
};
