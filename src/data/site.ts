// Central business info. Update these once and both the contact section and
// the structured data / social meta stay in sync.
// TODO (Jacob): add real social profile URLs to `socials` and confirm the
// service-area list.
export const site = {
  name: 'Three Rivers Aerial Co.',
  legalName: 'Three Rivers Aerial Co.',
  description:
    'FAA-licensed drone photography and aerial videography for residential and commercial real estate in Pittsburgh, PA. Cinematic aerial media that helps listings sell faster.',
  email: 'hello@threeriversaerial.com',
  phone: '(724) 714-6679',
  areaServed: 'Greater Pittsburgh, Pennsylvania',
  region: 'PA',
  locality: 'Pittsburgh',
  // Downtown Pittsburgh — approximate business/service-area center.
  geo: { latitude: 40.4406, longitude: -79.9959 },
  // Roughly $149 (The Mon sale) to $599 (The Ohio sale).
  priceRange: '$149–$599',

  // Neighborhoods / municipalities used for local-SEO areaServed markup.
  serviceAreas: [
    'Pittsburgh',
    'Sewickley',
    'Mount Lebanon',
    'Upper St. Clair',
    'Fox Chapel',
    'Cranberry Township',
    'South Hills',
    'North Hills',
  ],

  // Core services, used for the schema offer catalog. Keep names aligned with
  // the cards in Services.astro.
  services: [
    {
      name: 'Aerial Real Estate Photography',
      description:
        'High-resolution drone photos of residential and commercial properties, professionally edited and delivered MLS-ready.',
    },
    {
      name: 'Cinematic Aerial Videography',
      description:
        'Stabilized 4K aerial video with reveal shots, orbits, and neighborhood flyovers, edited with licensed music.',
    },
    {
      name: 'Commercial Drone Media',
      description:
        'Aerial marketing and progress documentation for development sites, retail centers, office buildings, and land parcels.',
    },
  ],

  // Add real profile URLs when available (e.g. Google Business, Instagram).
  socials: [] as string[],
};
