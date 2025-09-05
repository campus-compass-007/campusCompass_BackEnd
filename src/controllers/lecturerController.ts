import express from "express"
import Lecturer from "../models/lecturer.ts"

const addLecturer = async (req: express.Request, res: express.Response) => {
    try {
        const lecturer = await Lecturer.create(req.body);
        res.status(201).json(lecturer);
    } catch (error) {
        console.error("Error creating lecturer:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const getAllLecturers = async (req: express.Request, res: express.Response) => {
    try {
        const lecturer = await Lecturer.find()
        res.status(200).json(lecturer);
    } catch (error) {
        console.error("Error fetching lecturers:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const getLecturerById = async (req: express.Request, res: express.Response) => {
    try {
        const lecturer = await Lecturer.findById(req.params.id);
        if (!lecturer) {
            return res.status(404).json({ error: "Lecturer not found" });
        }
        res.status(200).json(lecturer);
    } catch (error) {
        console.error("Error fetching lecturer:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const updateLecturer = async (req: express.Request, res: express.Response) => {
    try {
        const lecturer = await Lecturer.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!lecturer) {
            return res.status(404).json({ error: "Lecturer not found" });
        }
        res.status(200).json(lecturer);
    } catch (error) {
        console.error("Error updating lecturer:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const deleteLecturer = async (req: express.Request, res: express.Response) => {
    try {
        const lecturer = await Lecturer.findByIdAndDelete(req.params.id);
        if (!lecturer) {
            return res.status(404).json({ error: "Lecturer not found" });
        }
        res.status(204).send();
    } catch (error) {
        console.error("Error deleting lecturer:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export default {
    addLecturer,
    getAllLecturers,
    getLecturerById,
    updateLecturer,
    deleteLecturer
}