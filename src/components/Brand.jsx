import "./Brand.css";

import delta from "../assets/brands/brand1.avif";
import moen from "../assets/brands/brand2.avif";
import kohler from "../assets/brands/brand5.avif";
import americanStandard from "../assets/brands/brand3.avif";
import pfister from "../assets/brands/brand4.avif";

const brands = [
  { name: "Delta", logo: delta },
  { name: "Moen", logo: moen },
  { name: "Kohler", logo: kohler },
  { name: "American Standard", logo: americanStandard },
  { name: "Pfister", logo: pfister },
];

const marqueeBrands = [...brands, ...brands, ...brands, ...brands];

export default function Brands() {
  return (
    <section className="border-y border-dark/5 bg-white py-16 md:py-20">
      <div className="mx-auto mb-10 max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary md:text-sm">
          Trusted Brands
        </span>

        <h2 className="mt-3 text-3xl font-extrabold leading-tight text-dark md:text-4xl">
          Premium Plumbing Brands We Trust
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark/60 md:text-lg">
          Fixtures and replacement parts sourced from the industry's most
          trusted manufacturers for long-lasting performance.
        </p>
      </div>

      <div className="marquee">
        <div className="marquee-content">
          {marqueeBrands.map((brand, index) => (
            <div key={index} className="brand">
              <img
                src={brand.logo}
                alt={brand.name}
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}