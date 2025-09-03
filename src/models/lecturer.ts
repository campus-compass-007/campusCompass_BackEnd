import mongoose from "mongoose";


const lecturerSchema = new mongoose.Schema({
    name: String,
    title: String,
    department: { type: String, required: true },
    email: { type: String, required: true },
}, { timestamps: true })

const Lecturer = mongoose.model("Lecturer", lecturerSchema);

export default Lecturer;
