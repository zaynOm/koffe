import CallToAction from "./components/call-to-action";
import Hero from "./components/hero";
import Listings from "./components/listings";
import Reviews from "./components/reviews";
import Search from "./components/search";

export default function Home() {
  return (
    <main>
      <div className="container">
        <Hero />
        <Search />
        <Listings />
        <Reviews />
        <CallToAction />
      </div>
    </main>
  );
}
