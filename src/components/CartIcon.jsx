import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

export default function CartIcon({ isHovered }) {
  return (
    <div className="relative w-[40px] h-[30px] overflow-hidden flex justify-center items-center">
      <motion.div
        animate={
          isHovered
            ? {
                x: [0, 40, -40, 0],
                opacity: [1, 0, 0, 1],
              }
            : { x: 0, opacity: 1 }
        }
        transition={{
          duration: 0.7,
          ease: "easeInOut",
        }}
      >
        <ShoppingCart size={30} />
      </motion.div>
    </div>
  );
}
