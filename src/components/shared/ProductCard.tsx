import Image from "next/image";
import Link from "next/link";

import { RatingStars } from "@/components/shared";
import { ProductProps } from "@/app/(app)/components/home-cmp";


export const ProductCard = ({ id, title, price, brand, rating, image }: ProductProps) => {
    return (
        <div className="flex flex-col gap-1 bg-card text-card-foreground w-full h-90 sm:h-95 md:h-100 xl:h-105 rounded-xl shadow-lg">
            <div className="relative w-full h-70 sm:h-74 md:h-79 xl:h-84 rounded-t-xl overflow-hidden">
                <Image
                    src={image}
                    alt="product image"
                    fill
                    sizes="104px"
                    className="object-cover"
                    priority
                />
            </div>
            <div className="flex flex-col text-left p-2">
                <h3 className="font-medium font-mono text-sm md:text-base"><Link href={`/product/${id}`}>{ title.slice(0, 10) }</Link></h3>
                <div className="flex justify-between items-center text-xs md:text-sm pb-2">
                    <span className=" text-gray-400">{brand}</span>
                    <RatingStars rating={rating} />
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-sm md:text-base">${price}</p>
                    <Link href={`/product/${id}`} className="text-xs md:text-sm text-blue-400 hover:text-blue-300">see more</Link>
                </div>
            </div>
        </div>
    );
}