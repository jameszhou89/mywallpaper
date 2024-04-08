"use client"
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Wallpapers from "@/components/wallpapers";
import Hero from "@/components/hero";
import Input from "@/components/input";
import { Wallpaper } from "@/types/wallpaper";
import { useEffect, useState } from "react";

export default function Home() {
  const [wallpapers,setWallpapers] = useState<Wallpaper[]>([]);

  const fetchWallpapers = async function () {
      const result = await fetch('/api/get-wallpaper');
      const {data} = await result.json();

      if (data) {
          setWallpapers(data);
      }
      
  };

  useEffect(() => {
      fetchWallpapers();
  },[]);


  return (
    <div className="w-screen h-screen">
      <Header />
      <Hero />
      <Input setWallpapers={setWallpapers} wallpapers={wallpapers} />
      <Wallpapers wallpapers={wallpapers} />
      <Footer />
    </div>
  );
  
}
