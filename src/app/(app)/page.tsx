import { Header, CategoriesSection } from "./components/home-cmp";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 items-center">
      <Header />
      <CategoriesSection />
    </main>
  );
}
