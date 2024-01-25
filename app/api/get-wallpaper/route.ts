import { Wallpaper } from "@/types/wallpaper";

export function GET(req :Request) {
  const wallpapers:Wallpaper[] = [{
    img_description: "spring in canada vancouver",
    img_url:  "https://oaidalleapiprodscus.blob.core.windows.net/private/org-AIJDr0WaCgqPVXkauVeYG8JV/user-nVkM70YdzZz814LNTRzmg7Yk/img-K8swiyT3AYhFYsyH906afsm6.png?st=2024-01-28T07%3A27%3A18Z&se=2024-01-28T09%3A27%3A18Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-01-28T01%3A25%3A49Z&ske=2024-01-29T01%3A25%3A49Z&sks=b&skv=2021-08-06&sig=6JMU%2BlKjqVRtOwxoHVHqJ0V03Z3uwp7bhgWu0Y8qBVs%3D",
    }, {
    img_description: "spring in canada toronto",
    img_url:  "https://oaidalleapiprodscus.blob.core.windows.net/private/org-AIJDr0WaCgqPVXkauVeYG8JV/user-nVkM70YdzZz814LNTRzmg7Yk/img-Hc563h2Uq6mgO82iUCsCWkjX.png?st=2024-01-28T07%3A27%3A49Z&se=2024-01-28T09%3A27%3A49Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-01-28T01%3A40%3A45Z&ske=2024-01-29T01%3A40%3A45Z&sks=b&skv=2021-08-06&sig=VQkzh5AqSVk8RNDi1el01j4x/uehBsAWH/OuZVZsAf4%3D",
    }, {
    img_description: "spring in canada halifax",
    img_url:  "https://oaidalleapiprodscus.blob.core.windows.net/private/org-AIJDr0WaCgqPVXkauVeYG8JV/user-nVkM70YdzZz814LNTRzmg7Yk/img-rcQnsiOsu1wsfaQ7FDaAeS7t.png?st=2024-01-28T07%3A28%3A21Z&se=2024-01-28T09%3A28%3A21Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-01-28T01%3A21%3A55Z&ske=2024-01-29T01%3A21%3A55Z&sks=b&skv=2021-08-06&sig=APN4iW5ZTm32qWeYVnqhCSelrRsgyPDyLylxXQDNtFY%3D",
    }, {
    img_description: "spring in canada windsor",
    img_url:  "https://oaidalleapiprodscus.blob.core.windows.net/private/org-AIJDr0WaCgqPVXkauVeYG8JV/user-nVkM70YdzZz814LNTRzmg7Yk/img-hZKqSfy9WblwO76e8K9JX9ZV.png?st=2024-01-28T07%3A28%3A51Z&se=2024-01-28T09%3A28%3A51Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-01-27T10%3A55%3A42Z&ske=2024-01-28T10%3A55%3A42Z&sks=b&skv=2021-08-06&sig=0zm/tWgO7x84XOhnDkGZEsF1BsVwmcKvu8o4DZAI3OU%3D",
    }
  ];
  
  return Response.json ({
    code:0, 
    message: 'get wallpaper list',
    data: wallpapers,
  });
}