import express from "express"
import passport from "passport"
import lecturerController from "../controllers/lecturerController.ts"
const router = express.Router()

router.get("/", lecturerController.getAllLecturers);
router.get("/:id", lecturerController.getLecturerById);
router.post("/", passport.authenticate("jwt", { session: false }), lecturerController.addLecturer);
router.put("/:id", passport.authenticate("jwt", { session: false }), lecturerController.updateLecturer);
router.delete("/:id", passport.authenticate("jwt", { session: false }), lecturerController.deleteLecturer);

export default router;
