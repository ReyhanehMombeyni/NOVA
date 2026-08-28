import Image from "next/image";
import Link from "next/link";

import Women from "@/../public/images/basic/women.png";
import Men from "@/../public/images/basic/men1.png";
import { Button } from "@/components/ui";

export const Header = () => {
  return (
    <header className="h-80 md:h-110 w-full bg-primary text-primary-foreground">
      <div className="relative mx-auto h-full w-full">
        <div className="pointer-events-none absolute left-0 top-0 z-10 hidden h-full w-1/3 md:block lg:w-1/4">
          <Image
            src={Men}
            alt="Man standing"
            fill
            sizes="(max-width: 1024px) 33vw, 25vw"
            className="object-contain object-bottom-left"
            priority
          />
        </div>
        <div className="flex flex-col justify-center items-center text-center h-full">
            <div className="flex justify-between w-xs text-6xl md:w-2xl md:text-[10rem] lg:w-4xl px-5 font-heading font-black">
              <span>N</span>
              <span>O</span>
              <span>V</span>
              <span>A</span>
            </div>
            <h1 className="text-2xl pt-5 font-heading font-bold">NOVA E-Commerce</h1>
            <h3 className="text-lg font-mono font-semibold pt-2 opacity-90">Wear Your Style</h3>
            <p className="text-md opacity-90">Be yourself! Be Bold!</p>
            <Button variant="outline" size="lg" className="mt-3 rounded-sm" asChild>
              <Link href="/products">Shop Now</Link>
            </Button>
        </div>
        <div className="pointer-events-none absolute right-0 top-0 z-10 hidden h-full w-1/3 md:block lg:w-1/4">
          <Image
            src={Women}
            alt="Woman standing"
            fill
            sizes="(max-width: 1024px) 33vw, 25vw"
            className="object-contain object-bottom-right"
            priority
          />
        </div>
      </div>
    </header>
  );
};
