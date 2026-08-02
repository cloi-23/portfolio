const defaultPieces = [
  {
    className: "left-[5%] top-8 h-20 w-28 rotate-[-18deg] animation-delay-0",
    shape: "glass-shard--wide",
  },
  {
    className: "left-[19%] top-28 h-12 w-16 rotate-[20deg] animation-delay-700",
    shape: "glass-shard--chip",
  },
  {
    className: "left-[41%] top-7 h-24 w-16 rotate-[10deg] animation-delay-1400",
    shape: "glass-shard--blade",
  },
  {
    className:
      "right-[24%] top-24 h-14 w-32 rotate-[-8deg] animation-delay-2100",
    shape: "glass-shard--splinter",
  },
  {
    className:
      "right-[7%] top-11 h-28 w-20 rotate-[16deg] animation-delay-2800",
    shape: "glass-shard--kite",
  },
  {
    className:
      "left-[61%] top-44 h-10 w-24 rotate-[-19deg] animation-delay-3500",
    shape: "glass-shard--wide",
  },
  {
    className:
      "left-[9%] top-[31rem] h-32 w-14 rotate-[24deg] animation-delay-1400",
    shape: "glass-shard--blade",
  },
  {
    className:
      "right-[13%] top-[34rem] h-16 w-28 rotate-[-20deg] animation-delay-700",
    shape: "glass-shard--splinter",
  },
  {
    className:
      "left-[32%] top-[47rem] h-14 w-14 rotate-[45deg] animation-delay-2800",
    shape: "glass-shard--chip",
  },
  {
    className:
      "right-[35%] top-[51rem] h-24 w-12 rotate-[12deg] animation-delay-0",
    shape: "glass-shard--blade",
  },
  {
    className:
      "left-[4%] bottom-32 h-16 w-36 rotate-[-10deg] animation-delay-3500",
    shape: "glass-shard--wide",
  },
  {
    className:
      "right-[7%] bottom-20 h-28 w-16 rotate-[26deg] animation-delay-2100",
    shape: "glass-shard--kite",
  },
  {
    className:
      "left-[48%] bottom-10 h-12 w-28 rotate-[-24deg] animation-delay-700",
    shape: "glass-shard--splinter",
  },
];

export default function BrokenGlassField({
  pieces = defaultPieces,
  className = "",
}) {
  return (
    <div
      className={`broken-glass-field absolute inset-0 ${className}`}
      aria-hidden="true"
    >
      {pieces.map((piece) => (
        <span
          key={`${piece.shape}-${piece.className}`}
          className={`glass-shard absolute border border-white/20 bg-white/[0.05] shadow-[0_18px_70px_rgba(158,226,255,0.14)] backdrop-blur-md ${piece.shape} ${piece.className}`}
        />
      ))}
    </div>
  );
}
