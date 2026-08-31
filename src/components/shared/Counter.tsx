"use client";
import { Button, Input } from "@/components/ui";
import { Icons } from "./Icons";
import { useState } from "react";

export const Counter = ({ currentStock }: { currentStock: number; }) => {

    const [quantity, setQuantity] = useState(1);
    const increase = () => setQuantity((q) => q + 1);
    const decrease = () => setQuantity((q) => Math.max(1, q - 1));
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 1;
    setQuantity(Math.max(1, Math.min(value, currentStock)));
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-md">
      <Button
        variant="ghost"
        size="icon"
        className="w-8 h-4"
        disabled={quantity <= 1}
        onClick={decrease}
      >
        <Icons.minus className="w-4 h-4" />
      </Button>
      <Input
        type="number"
        value={quantity}
        onChange={changeHandler}
        className="w-12 text-center border-y-0 border-x rounded-none h-4 p-0 pl-1 lg:pl-2 shadow-none"
      />
      <Button
        variant="ghost"
        size="icon"
        className="w-8 h-4"
        disabled={quantity >= currentStock}
        onClick={increase}
      >
        <Icons.plus className="w-4 h-4" />
      </Button>
    </div>
  );
};
