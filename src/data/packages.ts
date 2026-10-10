// Pricing packages. Each object is one card in Pricing.astro, and the names
// also populate the Package dropdown on the contact form.
export const packages = [
  {
    name: 'The Mon',
    price: '$249',
    salePrice: '$149',
    tagline: 'Aerial photos that make the listing',
    features: [
      '10 edited aerial photos',
      'Multiple altitudes and angles',
      'MLS-ready resolution and formats',
      '72-hour delivery',
    ],
    featured: false,
  },
  {
    name: 'The Allegheny',
    price: '$449',
    salePrice: '$299',
    tagline: 'Photos plus a cinematic aerial film',
    features: [
      'Everything in The Mon + 5 additional photos',
      '60–90 second cinematic 4K video',
      'Licensed music and professional edit',
      '72-hour delivery',
    ],
    featured: true,
  },
  {
    name: 'The Ohio',
    price: '$699',
    salePrice: '$599',
    tagline: 'The full marketing package',
    features: [
      'Everything in The Allegheny',
      '25+ edited aerial photos',
      'Twilight / golden-hour session',
      'Neighborhood and amenity flyover',
      'Lot line overlay graphics',
      'Priority 48-hour delivery',
    ],
    featured: false,
  },
];
