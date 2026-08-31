'use client'
import { Icons, RatingStars } from "@/components/shared";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui"
// import { ProductHeaderProps } from "@/src/types/products"
// import { AddReview } from "./AddReview"

interface ProductHeaderProps {
    id: number;
    title: string;
    rating: number;
    reviews: number;
}

export const ProductHeader = ({id, title, rating, reviews}: ProductHeaderProps) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:pt-2 font-semibold">
          {title}
        </h1>
        <Sheet>
          <SheetTrigger>
            <div className="p-2 hover:bg-primary rounded-full transition-colors">
              <Icons.star className="w-5 h-5 opacity-60" />
            </div>
          </SheetTrigger>
          <SheetContent side="right" className="w-[90%] sm:w-100">
            <SheetHeader>
              <SheetTitle className="font-heading text-lg border-b pb-4">Write a Review</SheetTitle>
            </SheetHeader>
            {/* <div className="mt-6">
              For Form AddReview
            </div> */}
          </SheetContent>
        </Sheet>
      </div>

        <div className="flex items-center space-x-2 pt-1">
          <RatingStars rating={rating} />
          <span className="text-xs opacity-70 pt-0.5">({reviews})</span>
        </div>
      </div>
  )
}
