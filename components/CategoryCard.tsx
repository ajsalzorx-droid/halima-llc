"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { ApplianceCategory } from "@/data/applianceCategories";

export default function CategoryCard({
  category,
  index,
}: {
  category: ApplianceCategory;
  index: number;
}) {
  const Icon = category.icon;

  return (
    <motion.article
      className="appliance-category-card"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
    >
      <Link href={category.href} aria-label={`Explore ${category.title}`}>
        <div className="category-card-top">
          <span className="category-icon"><Icon aria-hidden="true" /></span>
          <span className="category-number">{category.number}</span>
        </div>
        <h3>{category.title}</h3>
        <p>{category.description}</p>
        <span className="category-count">
          {category.productCount} products
          <span className="category-arrow"><ArrowRight aria-hidden="true" /></span>
        </span>
        <div
          className="category-product-crop"
          style={{
            "--crop-x": `${category.crop.x}px`,
            "--crop-y": `${category.crop.y}px`,
          } as React.CSSProperties}
        >
          <Image
            src={category.image}
            width={1536}
            height={1280}
            alt={category.imageAlt}
            sizes="1536px"
            priority={index < 4}
          />
        </div>
        <span className="category-red-line" />
      </Link>
    </motion.article>
  );
}
