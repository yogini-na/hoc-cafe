export type MenuCategory = "All" | "Tea" | "Coffee" | "Refreshments" | "Quick Bites";

export interface MenuItem {
  id: string;
  name: string;
  category: "Tea" | "Coffee" | "Refreshments" | "Quick Bites";
  description: string;
  image: string;
  isVegetarian: boolean;
  priceDisplay?: string;
  priceConfigurable?: boolean;
  highlightBadge?: string;
}

export const MENU_CATEGORIES: MenuCategory[] = [
  "All",
  "Tea",
  "Coffee",
  "Refreshments",
  "Quick Bites"
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "tea-adrak",
    name: "Adrak Chai (Ginger Tea)",
    category: "Tea",
    description: "Robust freshly brewed black tea infused with crushed fresh ginger root and simmered milk for a warming, invigorating cup.",
    image: "/images/tea-selection.jpg",
    isVegetarian: true,
    priceConfigurable: true,
    highlightBadge: "Customer Favourite"
  },
  {
    id: "tea-rose",
    name: "Rose Tea",
    category: "Tea",
    description: "A delicately fragrant infusion crafted with organic rose essence and hand-selected tea leaves, offering subtle floral sweetness.",
    image: "/images/tea-selection.jpg",
    isVegetarian: true,
    priceConfigurable: true,
    highlightBadge: "Signature Brew"
  },
  {
    id: "coffee-house-brew",
    name: "HOC Speciality Coffee",
    category: "Coffee",
    description: "Richly aromatic roast prepared fresh to order. Available in comforting hot brews and chilled espresso styles upon request.",
    image: "/images/coffee-speciality.jpg",
    isVegetarian: true,
    priceConfigurable: true,
    highlightBadge: "Configurable at Counter"
  },
  {
    id: "lassi-varieties",
    name: "Flavoured Lassi Collection",
    category: "Refreshments",
    description: "Thick, traditionally churned yogurt drink available in multiple refreshing flavours including Kesar Mango and sweet Rose, topped with nuts.",
    image: "/images/refreshment-lassi.jpg",
    isVegetarian: true,
    priceConfigurable: true,
    highlightBadge: "Multiple Flavours"
  },
  {
    id: "bites-bun-maska",
    name: "Classic Bun Maska",
    category: "Quick Bites",
    description: "Soft, golden-crusted bakery bun generously layered with melting salted butter. The quintessential companion to your hot cup of chai.",
    image: "/images/bites-bun-maska.jpg",
    isVegetarian: true,
    priceConfigurable: true,
    highlightBadge: "Timeless Classic"
  },
  {
    id: "bites-grilled-sandwich",
    name: "Toasted Grilled Sandwich",
    category: "Quick Bites",
    description: "Crispy golden toasted bread stuffed with garden vegetables, mild spices, and gooey melted cheese, served with herb chutney.",
    image: "/images/bites-sandwich.jpg",
    isVegetarian: true,
    priceConfigurable: true,
    highlightBadge: "Popular Bite"
  },
  {
    id: "bites-masala-maggi",
    name: "Vegetable Masala Maggi",
    category: "Quick Bites",
    description: "Steaming hot comfort noodles tossed with finely diced fresh veggies, aromatic spices, and fresh coriander garnish.",
    image: "/images/bites-maggi.jpg",
    isVegetarian: true,
    priceConfigurable: true,
    highlightBadge: "Comfort Favourite"
  }
];
