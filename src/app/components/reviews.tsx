import Image from "next/image";

const data = [
  {
    name: "John Doe",
    profile: "/reviewer-1.jpg",
    comment:
      "The coffee at this shop is absolutely amazing. It's rich, flavorful, and always brewed to perfection.",
  },
  {
    name: "Mark lou",
    profile: "/reviewer-2.jpg",
    comment:
      "I love the coffee served at this place, it's truly exceptional. It boasts a deep, robust flavor.",
  },
];

type ReviewProps = (typeof data)[0];

function ReviewCard({ item }: { item: ReviewProps }) {
  return (
    // TODO: add bg patterns
    <div className="bg-gray-300 rounded-3xl p-4 sm:p-10 flex flex-col justify-between gap-y-6">
      <p className="font-display text-2xl sm:text-4xl font-bold">
        ”{item.comment}
      </p>
      <div className="flex gap-6 items-center">
        <Image
          src={item.profile}
          alt={item.name}
          className="object-cover rounded-full h-16"
          width={64}
          height={64}
        />
        <div>
          <p className="font-bold text-gray-700 text-lg">{item.name}</p>
          <p className="text-lg">Coffee Enthusiast</p>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  return (
    <div className="flex flex-col md:flex-row gap-6 py-10">
      {data.map((item) => (
        <ReviewCard key={item.name} item={item} />
      ))}
    </div>
  );
}
