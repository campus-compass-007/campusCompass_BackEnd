import express from "express"
import passport from "passport"
import Account from "../models/admin.js"
import helper from "../utils/helper.js"
import RefreshToken from "../models/refreshToken.js"

const router = express.Router()

//Register Route
router.post("/register", async (req: express.Request, res: express.Response) => {
    const { username, password } = req.body
    const passwordHash = await helper.hashPassword(password)
    const admin = new Account({ username, password: passwordHash })
    await admin.save()
    res.status(201).send("Admin registered successfully.")
})

//Login Route
router.post("/login", async (req: express.Request, res: express.Response) => {
    const {username, password} = req.body
    const admin = await Account.findOne({ username })
    if (!admin) {
        return res.status(401).send("Invalid username or password.")
    }
    const isMatch = await helper.comparePasswords(password, admin.password)
    if (!isMatch) {
        return res.status(401).send("Invalid username or password.")
    }
    const accessToken = helper.issueAccessToken({ id: admin._id })
    const refreshToken = await helper.createRefreshToken(admin._id)
    res.status(200).json({ accessToken, refreshToken })
})

router.post("/refresh-token", async (req: express.Request, res: express.Response) => {
    const {refreshToken: refreshTokenUUID} = req.body
    const refreshToken = await RefreshToken.findOne({ token: refreshTokenUUID }).populate("admin")

    if (!refreshToken) {
        return res.status(401).send("Invalid refresh token.")
    }

    const isExpired = helper.verifyRefreshTokenExpiration(refreshToken)
    if (isExpired) {
        await RefreshToken.findByIdAndDelete(refreshToken._id).exec()
        return res.status(401).send("Refresh token is expired.")
    }

    await RefreshToken.findByIdAndDelete(refreshToken._id).exec()
    const newAccessToken = helper.issueAccessToken({ id: refreshToken.admin._id })
    const newRefreshToken = await helper.createRefreshToken(refreshToken.admin._id)
    res.status(200).json({ accessToken: newAccessToken, refreshToken: newRefreshToken })
})

export default router;