import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <div>
        <header className="py-6">
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <Image
              src="/Logo.jpeg"
              alt="Logo"
              width={1826 / 4}
              height={602 / 4}
              className="mx-auto"
            />
          </div>
          <nav className="flex gap-8" style={{ fontFamily: 'Sabon' }}>
            <Link href="/" className="text-lg hover:text-blue-500">
              Home
            </Link>
            <Link href="/experience" className="text-lg hover:text-blue-500">
              Experience
            </Link>
            <Link href="/passions" className="text-lg hover:text-blue-500">
              Passions
            </Link>
            <Link href="/coursework" className="text-lg hover:text-blue-500">
              Coursework
            </Link>
          </nav>
        </div>
      </header>
      </div>
      );
};



export default Header;
