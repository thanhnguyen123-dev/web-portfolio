import Image from "next/image";
import { FloatingNav } from "./components/ui/NavBar";

export default function Home() {
  const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  return (
    <main className=" flex justify-center items-center flex-col  mx-auto sm:px-10 px-5 h-screen w-full dark:bg-black-100 bg-white">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <div className="flex flex-col items-center justify-center">
          <h1>hello</h1>
        </div>
      </div>
    </main>
  );
}
