import express from "express"
import Location from "../models/location.js"
import passport from "passport";

const router = express.Router()

//Get all locations
router.get("/", (req: express.Request, res: express.Response) => {
    Location.find().then((locations) => {
        res.json(locations);
    }).catch((error) => {
        console.error("Error fetching locations:", error);
        res.status(500).json({ error: "Internal server error" });
    });
});

//Add Location-Requires Admin Authentication
router.post("/", passport.authenticate(["jwt","basic"], {session: false}) ,(req: express.Request, res: express.Response)=>{
    console.log(res.statusCode)
    if (res.statusCode == 400) {
        return res.status(400).json({ error: req.session });
    }
    Location.create(req.body).then((location) => {
        res.status(201).json(location);
    }).catch((error) => {
        console.error("Error creating location:", error);
        res.status(500).json({ error: "Internal server error" });
    });
})

export default router;