import { BadgePercent } from "lucide-react";

export default function Hero() {
  return (
    <main className="flex justify-center items-center min-h-screen">
      <div className="pb-24 flex flex-col items-center text-center gap-10 max-w-5xl">
        <h1 className="font-bold text-6xl sm:text-7xl font-display">
          We deliver nothing but the finest coffee experience
        </h1>
        <button className="inline-flex items-center justify-center gap-2 bg-gradient-to-tr from-button-bg from-40% font-medium py-2 px-6 text-button-fg rounded-full">
          <BadgePercent />
          <span> 50% off on several items</span>
        </button>
      </div>
    </main>
  );
}
