"use client";

import Image from "next/image";
import { Coffee, data } from "../data/data";

function Card({ item }: { item: Coffee }) {
  return (
    <div className="space-y-4 px-4">
      <div className="h-72 relative overflow-clip rounded-2xl border-8 border-background drop-shadow-2xl">
        <Image
          src={item.image}
          alt={item.title}
          className="object-cover object-center rounded-xl"
          fill
        />
      </div>
      <div className="flex justify-between">
        <h3 className="font-display font-bold text-xl text-primary">
          {item.title}
        </h3>
        {/* TODO: generate a fake price  */}
        <span>${item.price}</span>
      </div>
      <p className="line-clamp-2">{item.description}</p>
    </div>
  );
}

export default function Listings() {
  return (
    <div className="py-24 grid grid-cols-3 gap-6">
      {data.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}
