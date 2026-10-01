import Link from 'next/link';
import FolderIcon from './FolderIcon';

import type { CSSProperties } from 'react';
import pixelType from './pixel-type.json';
import PixelText from './PixelText';
const stitches = pixelType.name;

// Rotate the starting point per letter, while every sequence lasts 3.6 seconds.
const startFractions = [0.08, 0.43, 0.72, 0.27, 0.58, 0.91, 0.35, 0.64, 0.16, 0.82, 0.51];

function LetterStitchOutlines() {
  return <svg className="stitch-details" viewBox={stitches.viewBox} aria-hidden="true" focusable="false">
    {stitches.letters.map((letter, letterIndex) => <g key={letterIndex}>
      {letter.map((d, stitchIndex) => <path
        key={stitchIndex}
        className="letter-stitch"
        d={d}
        pathLength={1}
        style={{
          '--stitch-delay': `${0.2 + ((stitchIndex - Math.floor(startFractions[letterIndex] * letter.length) + letter.length) % letter.length) * 3.6 / letter.length}s`,
          '--stitch-duration': `${3.6 / letter.length}s`,
        } as CSSProperties}
      />)}
    </g>)}
  </svg>;
}

export default function StitchedHero() {
  return <section className="hero section-wrap stitched-hero">
    <div className="fabric-frame pixel-name-frame">
      <h1 className="embroidered-name stitched-logo">
        <span className="sr-only">Tanisha Jain</span>
        <svg className="pixel-name" viewBox={stitches.viewBox} aria-hidden="true" focusable="false" shapeRendering="crispEdges">
          <g fill="#686868">{stitches.blocks.map(([x, y]) => <rect key={`${x}-${y}`} x={x} y={y} width="10" height="10" />)}</g>
        </svg>
      </h1>
      <LetterStitchOutlines />
    </div>
    <p className="hero-education">cs+ling @ uiuc</p>
    <div className="hero-folders">
      <Link href="/portfolio" className="folder-link"><span className="folder" aria-hidden="true"><span className="folder-sheet">work &<br/>wonder</span><span className="folder-front"><FolderIcon kind="portfolio" /></span></span><PixelText text="portfolio" /></Link>
      <Link href="/portfolio?category=Marketing" className="folder-link"><span className="folder" aria-hidden="true"><span className="folder-sheet">ideas &<br/>stories</span><span className="folder-front"><FolderIcon kind="studio" /></span></span><PixelText text="the studio" /></Link>
      <Link href="/passions" className="folder-link"><span className="folder" aria-hidden="true"><span className="folder-sheet">made with<br/>love</span><span className="folder-front"><FolderIcon kind="joy" /></span></span><PixelText text="little joys" /></Link>
    </div>
    <a className="guide-arrow hero-arrow" href="#stitched-statement" aria-label="Continue to the next section">↓</a>
  </section>;
}
