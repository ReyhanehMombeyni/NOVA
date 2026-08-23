import Image from "next/image";
import Link from "next/link";

import Category from "@/../public/images/basic/cat1.png"

const categories = [{
    id: 1,
    title: "Women"
}, {
    id: 2,
    title: "Men"
}, {
    id: 3,
    title: "Accessories"
}, {
    id: 4,
    title: "Bags"
}, {
    id: 5,
    title: "dress"
}]

export const CategoriesSection = () => {
    
    return (
        <section className="container h-35 md:h-50"> 
            <div className="text-left p-2 w-fit text-xs md:text-sm">Categories {`>`}</div>
            <div className="w-full overflow-x-auto">
            <ul className="h-fit w-max min-w-full flex justify-center px-5 gap-5 md:gap-20 md:px-10">
                {
                    categories.map(({id, title}) => <li key={id} className="text-center shrink-0">
                        <div className="relative w-18 h-18 md:w-25 md:h-25 rounded-full overflow-x-hidden md:my-2">
                            <Image
                                src={Category}
                                alt="caegory image"
                                fill
                                sizes="104px"
                                className="object-cover"
                                priority
                            />
                        </div>
                        <Link href="/products" className="text-sm md:text-base hover:shadow-2xl md:hover:text-lg">{title}</Link>
                    </li>)
                }
            </ul>
            </div>
        </section>
    );
}