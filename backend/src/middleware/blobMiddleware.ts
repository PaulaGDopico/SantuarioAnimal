import { put } from "@vercel/blob";
import { customAlphabet } from "nanoid";

export const runtime = "edge";
const nanoid = customAlphabet(
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    7
);

// export const uploadFile = async (filename:string, file:string) => {
//     const file = req.body || "";
//     const contentType = req.headers.get("content-type") || "text/plain";
//     const filename = `${nanoid()}.${contentType.split("/")[1]}`;
//     const { url } = await put(filename, file, {
//         contentType,
//         access: "public",
//     });
//     return Response.json(url);
// };
