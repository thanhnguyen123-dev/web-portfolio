import Image from "next/image";
import { FloatingNav } from "./components/ui/NavBar";
import Hero from "./components/Hero";
import {AuroraBackground}  from "./components/ui/AuroraBackground";
import TechStackSection from "./components/TechStackSection";

export default function Home() {
  const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects"},
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  return (
    <div className="w-full">
      <AuroraBackground className="h-full">
        <FloatingNav navItems={navItems} />
        <div className="flex flex-col items-center justify-center p-40">
          <Hero />
          <TechStackSection />
        </div>
      </AuroraBackground>

    </div>
  )
}
