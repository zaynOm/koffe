"use client";

import Image from "next/image";
import { Coffee, data } from "../data/data";

function Card({ item }: { item: Coffee }) {
  return (
    <div className="space-y-6 px-4 ">
      <div className="h-72 relative overflow-clip rounded-3xl border-8 border-background drop-shadow-2xl">
        {/* TODO: add discount badge */}
        <Image
          src={item.image}
          alt={item.title}
          className="object-cover object-center rounded-2xl"
          fill
        />
      </div>
      <div className="px-4 space-y-4">
        <div className="flex justify-between">
          <h3 className="font-display font-bold text-xl text-primary">
            {item.title}
          </h3>
          <span className="font-medium text-lg">${item.price}</span>
        </div>
        <p className="line-clamp-2 text-gray-800">{item.description}</p>
      </div>
    </div>
  );
}

export default function Listings() {
  return (
    <div className="py-24 grid sm:grid-cols-2 gap-6 xl:grid-cols-3">
      {data.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}
