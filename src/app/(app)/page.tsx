import { CollectionBanner } from "@/components/shared";
import { Header, CategoriesSection, Arrivals } from "./components/home-cmp";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 items-center">
      <Header />
      <CategoriesSection />
      <Arrivals />
      <CollectionBanner />
    </main>
  );
}
