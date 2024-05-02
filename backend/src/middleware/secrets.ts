import dotenv from "dotenv";
dotenv.config({ path: "../../.env" });

export const PORT = process.env.PORT;
export const JWT_SECRET = process.env.JWT_SECRET!;
export const MAIL_API_KEY = process.env.MAIL_API_KEY!;
export const MAIL_DOMAIN = process.env.MAIL_DOMAIN!;
