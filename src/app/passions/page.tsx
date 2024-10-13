"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import KitchenDiariesEmbed from '../components/KitchenDiariesEmbed';

export default function Gallery() {
  const [images, setImages] = useState([]);

  // Fetch images from the API route
  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch('/api/images');
      const data = await res.json();
      setImages(data);
    };
    fetchImages();
  }, []);

  return (
    <div>      
      <p style={{ fontFamily: 'Sabon', marginLeft: "20%", marginRight: "20%", fontSize: '16px', paddingTop: 25 }}>
      Cooking has always been a big part of my life. I love making food and exploring new restaurants. Below is my blog, The Kitchen Diaries, which I&apos;ve been writing since middle school, along with a gallery of my recent eats. Enjoy♡♡
      </p>
      <div style={{marginLeft: '5%', marginRight: '5%', width:'90%', justifyContent:'center'}}>
      <KitchenDiariesEmbed />
      </div>
    <div className="flex justify-center p-8">
      <div className="max-w-5xl w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={`/images/${img}`}
                alt={`Image ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
