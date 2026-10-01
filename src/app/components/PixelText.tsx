import data from './pixel-type.json';

export default function PixelText({ text }: { text: string }) {
  const glyphs = data.glyphs as Record<string, { cells: number[][]; advance: number }>;
  let cursor = 0;
  const letters = Array.from(text).map((character, i) => {
    const glyph = glyphs[character];
    const x = cursor;
    cursor += glyph.advance;
    return <g key={i} transform={`translate(${x} 0)`}>{glyph.cells.map(([cx, cy]) => <rect key={`${cx}-${cy}`} x={cx} y={cy} width="1" height="1" />)}</g>;
  });
  return <span className="pixel-label"><span className="sr-only">{text}</span><svg viewBox={`0 0 ${cursor - 1} ${data.grid}`} style={{ aspectRatio: `${cursor - 1}/${data.grid}` }} aria-hidden="true" focusable="false" fill="currentColor" shapeRendering="crispEdges">{letters}</svg></span>;
}
