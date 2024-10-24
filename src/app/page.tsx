import Hero from "./components/hero";
import Listings from "./components/listings";
import Search from "./components/search";

export default function Home() {
  return (
    <main>
      <div className="container">
        <Hero />
        <Search />
        <Listings />
      </div>
    </main>
  );
}
