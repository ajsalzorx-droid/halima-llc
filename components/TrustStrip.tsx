import { Award, Headphones, ShieldCheck, Truck } from "lucide-react";

const trustItems = [
  { icon: ShieldCheck, title: "Premium Quality", description: "Trusted brands and products built to last." },
  { icon: Award, title: "Wide Selection", description: "A comprehensive range to suit every need." },
  { icon: Headphones, title: "Expert Support", description: "Professional guidance before and after your purchase." },
  { icon: Truck, title: "Fast Delivery", description: "Quick and reliable delivery across the UAE." },
];

export default function TrustStrip() {
  return (
    <div className="category-trust-strip">
      {trustItems.map(({ icon: Icon, title, description }) => (
        <div className="category-trust-item" key={title}>
          <span><Icon aria-hidden="true" /></span>
          <div><b>{title}</b><p>{description}</p></div>
        </div>
      ))}
    </div>
  );
}
