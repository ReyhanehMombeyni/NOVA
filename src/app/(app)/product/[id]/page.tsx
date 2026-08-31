import Image from "next/image";
import { ProductProps, productsData } from "../../components/home-cmp";
import { ProductFooter, ProductHeader, StockAlert } from "../../components/products-cmp";

interface ParamsIdProps {
  params: Promise<{ id: string }>;
}

const LOW_STOCK_THRESHOLD = 50;

export default async function ProductDetail({ params }: ParamsIdProps) {
  const { id:idParams } = await params;
  const product = productsData.filter((product) => product.id === Number(idParams));
  const { id, title, price, rating, image }: ProductProps = product[0];
  return (
    <main>
      <section className="p-5">
        <p className="text-xs text-muted mb-2">
          FASCO &rsaquo; {title}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-15">
          <div className="w-full relative h-115 sm:min-h-full bg-gray-50">
            <Image
            src={image}
            alt={title}
            sizes="104px"
            fill
            priority
            className="object-contain lg:object-cover"
            />
        </div>
          <div className="space-y-3">
              <ProductHeader
                id={id}
                title={title}
                rating={rating}
                reviews={120}
              />
              <div className="text-lg lg:text-xl">
                  ${price}
              </div>

              <StockAlert
                currentStock={10}
                LOW_STOCK_THRESHOLD={LOW_STOCK_THRESHOLD}
              />
              
              <div>
                <p className="text-xs md:text-sm font-medium mb-2">
                  Size:{" "}M
                </p>
                <div className="w-6 h-6 bg-primary text-primary-foreground text-center rounded-sm">
                  M
                </div>
              </div>

              <div>
                <p className="text-xs md:text-sm font-medium mb-2">
                  Color:{" "}blue
                </p>
                <div className="w-5 h-5 bg-primary rounded-full">
                </div>
              </div>

              <ProductFooter />
            </div>
        </div>
      </section>
    </main>
  );
}
