import express from "express"
import Office from "../models/office.ts"

const addOffice = async (req: express.Request, res: express.Response) => {
    try {
        const office = await Office.create(req.body);
        res.status(201).json(office);
    } catch (error) {
        console.error("Error creating office:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const getAllOffices = async (req: express.Request, res: express.Response) => {
    try {
        const offices = await Office.find();
        res.status(200).json(offices);
    } catch (error) {
        console.error("Error fetching offices:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const getOfficeById = async (req: express.Request, res: express.Response) => {
    try {
        const office = await Office.findById(req.params.id);
        if (!office) {
            return res.status(404).json({ error: "Office not found" });
        }
        res.status(200).json(office);
    } catch (error) {
        console.error("Error fetching office:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const updateOffice = async (req: express.Request, res: express.Response) => {
    try {
        const office = await Office.findByIdAndUpdate(req.params.id, req.body);
        if (!office) {
            return res.status(404).json({ error: "Office not found" });
        }
        res.status(200).json(office);
    } catch (error) {
        console.error("Error updating office:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const deleteOffice = async (req: express.Request, res: express.Response) => {
    try {
        const office = await Office.findByIdAndDelete(req.params.id);
        if (!office) {
            return res.status(404).json({ error: "Office not found" });
        }
        res.status(204).send();
    } catch (error) {
        console.error("Error deleting office:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export default {
    addOffice,
    getAllOffices,
    getOfficeById,
    updateOffice,
    deleteOffice
}