"use client";
import CallToAction from "./components/call-to-action";
import Hero from "./components/hero";
import Listings from "./components/listings";
import Reviews from "./components/reviews";

export default function Home() {
  return (
    <main>
      <div className="container">
        <Hero />
        <Listings />
        <Reviews />
        <CallToAction />
      </div>
    </main>
  );
}
