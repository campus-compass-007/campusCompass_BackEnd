import type e = require("express")
import morgan from "morgan"
import dotenv from "dotenv"
import express from "express"
import session from "express-session"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import config from "./utils/config.ts"
import initDB from "./db.ts"
import locationsRoute from "./routes/locationRoute.ts"
import buildingRoute from "./routes/buildingRoute.ts"
import lecturerRoute from "./routes/lecturerRoute.ts"
import officeRoute from "./routes/officeRoute.ts"
import adminRoute from "./routes/adminRoute.ts"
import passport from "./middleware/passport.ts"

const app = express()
app.use(morgan("dev"))
app.use(session({
  secret: process.env.SESSION_SECRET || 'default-secret-key',
  resave: false,
  saveUninitialized: false
}))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(passport.initialize())
app.use("/locations", locationsRoute)
app.use("/admin", adminRoute)
app.use("/buildings", buildingRoute)
app.use("/lecturers", lecturerRoute)
app.use("/offices", officeRoute)
export default app;
