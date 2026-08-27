'use client'

import Image from "next/image";
import Link from "next/link";

import BannerImg from "@/../public/images/basic/collection.png";
import { Button } from "@/components/ui";

export const CollectionBanner = () => {
    return (
        <section className="h-60 md:h-110 w-full bg-popover text-popover-foreground">
            <div className="relative mx-auto h-full w-full">
                    <div className="h-full">
                        <div className="flex justify-between mx-auto max-w-lg md:max-w-4xl text-6xl md:text-[10rem] px-5 font-heading font-black w-full opacity-10">
                          <span>N</span>
                          <span>O</span>
                          <span>V</span>
                          <span>A</span>
                        </div>
                        <div className="pl-5 xl:pl-30 absolute z-20">
                          <h2 className="text-base md:text-3xl xl:text-6xl pt-5 xl:pt-10 font-semibold">Autumn Collection</h2>
                          <h3 className="text-xs md:text-sm xl:text-xl pt-2 opacity-90">A New Season for Your Style!</h3>
                          <p className="text-[8px] opacity-90 max-w-40 md:max-w-full md:text-xs xl:text-sm xl:font-mono pt-2">The Latest Fall Trends, Right Here! Refresh Your Fall Style...</p>
                          <Button variant="outline" size="xs" className="mt-3 rounded-sm md:text-lg md:font-normal md:px-6 md:py-5" asChild>
                            <Link href="/products">Buy Now</Link>
                          </Button>
                        </div>
                    </div>
                    <div className="absolute pointer-events-none right-0 xl:right-20 top-0 z-10 w-xs md:w-full h-full">
                        <Image
                          src={BannerImg}
                          alt="Woman standing"
                          fill
                          sizes="(max-width: 1024px) 33vw, 25vw"
                          className="object-contain object-bottom-right"
                          priority
                        />
                    </div>
                  </div>
        </section>
    );
}