import express from "express"
import Building from "../models/building.ts"


const createBuilding = async (req: express.Request, res: express.Response) => { 
    try{
        const building = await Building.create(req.body);
        res.status(201).json(building);
    } catch (error) {
        console.error("Error creating building:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const getAllBuildings = async (req: express.Request, res: express.Response) => {
    try {
        const buildings = await Building.find();
        res.status(200).json(buildings);
    } catch (error) {
        console.error("Error fetching buildings:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const getBuildingById = async (req: express.Request, res: express.Response) => {
    try {
        const building = await Building.findById(req.params.id);
        if (!building) {
            return res.status(404).json({ error: "Building not found" });
        }
        res.status(200).json(building);
    } catch (error) {
        console.error("Error fetching building:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const updateBuilding = async (req: express.Request, res: express.Response) => {
    try {
        const building = await Building.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!building) {
            return res.status(404).json({ error: "Building not found" });
        }
        res.status(200).json(building);
    } catch (error) {
        console.error("Error updating building:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const deleteBuilding = async (req: express.Request, res: express.Response) => {
    try {
        const building = await Building.findByIdAndDelete(req.params.id);
        if (!building) {
            return res.status(404).json({ error: "Building not found" });
        }
        res.status(204).send();
    } catch (error) {
        console.error("Error deleting building:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}


export default {
    createBuilding,
    getAllBuildings,
    getBuildingById,
    updateBuilding,
    deleteBuilding
}