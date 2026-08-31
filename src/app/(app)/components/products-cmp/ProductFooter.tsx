'use client'

import { Counter } from "@/components/shared";
import { Button } from "@/components/ui";

export const ProductFooter = () => {

    const handleAddToCart = () => {
    };

    return (
        <div className="flex space-x-4 pt-2 lg:pt-4">
                <Counter
                  currentStock={10}
                />
                <Button
                  size="sm"
                  onClick={() => handleAddToCart()}
                  className="flex-1 bg-primary text-primary-foreground hover:bg-gray-800 transition-colors"
                >
                  Add to cart
                </Button>
              </div>
    );
}