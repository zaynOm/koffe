export const data = [
  {
    id: 1,
    title: "Arabic Coffee",
    description:
      "A traditional Middle Eastern coffee made with finely ground coffee beans and cardamom, served in a small cup.",
    image: "/arabic-coffee.jpg",
    price: 3.5,
  },
  {
    id: 2,
    title: "Cappuccino",
    description:
      "A classic Italian coffee drink made with espresso, steamed milk, and a layer of foam on top.",
    image: "/cappuccino.jpg",
    price: 4.25,
  },
  {
    id: 3,
    title: "Espresso",
    description:
      "A strong and rich coffee made by forcing pressurized hot water through finely ground coffee beans.",
    image: "/espresso.jpg",
    price: 2.75,
  },
  {
    id: 4,
    title: "Espresso",
    description:
      "A strong and rich coffee made by forcing pressurized hot water through finely ground coffee beans.",
    image: "/espresso-2.jpg",
    price: 2.75,
  },
  {
    id: 5,
    title: "Iced Flat White",
    description:
      "A cold and creamy coffee drink made with espresso and steamed milk served over ice.",
    image: "/iced-flat-white.jpg",
    price: 4.5,
  },
  {
    id: 6,
    title: "Iced Latte",
    description:
      "A refreshing coffee drink made with espresso and steamed milk served over ice.",
    image: "/iced-latte.jpg",
    price: 4.0,
  },
  {
    id: 7,
    title: "Iced Matcha Tea",
    description:
      "A refreshing and caffeinated tea drink made with green tea and served over ice.",
    image: "/iced-match-tea.jpg",
    price: 3.25,
  },
  {
    id: 8,
    title: "Latte",
    description: "A classic coffee drink made with espresso and steamed milk.",
    image: "/latte.jpg",
    price: 4.0,
  },
  {
    id: 9,
    title: "Matcha",
    description:
      "A traditional Japanese green tea made from finely ground tea leaves.",
    image: "/matcha.jpg",
    price: 3.0,
  },
  {
    id: 10,
    title: "Matcha Latte",
    description: "A green tea latte made with matcha powder and steamed milk.",
    image: "/matcha-latte.jpg",
    price: 4.25,
  },
  {
    id: 11,
    title: "Moroccan Tea",
    description:
      "A traditional North African tea made with green tea leaves and spices.",
    image: "/moroccan-tea.png",
    price: 3.5,
  },
];

export type Coffee = (typeof data)[0];
