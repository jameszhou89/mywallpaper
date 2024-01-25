import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Wallpapers from "@/components/wallpapers";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Header />
      <Hero />
      <Wallpapers />
      <Footer />
    </div>
  );
}
