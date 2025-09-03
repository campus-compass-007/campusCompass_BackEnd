import express from "express"
import buildingController from "../controllers/buildingController.ts"
import passport from "passport";
const router = express.Router()


router.get("/", buildingController.getAllBuildings);
router.get("/:id", buildingController.getBuildingById);
router.post("/", passport.authenticate("jwt", { session: false }), buildingController.createBuilding);
router.put("/:id", passport.authenticate("jwt", { session: false }), buildingController.updateBuilding);
router.delete("/:id", passport.authenticate("jwt", { session: false }), buildingController.deleteBuilding);

export default router;
