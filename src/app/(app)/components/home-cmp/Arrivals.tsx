import Link from "next/link";
import { ProductCard } from "@/components/shared/ProductCard";
import imageProduct from '@/../public/images/products/product1.png'
import { StaticImageData } from "next/image";

export interface ProductProps {
    id: number;
    title: string;
    price: number;
    brand: string;
    rating: number;
    image: StaticImageData;
}

export const productsData: ProductProps[] = [{
    id: 1,
    title: 'product1',
    price: 19.98,
    brand: 'luis',
    rating: 5,
    image: imageProduct
}, {
    id: 2,
    title: 'product2',
    price: 76.9,
    brand: 'prime',
    rating: 5,
    image: imageProduct
}, {
    id: 3,
    title: 'product3',
    price: 12.76,
    brand: 'chanle',
    rating: 5,
    image: imageProduct
}, {
    id: 4,
    title: 'product4',
    price: 98.0,
    brand: 'drim',
    rating: 5,
    image: imageProduct
}, {
    id: 5,
    title: 'product5',
    price: 94.9,
    brand: 'Guchi',
    rating: 5,
    image: imageProduct
}, {
    id: 6,
    title: 'product4',
    price: 98.0,
    brand: 'drim',
    rating: 5,
    image: imageProduct
}, {
    id: 7,
    title: 'product5',
    price: 94.9,
    brand: 'Guchi',
    rating: 5,
    image: imageProduct
}]

export const Arrivals = () => {
    return (
        <section className="w-full py-8 text-center">
            <h2 className="text-lg font-heading md:text-xl md:font-semibold">NEW ARRIVALS</h2>
            <p className="text-xs max-w-2xs md:text-sm md:max-w-sm mx-auto pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sit eius reprehenderit!</p>
            <div className="flex justify-between text-xs px-4 pt-5 pb-1 md:text-sm">
                <div>SHOP BY CATEGORIES</div>
                <Link href="/products" className="hover:text-ring text-blue-400 hover:text-blue-300">See More {`>`}</Link>
            </div>
            <div className="w-full overflow-x-auto px-4 pb-4 flex items-center gap-3">
                {
                    productsData.map((product) => <div key={product.id} className="min-w-35 sm:min-w-40 md:min-w-45 xl:min-w-50"><ProductCard {...product} /></div>)
                }
            </div>
        </section>
    );
}