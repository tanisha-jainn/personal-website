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
  cover: { phones: string[] };  // poster frames shown in phone mockups on the card
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
];
