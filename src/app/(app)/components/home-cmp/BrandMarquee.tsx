'use client'

import louisVuitton from "@/../public/images/brands/louisVuitton.svg"
import prada from "@/../public/images/brands/prada.svg"
import calvinKlein from "@/../public/images/brands/calvinKlein.svg"
import denim from "@/../public/images/brands/denim.svg"
import chanel from "@/../public/images/brands/chanel.svg"
import Image from "next/image"

const BRANDS = [
  chanel, 
  louisVuitton , 
  prada, 
  calvinKlein, 
  denim
];

export const BrandMarquee = () => {
    const doubleBrands = [...BRANDS, ...BRANDS];
  return (
    <section className="overflow-hidden py-5 md:py-8 bg-ring">
      <div 
        className="flex animate-marquee max-w-fit" 
        style={{ animationDuration: '30s' }}
      >
        {doubleBrands.map((brand, index) => (
          <span 
            key={index} 
            className="shrink-0 mx-6 whitespace-nowrap"
          >
            <Image src={brand} alt="image brand" width={100} height={30} className="h-7 w-auto object-contain" />
          </span>
        ))}
      </div>
    </section>
  );
}