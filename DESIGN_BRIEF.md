# Portfolio direction — pending user imagery

Reference: https://hanluxi.com/
Live site: https://tanishajain.vercel.app/

Keep the centered name composition, clickable folders, distinct project categories, and individual case-study pages. Use Tanisha's own imagery, typography choices, and color palette. Current local lavender/sage colors and illustrated thumbnails are provisional.

## Priority projects requested by Tanisha
- Poshmark videos
- Video generation pipeline
- Coinbase work
- Product Space hackathon project
- Additional side projects to be specified

The local prototype currently uses the older repository's projects as layout content. Replace or reorder them once Tanisha provides details for the priority projects. Do not infer employment status, tools, shipped work, metrics, or user research from project names.

For each priority project, collect: problem, intended user, personal contribution, build status, tools, artifacts/code/demo, and actual evidence or feedback. Use CASE_STUDY_TEMPLATE.md for the full story.

## Imagery to collect
- Name/lettering inspiration
- Folder covers, icons, stickers, and decorative details
- Project screenshots or thumbnails
- Color references (images or hex values)

## Local draft
Branch: codex/portfolio-redesign
Build: npm run build
Preview: npm run start -- --hostname 127.0.0.1 --port 3000
No remote changes or deployment have been made.

## Confirmed palette
Use #64555E, supplied by Tanisha from her name graphic, for primary text and folders. Pair with muted baby pink #F3E7EA as the full-page background. Preserve embroidery accent colors. The latest user artwork supersedes the provisional SVG lettering; obtain a clean export for final placement.

## Theme and exact artwork
“Stitching my life together”: Product, Marketing, and Engineering are the three primary folder destinations. Embroidery expresses the connection between those experiences and personal interests. Use the exact user screenshot from 5:51:48 PM, saved as public/art/tanisha-name.png, without tracing or replacing its artwork. The screenshot includes a white background; retain it until a transparent original is provided. The homepage folders select their corresponding portfolio filters.

Latest supplied artwork: /Users/tanishajain/Downloads/Computer Says No/1.png, copied byte-for-byte to public/art/tanisha-name-updated.png. Use this updated pixel-lettering artwork. It is an opaque 1920×1080 PNG. CSS frames the artwork area (x=770, y=295, width=820, height=450) without modifying the image.

## Latest opening-screen direction
White background throughout. On first load, only the exact supplied name image and three labeled folders (Product, Marketing, Engineering) appear. Put homepage navigation, the stitching theme, and introduction below the full-height opening section. Keep #64555E text and folders.

Homepage navigation sits immediately below the full-screen intro and becomes sticky at the viewport top after scrolling past that intro. It is absent from the opening viewport.

Scroll interaction: after the intro/navigation, type “I bring product, marketing, and engineering together.” once when the statement enters view. Fade the following introduction in gently. Reserve text space to prevent layout shifts, expose the complete sentence to assistive technology, and show content immediately for reduced-motion preferences.

Latest name image is the exact lace-lettering PNG from Computer Says No-2/1.png, copied to public/art/tanisha-name-lace.png; it supersedes prior artwork. CSS framing only, no image edits.
