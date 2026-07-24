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
  crop: { x: number; y: number };
};

export const applianceCategories: ApplianceCategory[] = [
  {
    id: "air-conditioning",
    number: "01",
    title: "Air Conditioning",
    description: "Split, ducted, standing and package cooling systems.",
    productCount: 42,
    image: "/solutions-every-space.png",
    href: "/shop?category=air-conditioning",
    icon: Snowflake,
    imageAlt: "Split air conditioner with outdoor cooling unit",
    crop: { x: 62, y: 500 },
  },
  {
    id: "refrigeration",
    number: "02",
    title: "Refrigeration",
    description: "Domestic and commercial cold storage solutions.",
    productCount: 36,
    image: "/solutions-every-space.png",
    href: "/shop?category=refrigeration",
    icon: Refrigerator,
    imageAlt: "Modern refrigerator and glass-door commercial chiller",
    crop: { x: 443, y: 500 },
  },
  {
    id: "laundry",
    number: "03",
    title: "Laundry Appliances",
    description: "Washers, dryers and all-in-one fabric care.",
    productCount: 28,
    image: "/solutions-every-space.png",
    href: "/shop?category=laundry-appliances",
    icon: WashingMachine,
    imageAlt: "Front-load and twin-tub washing machines",
    crop: { x: 798, y: 500 },
  },
  {
    id: "kitchen",
    number: "04",
    title: "Kitchen Appliances",
    description: "Cooking, dishwashing and countertop essentials.",
    productCount: 51,
    image: "/solutions-every-space.png",
    href: "/shop?category=kitchen-appliances",
    icon: CookingPot,
    imageAlt: "Cooking range, dishwasher, microwave and blender",
    crop: { x: 1155, y: 500 },
  },
  {
    id: "home-small",
    number: "05",
    title: "Home & Small Appliances",
    description: "Everyday convenience for a better home.",
    productCount: 64,
    image: "/solutions-every-space.png",
    href: "/shop?category=home-small-appliances",
    icon: Diamond,
    imageAlt: "Vacuum cleaner, electric kettle and iron",
    crop: { x: 55, y: 860 },
  },
  {
    id: "televisions",
    number: "06",
    title: "Televisions",
    description: "Immersive smart entertainment in every size.",
    productCount: 24,
    image: "/solutions-every-space.png",
    href: "/shop?category=televisions",
    icon: Tv,
    imageAlt: "Modern flat-screen smart television",
    crop: { x: 510, y: 880 },
  },
  {
    id: "commercial-cooling",
    number: "07",
    title: "Commercial Cooling",
    description: "Reliable equipment for professional environments.",
    productCount: 19,
    image: "/solutions-every-space.png",
    href: "/shop?category=commercial-cooling",
    icon: LayoutGrid,
    imageAlt: "Commercial cooler and upright glass-door chiller",
    crop: { x: 900, y: 875 },
  },
  {
    id: "water-heating",
    number: "08",
    title: "Water Heating",
    description: "Efficient hot water systems for every property.",
    productCount: 16,
    image: "/solutions-every-space.png",
    href: "/shop?category=water-heating",
    icon: Waves,
    imageAlt: "Vertical and horizontal electric water heaters",
    crop: { x: 1270, y: 875 },
  },
];
