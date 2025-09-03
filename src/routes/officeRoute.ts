import express from "express"
import officeController from "../controllers/officeController.ts";
import passport from "passport";
const router = express.Router()

router.get("/", officeController.getAllOffices);
router.get("/:id", officeController.getOfficeById);
router.post("/", passport.authenticate("jwt", { session: false }), officeController.addOffice);
router.put("/:id", passport.authenticate("jwt", { session: false }), officeController.updateOffice);
router.delete("/:id", passport.authenticate("jwt", { session: false }), officeController.deleteOffice);

export default router;