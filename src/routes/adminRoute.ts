import express from "express"
import adminController from "../controllers/adminController.ts"


const router = express.Router()

router.post("/register", adminController.register)
router.post("/login", adminController.login)
router.post("/refresh-token", adminController.refreshToken)

export default router;