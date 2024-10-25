import Image from "next/image";

export default function CallToAction() {
  return (
    <div className="bg-primary min-h-80 my-52 rounded-3xl flex justify-between lg:justify-evenly items-center p-4 md:p-10 text-gray-50">
      <Image
        src="/cup-icon.svg"
        alt="coffee cup icon"
        width={100}
        height={100}
        className="opacity-10 lg:w-[200px] hidden md:block"
      />
      <div className="w-1/3 p-4 text-center space-y-4 flex-1 xl:flex-none">
        <h3 className="capitalize font-display font-bold text-4xl">
          Discover our menu coffee lovers unite
        </h3>
        <p className="text-lg">
          Experience the rich, aromatic flavors of our carefully handcrafted
          coffee and become a part of our welcoming and vibrant community today.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="bg-background text-primary w-1/2 h-12 rounded-full">
            Order Now
          </button>
          <button className="w-1/2 h-12 border-2 rounded-full">Visit</button>
        </div>
      </div>
      <Image
        src="/bean-icon.svg"
        alt="coffee cup icon"
        width={100}
        height={100}
        className="opacity-15 lg:w-[200px] hidden md:block"
      />
    </div>
  );
}
