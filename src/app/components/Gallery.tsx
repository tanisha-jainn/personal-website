import Image from 'next/image';

const images = [
  'photo1.png',
  'photo2.png',
  'photo3.png',
  'photo4.png',
  'photo5.png',
  'photo6.png',
  'photo7.png',
  'photo8.png',
  'photo9.png',
  'photo10.png',
  'photo11.png',
];

export default function Gallery() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Photo Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <div key={index} className="relative w-full h-64">
            <Image
              src={`/images/${img}`}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

