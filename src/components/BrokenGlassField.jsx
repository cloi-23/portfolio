const defaultPieces = [
  {
    className: "left-[5%] top-8 h-20 w-28 rotate-[-18deg] animation-delay-0",
    shape: "glass-shard--wide",
    logo: "https://vuejs.org/logo.svg",
    image: null,
  },
  {
    className: "left-[19%] top-28 h-12 w-16 rotate-[20deg] animation-delay-700",
    shape: "glass-shard--wide",
    logo: "https://raw.githubusercontent.com/tailwindlabs/tailwindcss/master/.github/logo-light.svg",
    image: null,
  },
  {
    className: "left-[41%] top-7 h-24 w-16 rotate-[10deg] animation-delay-1400",
    shape: "glass-shard--blade",
    logo: "https://nestjs.com/img/logo-small.svg",
    image: null,
  },
  {
    className:
      "right-[24%] top-24 h-14 w-32 rotate-[-8deg] animation-delay-2100",
    shape: "glass-shard--splinter",
    logo: "https://ionicframework.com/img/meta/ionic-framework-og.png",
    image: null,
  },
  {
    className:
      "right-[7%] top-11 h-28 w-20 rotate-[16deg] animation-delay-2800",
    shape: "glass-shard--kite",
    logo: "https://www.jenkins.io/images/logos/jenkins/jenkins.svg",
    image: null,
  },
  {
    className:
      "left-[32%] top-44 h-20 w-24 rotate-[-19deg] animation-delay-3500",
    shape: "glass-shard--wide",
    logo: "https://assets.ubuntu.com/v1/29985a98-ubuntu-logo32.png",
    logoLabel: "UBUNTU",
    image: null,
  },
  {
    className:
      "left-[9%] top-[31rem] h-32 w-14 rotate-[24deg] animation-delay-1400",
    shape: "glass-shard--blade",
    image: null,
  },
  {
    className:
      "right-[13%] top-[34rem] h-16 w-28 rotate-[-20deg] animation-delay-700",
    shape: "glass-shard--splinter",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    logoLabel: "MONGODB",
    image: null,
  },
  {
    className:
      "left-[32%] top-[47rem] h-14 w-14 rotate-[45deg] animation-delay-2800",
    shape: "glass-shard--chip",
    image: null,
  },
  {
    className:
      "right-[35%] top-[51rem] h-24 w-12 rotate-[12deg] animation-delay-0",
    shape: "glass-shard--blade",
    image: null,
  },
  {
    className:
      "left-[4%] bottom-32 h-16 w-36 rotate-[-10deg] animation-delay-3500",
    shape: "glass-shard--wide",
    logo: "https://cdn.simpleicons.org/jsonwebtokens/white",
    logoLabel: "JWT",
    image: null,
  },
  {
    className:
      "right-[7%] bottom-20 h-28 w-16 rotate-[26deg] animation-delay-2100",
    shape: "glass-shard--kite",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    logoLabel: "DOCKER",
    image: null,
  },
  {
    className:
      "left-[48%] bottom-10 h-12 w-28 rotate-[-24deg] animation-delay-700",
    shape: "glass-shard--splinter",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    logoLabel: "FIREBASE",
    image: null,
  },
  {
    className:
      "right-[22%] top-[19rem] h-16 w-28 rotate-[14deg] animation-delay-1400",
    shape: "glass-shard--wide",
    logo: "https://nodejs.org/static/logos/nodejsLight.svg",
    logoLabel: "NODE.JS",
    image: null,
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
        >
          {piece.image && (
            <img
              className="glass-screenshot"
              src={`${process.env.PUBLIC_URL}${piece.image}`}
              alt=""
              aria-hidden="true"
            />
          )}
          {piece.logo && (
            <img
              className="glass-logo"
              src={piece.logo}
              alt=""
              aria-hidden="true"
            />
          )}
          {piece.logoLabel && (
            <span className="glass-logo-caption">{piece.logoLabel}</span>
          )}
        </span>
      ))}
    </div>
  );
}
