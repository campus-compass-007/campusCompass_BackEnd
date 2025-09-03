import mongoose from "mongoose";

const officeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    building: { type: mongoose.Schema.Types.ObjectId, ref: "Building", required: true },
    lecturers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Lecturer", required: true }]
}, { timestamps: true })
    
const Office = mongoose.model("Office", officeSchema);

export default Office;
