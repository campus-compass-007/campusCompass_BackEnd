import bcrypt from "bcrypt"
import jwt, { type Jwt } from "jsonwebtoken";
import config from "./config.ts";
import { v4 } from "uuid";
import RefreshToken from "../models/refreshToken.ts";


const saltRounds = 10;

async function hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}

async function comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
}

function issueAccessToken(payload: object): string {
    return jwt.sign(payload, config.SECRET as jwt.Secret, { expiresIn: '15m' });
}

async function createRefreshToken(adminId: string) {
    const token = v4();
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7); // Expires in 7 days
    console.log(token)
    console.log(expiresAt)
    console.log(adminId)

    const refreshToken = new RefreshToken({
        token,
        user: adminId,
        expiryDate: expiresAt
    });

    await refreshToken.save();
    return token;
}

function verifyRefreshTokenExpiration(token: InstanceType<typeof RefreshToken>): boolean {
    return token.expiryDate.getTime() < new Date().getTime();
}

export default { hashPassword, comparePasswords, issueAccessToken, createRefreshToken, verifyRefreshTokenExpiration };