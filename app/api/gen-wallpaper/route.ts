import { getOpenAIClient } from "@/service/openai";

export async function POST(req :Request){

    const {description} = await req.json();
    /* console.log("description: ", description); */

    const client = getOpenAIClient();

    const result = await client.images.generate(
        {
            prompt: `generate a desktop wallpaper about : ${description}`,
            model : "dall-e-3",
            n : 1,
            response_format: "url",
            size : "1792x1024",
            style : "natural",
        }
    );

    console.log("generate wallpaper result: ", result);

    return Response.json(
        {
            code:0,
            msg:"ok",
            data:{
                img_description:description,
                img_url:result.data[0].url,
            }
        }
    );
}