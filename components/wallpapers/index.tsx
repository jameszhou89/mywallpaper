"use client";
import { Wallpaper } from '@/types/wallpaper';
import { useEffect, useState } from 'react';
import WallpaperList from './WallpaperList';

export default function() {
    const [wallpapers,setwallpapers] = useState<Wallpaper[] | null>(null);

    const fetchWallpapers = async function () {
        const result = await fetch('/api/get-wallpaper');
        const {data} = await result.json();

        if (data) {
            setwallpapers(data);
        }
        
    };

    useEffect(() => {
        fetchWallpapers();
    },[]);

    return(
        <section className="max-w-6xl mx-auto">
            <WallpaperList />
            <div className='flex items-center'>
                {wallpapers && wallpapers.map((v:any,idx:number) => {
                    return (
                    <div className='mx-4'>
                        <h2>{v.img_description}</h2>
                        <img src={v.img_url} alt="" />
                        <p>{v.img_size}</p>
                    </div>
                    );
                })}
            </div>
        </section>
    );
}