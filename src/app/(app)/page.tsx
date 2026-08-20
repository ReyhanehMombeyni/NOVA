import { BrandMarquee, Header } from "./components/home-cmp";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 items-center">
      <Header />
      <BrandMarquee />
    </main>
  );
}
