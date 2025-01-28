import { FloatingNav } from "./components/ui/NavBar";
import Hero from "./components/Hero";
import TechStackSection from "./components/TechStackSection";
import { WorldMap } from "./components/ui/WorldMap";

export default function Home() {
  const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects"},
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  return (
    <div className="w-full bg-gradient-to-t from-violet-800 via-violet-600 to-blue-400">
      <FloatingNav navItems={navItems} />
      
      {/* Map + Hero Container */}
      <div className="relative w-full h-screen"> {/* Add fixed height */}
        {/* WorldMap with lower z-index */}
        <div className="relative z-0 h-full">
          <WorldMap />
        </div>
        
        {/* Hero overlay */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <Hero />
        </div>
      </div>

      {/* Tech Stack Sections */}
      <div className="relative z-20 space-y-20 py-20"> {/* Add spacing */}
        <TechStackSection />
        <TechStackSection />
        <TechStackSection />
        <TechStackSection />
      </div>
    </div>
  )
}