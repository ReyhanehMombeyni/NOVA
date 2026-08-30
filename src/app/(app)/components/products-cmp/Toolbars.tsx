import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
interface ProductToolbarProps {
  productCount: number;
  sort: string;
  onSortChange: (value: string) => void;
  onFilterClick?: () => void;
}

const sortItems = [
  {
    title: "Featured",
    value: "featured",
  },
  {
    title: "Newest",
    value: "newest",
  },
  {
    title: "Price: Low to High",
    value: "price-low",
  },
  {
    title: "Price: High to Low",
    value: "price-high",
  },
  {
    title: "Most Popular",
    value: "popular",
  },
];

export const Toolbars = ({
  productCount,
  sort,
  onSortChange,
}: ProductToolbarProps) => {
  return (
    <div className="mt-10 px-2 mb-3 border-b flex items-center justify-between">
      <span className="text-sm text-gray-500">{productCount} Products</span>
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Sort by</span>
        <Select
          value={sort}
          onValueChange={(value) => {
            if (value) {
              onSortChange(value);
            }
          }}
        >
          <SelectTrigger className="w-40 border-0 shadow-none focus:ring-0">
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            {sortItems.map(({ title, value }) => (
              <SelectItem key={value} value={value}>
                {title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
