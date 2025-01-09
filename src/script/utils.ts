import jwt from "jsonwebtoken";

const password = process.env.VITE_PASSWORD!;
const secret = process.env.VITE_SECRET!;

export const create = () => jwt.sign({ password }, secret);
export const verify = (token: string) => jwt.verify(token, secret);