// Everything shown in the "my work" grid. Each piece links to its own case study page.
export const categories = ['product', 'marketing', 'engineering', 'personal'] as const;
export type Category = typeof categories[number];

export type Work = {
  slug: string;
  name: string;
  blurb: string;
  date: string;                 // as it reads on the resume
  categories: Category[];       // drive the filter tabs
  kind?: string;                // an extra, non-filter tag such as "internship"
  // The card's cover: poster frames in phone mockups, or until there are visuals, a short title card.
  cover: { phones: string[] } | { title: string };
};

export const work: Work[] = [
  {
    slug: 'poshmark',
    name: 'Poshmark',
    blurb: 'turning live listings into video ads, faster, as a product intern',
    date: 'summer 2025',
    categories: ['product', 'marketing', 'engineering'],
    kind: 'internship',
    cover: { phones: ['/work/poshmark/finals/ai-ad.jpg', '/work/poshmark/finals/what-she-poshed.jpg', '/work/poshmark/finals/ai-influencer.jpg'] },
  },
  {
    slug: 'the-met',
    name: 'The Met',
    blurb: 'where my marketing started: helping run met teens, the museum’s account for teenagers',
    date: 'summer 2022',
    categories: ['marketing'],
    kind: 'high school internship',
    cover: { phones: ['/work/the-met/teen-fridays-reel.jpg', '/work/the-met/instagram-feed.jpg', '/work/the-met/post-scroll.jpg'] },
  },
];
