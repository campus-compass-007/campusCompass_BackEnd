import bcrypt from "bcrypt"
import jwt, { type Jwt } from "jsonwebtoken";
import config from "./config.js";
import { v4 } from "uuid";
import RefreshToken from "../models/refreshToken.js";


const saltRounds = 10;

async function hashPassword(password: String): Promise<String> {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}

async function comparePasswords(password: String, hashedPassword: String): Promise<Boolean> {
    return await bcrypt.compare(password, hashedPassword);
}

function issueAccessToken(payload){
    return jwt.sign(payload, config.SECRET, { expiresIn: '15m' });
}

async function createRefreshToken(adminId: String) {
    const token = v4();
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7); // Expires in 7 days

    const refreshToken = new RefreshToken({
        token,
        adminId,
        expiresAt
    });

    await refreshToken.save();
    return token;
}

function verifyRefreshTokenExpiration(token) {
    return token.expiryDate.getTime() < new Date().getTime();
}

export default { hashPassword, comparePasswords, issueAccessToken, createRefreshToken, verifyRefreshTokenExpiration };