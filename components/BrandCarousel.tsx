const brandStrips = [
  {
    src: "/brands/brand-strip-01.png",
    alt: "O General, Mitsubishi Electric, LG, Samsung and Panasonic",
  },
  {
    src: "/brands/brand-strip-02.png",
    alt: "Midea, Carrier, Gree, Haier and Hitachi",
  },
  {
    src: "/brands/brand-strip-03.png",
    alt: "Hisense, Toshiba, TCL, Fujidenzo and Daikin",
  },
  {
    src: "/brands/brand-strip-04.png",
    alt: "Sharp, Akai, Nikai, Sanyo and Philips",
  },
  {
    src: "/brands/brand-strip-05.png",
    alt: "Prestige, Black and Decker, Kenwood, Braun and Sanford",
  },
  {
    src: "/brands/brand-strip-06.png",
    alt: "Kenex, Afra, Geepas, Olsenmark and Zanussi",
  },
];

export default function BrandCarousel() {
  return (
    <section className="brands" aria-labelledby="trusted-brands-title">
      <span className="eyebrow" id="trusted-brands-title">Trusted names in technology</span>
      <div className="brand-marquee">
        <div className="brand-marquee-track">
          {[...brandStrips, ...brandStrips].map((strip, index) => (
            <img
              src={strip.src}
              alt={index < brandStrips.length ? strip.alt : ""}
              aria-hidden={index >= brandStrips.length}
              loading={index < 2 ? "eager" : "lazy"}
              key={`${strip.src}-${index}`}
            />
          ))}
        </div>
      </div>
      <p>Brand availability varies by product and model. No authorised distributor status is implied.</p>
    </section>
  );
}
