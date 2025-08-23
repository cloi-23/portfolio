import { useState, useEffect } from "react";

export default function Coin() {
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    // trigger flip once on mount
    setFlipping(true);

    // reset after animation ends (0.8s here)
    const timer = setTimeout(() => setFlipping(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex lg:pl-32">
      <div
        className="relative w-16 h-16 overflow-hidden"
        style={{ perspective: 600 }}
      >
        <div className={`coin3d ${flipping ? "coin3d--flip" : ""}`}>
          <img
            src={process.env.PUBLIC_URL + "/profile.png"}
            alt="Logo front"
            className="coin-face filter grayscale"
            draggable="false"
          />
          <img
            src={process.env.PUBLIC_URL + "/profile.png"}
            alt="Logo back"
            className="coin-face coin-face--back filter grayscale"
            draggable="false"
          />
        </div>
      </div>
      <span className="flex items-center pl-2 font-semibold text-3xl font-mono">
        Cloi
      </span>
    </div>
  );
}
