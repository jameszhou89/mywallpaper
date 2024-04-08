
import AWS from 'aws-sdk'
import { Readable } from 'stream'
import axios from 'axios'
import fs from 'fs'

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const s3 = new AWS.S3();

export async function downloadAndUpload(
    imageUrl: string, 
    bucketName: string,
    s3Key:string
    ) {
        try{

            // 下载openai生成的图片
            const response = await axios({
                method: 'GET',
                url: imageUrl,
                responseType: 'stream'
            });


            // 把下载的图片存储到自己的s3
            const uploadParams = {
                Bucket: bucketName,
                Key: s3Key,
                Body: response.data as Readable,
            }

            return s3.upload(uploadParams).promise();

        }catch(e){
            console.log("upload failde",e)
            throw e;
        }

}



export async function downloadImage(
    imageUrl:string,
    outputPath:string
){
    try{
        const response = await axios({
            method: 'GET',
            url: imageUrl,
            responseType: 'stream'
        });

        return new Promise((resolve,reject)=>{
            const writer = fs.createWriteStream(outputPath);
            response.data.pipe(writer);

            let error: Error | null = null;

            writer.on('error',(err)=>{
                error = err;
                writer.close();
                reject(err);
            });

            writer.on('close',()=>{
                if(!error){
                    resolve(true);
                }
            });
        });
    } catch(e){
        console.log("download failde",e)
        throw e;

    }
}
