"use client";
import { Wallpaper } from '@/types/wallpaper';
import { useEffect, useState } from 'react';



interface Props {
    wallpapers: Wallpaper[];
}


export default function({wallpapers}:Props) {

    return(
        <section className="max-w-6xl mx-auto">
            <div className="mx-auto w-full max-w-7xl px-2 py-4 md:px-4 md:py-1">
          <div className="mb-2 text-center md:mb-12 ">
            <h2 className="text-3xl font-bold md:text-5xl text-primary">全部壁纸</h2>
            <p className="mt-4 text-[#636262] sm:text-sm md:text-base">一共100条 由AI生成</p>
          </div>
          <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2 md:mb-8 md:grid-cols-3 md:gap-2 ">
            {wallpapers && wallpapers.map((wallpaper:Wallpaper,idx:number) => {
                return (
                    <><div className="mx-auto w-full max-w-md gap-4 rounded-md bg-[#f2f2f7] p-8 text-black sm:px-4 sm:py-8">
                        <div className="mb-3 flex w-full items-center justify-between">
                            <div className="flex items-center">
                                <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64772e4ec124557640300fd8_Column.png" alt="" className="mr-4 inline-block h-8 w-8 rounded-full" />
                                <h6 className="text-base font-bold">{wallpaper.created_user?.nickname}</h6>
                            </div>
                            <a href="#" className="inline-block max-w-full text-black">
                                <span>{wallpaper.img_size}</span>
                            </a>
                        </div>
                        <img src={wallpaper.img_url} alt="" className="inline-block h-60 w-full rounded-md object-cover" />
                        <div className="flex w-full flex-col items-start gap-5 p-0">
                            <div>{wallpaper.img_description}</div>
                            <div className="h-px w-full bg-[#c4c4c4]"></div>
                            <div className="flex">
                                <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/647e390253503e4d887918ea_Star%201.svg" alt="" className="mr-1.5 inline-block w-4 flex-none" />
                                <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/647e390253503e4d887918ea_Star%201.svg" alt="" className="mr-1.5 inline-block w-4 flex-none" />
                                <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/647e390253503e4d887918ea_Star%201.svg" alt="" className="mr-1.5 inline-block w-4 flex-none" />
                                <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/647e390253503e4d887918ea_Star%201.svg" alt="" className="mr-1.5 inline-block w-4 flex-none" />
                                <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/647e390253503e4d887918ea_Star%201.svg" alt="" className="mr-1.5 inline-block w-4 flex-none" />
                            </div>
                        </div>
                    </div></>
                );
            })}
          </div>
        </div>
        </section>
    );
}