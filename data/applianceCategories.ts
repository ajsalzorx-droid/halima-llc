import type { LucideIcon } from "lucide-react";
import {
  CookingPot,
  Diamond,
  LayoutGrid,
  Refrigerator,
  Snowflake,
  Tv,
  WashingMachine,
  Waves,
} from "lucide-react";

export type ApplianceCategory = {
  id: string;
  number: string;
  title: string;
  description: string;
  productCount: number;
  image: string;
  href: string;
  icon: LucideIcon;
  imageAlt: string;
};

export const applianceCategories: ApplianceCategory[] = [
  {
    id: "air-conditioning",
    number: "01",
    title: "Air Conditioning",
    description: "Split, ducted, standing and package cooling systems.",
    productCount: 42,
    image: "/images/categories/air-conditioning-transparent.png",
    href: "/shop?category=air-conditioning",
    icon: Snowflake,
    imageAlt: "Split air conditioner with outdoor cooling unit",
  },
  {
    id: "refrigeration",
    number: "02",
    title: "Refrigeration",
    description: "Domestic and commercial cold storage solutions.",
    productCount: 36,
    image: "/images/categories/refrigeration-transparent.png",
    href: "/shop?category=refrigeration",
    icon: Refrigerator,
    imageAlt: "Modern refrigerator and glass-door commercial chiller",
  },
  {
    id: "laundry",
    number: "03",
    title: "Laundry Appliances",
    description: "Washers, dryers and all-in-one fabric care.",
    productCount: 28,
    image: "/images/categories/laundry-appliances-transparent.png",
    href: "/shop?category=laundry-appliances",
    icon: WashingMachine,
    imageAlt: "Front-load and twin-tub washing machines",
  },
  {
    id: "kitchen",
    number: "04",
    title: "Kitchen Appliances",
    description: "Cooking, dishwashing and countertop essentials.",
    productCount: 51,
    image: "/images/categories/kitchen-appliances-transparent.png",
    href: "/shop?category=kitchen-appliances",
    icon: CookingPot,
    imageAlt: "Cooking range, dishwasher, microwave and blender",
  },
  {
    id: "home-small",
    number: "05",
    title: "Home & Small Appliances",
    description: "Everyday convenience for a better home.",
    productCount: 64,
    image: "/images/categories/home-small-appliances-transparent.png",
    href: "/shop?category=home-small-appliances",
    icon: Diamond,
    imageAlt: "Vacuum cleaner, electric kettle and iron",
  },
  {
    id: "televisions",
    number: "06",
    title: "Televisions",
    description: "Immersive smart entertainment in every size.",
    productCount: 24,
    image: "/images/categories/televisions-transparent.png",
    href: "/shop?category=televisions",
    icon: Tv,
    imageAlt: "Modern flat-screen smart television",
  },
  {
    id: "commercial-cooling",
    number: "07",
    title: "Commercial Cooling",
    description: "Reliable equipment for professional environments.",
    productCount: 19,
    image: "/images/categories/commercial-cooling-transparent.png",
    href: "/shop?category=commercial-cooling",
    icon: LayoutGrid,
    imageAlt: "Commercial cooler and upright glass-door chiller",
  },
  {
    id: "water-heating",
    number: "08",
    title: "Water Heating",
    description: "Efficient hot water systems for every property.",
    productCount: 16,
    image: "/images/categories/water-heating-transparent.png",
    href: "/shop?category=water-heating",
    icon: Waves,
    imageAlt: "Vertical and horizontal electric water heaters",
  },
];
