import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <div className="container flex justify-between items-center h-16">
        <div>
          <Link href="/" className="font-display text-3xl font-bold">
            koffee
          </Link>
        </div>
        <menu className="space-x-4 font-medium hidden sm:block">
          <Link href="/Menu">Menu</Link>
          <Link href="/About">About</Link>
          <Link href="/Contact">Contact</Link>
        </menu>
        <button className="bg-gradient-to-tr from-button-bg from-40% font-medium py-2 px-6 text-button-fg rounded-full">
          Order Now
        </button>
      </div>
    </header>
  );
}
