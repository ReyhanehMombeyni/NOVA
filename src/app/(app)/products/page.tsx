'use client'
import { ProductCard } from "@/components/shared";
import { productsData } from "../components/home-cmp";
import { Toolbars } from "../components/products-cmp";
import { useState } from "react";

export default function Products () {

    const [sort, setSort] = useState("featured");

    return (
        <main className="w-full p-5 md:px-10">
            <Toolbars productCount={128}
                sort={sort}
                onSortChange={(value) => setSort(value)} />
            <section className="mx-auto grid items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {
                    productsData.map(product => <div key={product.id} className="col-span-1"><ProductCard {...product} /></div>)
                }
            </section>
        </main>
    );
}