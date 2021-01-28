import italianBackground from "../assets/pizzaBanner.jpg";
import indianBackground from "../assets/curryBanner.jpg";
import chineseBackground from "../assets/chineseBanner.jpg";

export default [
  {
    name: "Italian",
    background: italianBackground,
    restaurants: [
      { name: "Mellows", open: "9-1" },
      { name: "Pizza Island", open: "4-8" },
    ],
  },
  {
    name: "Indian",
    background: indianBackground,
    restaurants: [
      { name: "Curry Cottage", open: "9-1" },
      { name: "Polash", open: "4-8" },
    ],
  },
  {
    name: "Chinese",
    background: chineseBackground,
    restaurants: [
      { name: "Oriental House", open: "9-1" },
      { name: "Rickshaw", open: "4-8" },
    ],
  },
];
