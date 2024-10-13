import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  const imagesDirectory = path.join(process.cwd(), 'public/images');
  const files = fs.readdirSync(imagesDirectory);
  
  // Filter only PNG files (optional)
  const images = files.filter(file => file.endsWith('.png'));

  console.log(images)

  return NextResponse.json(images);
}
