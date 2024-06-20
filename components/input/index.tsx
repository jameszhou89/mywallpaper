"use client";
import {
    Dispatch,
    KeyboardEvent,
    SetStateAction,
    useContext,
    useEffect,
    useRef,
    useState,
  } from "react";
  
import { AppContext } from "@/contexts/AppContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Wallpaper } from "@/types/wallpaper";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { auth, currentUser } from "@clerk/nextjs";

interface Props {
    wallpapers: Wallpaper[];
    setWallpapers : Dispatch<SetStateAction<Wallpaper[]>>
}


export default function({setWallpapers}: Props) {
   
    const { user, fetchUserInfo } = useContext(AppContext);
    const [description, setDescription] = useState("");
    const [loading, setloading] = useState(false);
    const [wallpaper, setWallpaper] = useState<Wallpaper | null>(null);

    const router = useRouter();

    const genWallpapers = async function () {
    
        const uri = "/api/gen-wallpaper";
        const params = {
            description: description,
        };

        setloading(true);
        const result = await fetch(uri,
            {
                method: 'POST',
                body: JSON.stringify(params)
            }
        );
        setloading(false);
        console.log("result.status",result.status)

        if (result.status === 401) {
            toast.error("Please Sign In");
            alert("please sign in");
            console.log("please sign-in")
            router.push("/sign-in");
            return;
        }
        console.log("gen wallpaper result", result);

        if (result.ok) {
            const { code, message, data } = await result.json();
            if (code !== 0) {
              toast.error(message);
              return;
            }
            if (data && data.img_url) {
              //fetchUserInfo();
              setDescription("");
    
              const wallpaper: Wallpaper = data;
              setWallpaper(wallpaper);
              setWallpapers((wallpapers: Wallpaper[]) => [
                wallpaper,
                ...wallpapers,
              ]);
    
              toast.success("gen wallpaper ok");
              return;
            }
          }
        
    };

    const handleSubmit = async function() {
        console.log("current",description)
        if(!description){
            toast.error("invalid image description");
            alert("请输入壁纸描述");
            return;
        }
        
        
        //if (! user) {
            //console.log("1please sign-in")
            //alert("please sign in");
        //}

        await genWallpapers();
    }


    return (
        <div className="max-w-md p-12 mx-auto flex items-center">
            {/* 使用内联样式设置输入框宽度 */}
            <Input 
            type="text" 
            placeholder="Please enter the wallpaper you want." 
            value={description} 
            onChange={e => setDescription(e.target.value)}
            disabled={loading}
            style={{width: '2400px'}} />
            <Button className="ml-4" onClick={handleSubmit} disabled={loading} > 
            {loading ? "generating..." : "start to generate"}
            </Button>
        </div>
    )
}
