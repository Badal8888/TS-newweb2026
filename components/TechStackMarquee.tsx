import Image from "next/image";

const techStack = [
  { src: "/tech/c.png", alt: "Software Development" },
  { src: "/tech/c.png", alt: "C Programming" },
  { src: "/tech/python.png", alt: "Python Programming Language" },
  { src: "/tech/c.png", alt: "Backend Development" },
  { src: "/tech/python.png", alt: "Python Backend Development" },
  { src: "/tech/programmer.png", alt: "Software Development" },
  { src: "/tech/c.png", alt: "C Programming" },
  { src: "/tech/python.png", alt: "Python Programming Language" },
  { src: "/tech/c.png", alt: "Backend Development" },
  { src: "/tech/python.png", alt: "Python Backend Development" },
];

export default function TechStackMarquee() {
  return (
    <section className="py-10 bg-[#020617]">
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#020617] to-transparent z-10"></div>
        <div className="pointer-events-none absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#020617] to-transparent z-10"></div>

        {/* Track */}
        <div className="flex animate-marquee gap-16 items-center whitespace-nowrap">
          {[...techStack, ...techStack].map((tech, index) => (
            <Image
              key={index}
              src={tech.src}
              alt={tech.alt}
              width={90}
              height={50}
              className="logo-tech"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
