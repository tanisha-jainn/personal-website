#!/usr/bin/env bash
# Compress raw videos for the web.
#   Drop raw exports in media-originals/<project>/... (git-ignored; never deployed).
#   Run: scripts/compress-videos.sh
#   Each video is written to public/work/<project>/... as a small H.264 .mp4 (shorter side at most 720px,
#   starts playing before fully downloaded) plus a .jpg poster frame. Already-compressed files are skipped.
set -euo pipefail
cd "$(dirname "$0")/.."

find media-originals -type f \( -iname '*.mp4' -o -iname '*.mov' -o -iname '*.m4v' -o -iname '*.webm' \) | while read -r src; do
  rel="${src#media-originals/}"
  out="public/work/${rel%.*}.mp4"
  [ -f "$out" ] && [ "$out" -nt "$src" ] && continue
  mkdir -p "$(dirname "$out")"
  echo "compressing $rel"
  ffmpeg -nostdin -loglevel error -y -i "$src" \
    -vf "scale='if(gt(iw,ih),-2,min(720,iw))':'if(gt(iw,ih),min(720,ih),-2)'" \
    -c:v libx264 -preset slow -crf 26 -pix_fmt yuv420p -movflags +faststart \
    -c:a aac -b:a 96k "$out"
  ffmpeg -nostdin -loglevel error -y -ss 1 -i "$out" -frames:v 1 -q:v 4 "${out%.mp4}.jpg"
  printf '  %s -> %s\n' "$(du -h "$src" | cut -f1)" "$(du -h "$out" | cut -f1)"
done
