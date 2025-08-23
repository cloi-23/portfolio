import { useState } from "react";
import FancyText from "./FancyText";
import CartIcon from "./CartIcon";

export default function PurchaseButton({ darkMode }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      className="absolute flex right-24 lg:right-56 top-6 px-6 py-2 border-2 items-center gap-2"
      style={{
        borderColor: darkMode ? "#FAF7F6" : "#161616",
        borderRadius: "50px",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <FancyText text="Purchase" isHovered={hovered} />
      <CartIcon isHovered={hovered} />
    </button>
  );
}
