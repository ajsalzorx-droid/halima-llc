"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { applianceCategories } from "@/data/applianceCategories";
import CategoryCard from "@/components/CategoryCard";
import TrustStrip from "@/components/TrustStrip";

export default function CategorySolutionsSection() {
  return (
    <motion.section
      className="category-solutions-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.7 }}
      aria-labelledby="category-solutions-title"
    >
      <div className="category-solutions-inner">
        <div className="category-solutions-head">
          <div>
            <span className="category-kicker">Explore the range</span>
            <h2 id="category-solutions-title">Solutions for <em>every space</em></h2>
            <p>Discover smart, reliable and energy-efficient appliances designed to fit every home, business and lifestyle.</p>
          </div>
          <Link className="category-view-all" href="/categories">
            View all categories <ArrowRight aria-hidden="true" />
          </Link>
        </div>
        <div className="appliance-category-grid">
          {applianceCategories.map((category, index) => (
            <CategoryCard category={category} index={index} key={category.id} />
          ))}
        </div>
        <TrustStrip />
      </div>
    </motion.section>
  );
}
