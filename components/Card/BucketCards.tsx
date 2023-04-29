
import BucketCard from "./BucketCard";

import { ScaleIcon } from "@heroicons/react/24/outline";

const cards = [
  { name: "Account balance", href: "#", icon: ScaleIcon, amount: "$30,659.45" },
  { name: "Account balance", href: "#", icon: ScaleIcon, amount: "$30,659.45" },
  { name: "Account balance", href: "#", icon: ScaleIcon, amount: "$30,659.45" },
  { name: "Account balance", href: "#", icon: ScaleIcon, amount: "$30,659.45" },
];

const BucketCards = () => {
  return (
    <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card) => (
        <BucketCard card={card} />
      ))}
    </div>
  );
}

export default BucketCards
