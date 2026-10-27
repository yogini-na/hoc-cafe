export interface SiteConfig {
  name: string;
  tagline: string;
  heroHeadline: string;
  heroSubtitle: string;
  address: {
    line1: string;
    landmark: string;
    area: string;
    subLocality: string;
    locality: string;
    city: string;
    state: string;
    country: string;
    full: string;
  };
  mapsSearchUrl: string;
  mapEmbedUrl: string;
  ratingInfo: {
    score: number;
    totalReviews: number;
    disclaimer: string;
  };
  instagram: {
    url: string;
    handle: string;
    profileUrl: string;
    followers: string;
    posts: string;
  };
  navigation: Array<{ name: string; href: string }>;
  verifiedThemes: Array<{
    title: string;
    description: string;
    tag: string;
  }>;
}

export const SITE_CONFIG: SiteConfig = {
  name: "HOC – High on Caffeine",
  tagline: "Your Neighbourhood Spot in Nagpur",
  heroHeadline: "Good Coffee. Great Company.",
  heroSubtitle: "Your neighbourhood spot for comforting chai, satisfying coffee, delicious bites, and moments worth slowing down for.",
  address: {
    line1: "SVG3, Mankapur Ring Road",
    landmark: "near Axis Bank",
    area: "Padole Layout",
    subLocality: "Bhamti, Gayatri Nagar",
    locality: "Trimurti Nagar",
    city: "Nagpur",
    state: "Maharashtra",
    country: "India",
    full: "SVG3, Mankapur Ring Road, near Axis Bank, Padole Layout, Bhamti, Gayatri Nagar, Trimurti Nagar, Nagpur, Maharashtra, India"
  },
  // Encoded Google Maps search link targeting the exact verified address
  mapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=HOC+-+High+on+Caffeine,+SVG3,+Mankapur+Ring+Road,+near+Axis+Bank,+Padole+Layout,+Bhamti,+Gayatri+Nagar,+Trimurti+Nagar,+Nagpur,+Maharashtra,+India",
  // Standard responsive Google Maps embed query for Mankapur Ring Road, Nagpur
  mapEmbedUrl: "https://maps.google.com/maps?q=Mankapur+Ring+Road,+Padole+Layout,+Trimurti+Nagar,+Nagpur,+Maharashtra&t=&z=15&ie=UTF8&iwloc=&output=embed",
  ratingInfo: {
    score: 4.2,
    totalReviews: 150,
    disclaimer: "User-provided customer feedback score (150 reviews). Not a live verified API rating. To be synchronized with official Google Business profile upon launch."
  },
  instagram: {
    url: "https://www.instagram.com/high__on__caffeine/",
    handle: "@high__on__caffeine",
    profileUrl: "https://www.instagram.com/high__on__caffeine/",
    followers: "445+",
    posts: "28+"
  },
  navigation: [
    { name: "Home", href: "#hero" },
    { name: "Why HOC", href: "#features" },
    { name: "Menu", href: "#menu" },
    { name: "Experience", href: "#experience" },
    { name: "Community", href: "#community" },
    { name: "Reviews", href: "#reviews" },
    { name: "About", href: "#about" },
    { name: "Location", href: "#location" },
  ],
  verifiedThemes: [
    {
      title: "Ginger & Rose Speciality Teas",
      description: "Patrons consistently highlight the aromatic Adrak (Ginger) Chai brewed with fresh root and the gentle floral notes of Rose Tea as daily staples.",
      tag: "Customer Favourite"
    },
    {
      title: "Chilled Flavourful Lassis",
      description: "Mentions celebrate the velvety, rich lassis served in distinct flavours—providing a cooling, authentic Indian refreshment.",
      tag: "Seasonal & Classic"
    },
    {
      title: "Comfort Bites: Sandwiches, Maggi & Bun Maska",
      description: "From warm, buttery Bun Maska dipped in hot tea to loaded masala Maggi and toasted grilled sandwiches, guests enjoy hearty quick comfort food.",
      tag: "Everyday Cravings"
    },
    {
      title: "Welcoming & Relaxed Ambience",
      description: "Frequently appreciated as a cozy neighbourhood haven for studying, catching up with friends, or taking a peaceful midday pause.",
      tag: "Community Space"
    }
  ]
};
