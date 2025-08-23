import { motion } from "framer-motion";

export default function FancyText({ text, isHovered }) {
  const letters = text.split("");

  return (
    <span className="hidden lg:inline-block mx-1 text-[20px] font-semibold cursor-pointer">
      {letters.map((char, i) => (
        <motion.span
          key={i}
          animate={
            isHovered
              ? {
                  y: [0, -12, 0], // jump up then return
                  transition: {
                    delay: i * 0.05,
                    duration: 0.4,
                    ease: "easeInOut",
                  },
                }
              : { y: 0 } // reset when not hovered
          }
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}
