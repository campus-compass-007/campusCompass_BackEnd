import type e = require("express")
import morgan from "morgan"
import dotenv from "dotenv"
import express from "express"
import session from "express-session"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import config from "./utils/config.js"
import initDB from "./db.js"
import locationsRoute from "./routes/locationRoute.js"
import adminRoute from "./routes/adminRoute.js"
import passport from "./middleware/passport.js"

dotenv.config()
await initDB()
const app = express()
app.use(morgan("dev"))
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(passport.initialize())
app.use("/locations", locationsRoute)
app.use("/admin", adminRoute)



app.get('/', (req: e.Request, res: e.Response) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`)
})
