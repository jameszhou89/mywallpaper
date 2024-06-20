import { downloadAndUpload } from "@/lib/s3";
import { insertWallpaper } from "@/models/wallpaper";
import { getOpenAIClient } from "@/service/openai";
import { Wallpaper } from "@/types/wallpaper";
import { ImageGenerateParams } from "openai/resources/images.mjs";
import { auth, currentUser } from "@clerk/nextjs";
import {User} from "@/types/user"
import { insertUser } from "@/models/user";
import { saveUser } from "@/service/user";

export const maxDuration = 45;

export async function POST(req :Request){

    const {description} = await req.json();
    /* console.log("description: ", description); */

    // check user auth
    const user = await currentUser();
    if (!user || !user.emailAddresses || user.emailAddresses.length === 0) {
        return Response.json({
            code:-2,
            message:"user not login"
        })
      }

    // //saveuser;
    const user_email = user.emailAddresses[0].emailAddress;
    const nickname = user.firstName;
    const avatarUrl = user.imageUrl;
    const userInfo: User = {
    email: user_email,
    nickname: nickname || "",
    avatar_url: avatarUrl,
    };

    console.log("print the nickname: ", nickname);
    await saveUser(userInfo);
   
   //generate image;
    const client = getOpenAIClient();

    const llm_name = "dall-e-3";
    const img_size = "1024x1024";
    const llm_params:ImageGenerateParams = {
        prompt: `generate a desktop wallpaper about : ${description}`,
        model: llm_name,
        n: 1,
        quality: "standard",
        response_format: "url",
        size : img_size,
        style : "vivid",
    }

    const created_at = new Date().toISOString();

    const result = await client.images.generate(llm_params);

    console.log("generate wallpaper result: ", result);


    // 拿到生成的图片url，并存入aws s3
    const raw_image_url = result.data[0].url; // openai dall-e image url
    if(!raw_image_url){
        return Response.json(
            {
                code:-1,
                message:"generate wallpaper failed",
            }) 
    }

    const img_name = encodeURIComponent(description);

    const s3_img = await downloadAndUpload(
        raw_image_url,
        process.env.AWS_BUCKET || "mywallpaper-james",
        `wallpapers/${img_name}.png`

    )

    const img_url = s3_img.Location;

    console.log(img_url)

    // 把图片保存到数据库

    const wallpaper: Wallpaper = {
        user_email: user_email,
        img_description: description,
        img_size: img_size,
        img_url: img_url,
        llm_name: llm_name,
        llm_params: JSON.stringify(llm_params),
        created_at: created_at,
    };
    
    await insertWallpaper(wallpaper);
    


    return Response.json(
        {
            code:0,
            msg:"ok",
            created_at:created_at,
            data:wallpaper
        }
    );
}