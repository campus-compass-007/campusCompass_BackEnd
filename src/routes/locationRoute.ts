import express from "express"
import locationController from "../controllers/locationController.ts"; 
import passport from "passport";

const router = express.Router()

//Add Location-Requires Admin Authentication
router.post("/", passport.authenticate(["jwt","basic"], {session: false}) ,locationController.addLocation)

//Get all locations
router.get("/", locationController.getAllLocations);

//Get location by ID
router.get("/:id", locationController.getLocationById);

//Update location
router.post("/:id", passport.authenticate(["jwt","basic"], {session: false}) ,locationController.updateLocation);

//Delete Location
router.delete('/:id', passport.authenticate(["jwt","basic"], {session: false}) ,locationController.deleteLocation);

export default router;