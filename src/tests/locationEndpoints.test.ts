import request from "supertest";
import mongoose from "mongoose";
import server from "../index.ts";
import app from "../server.ts";
import {describe, it, expect, afterAll, beforeAll } from "@jest/globals";

beforeAll(done => {
    done();
})

afterAll(async () => {
    await mongoose.connection.close();
    server.close();
});

describe("Location API", () => {
    it("should return all locations", async () =>{
        const res = await request(app).get("/locations");
        expect(res.status).toBe(200);
        expect(res.body).toBeInstanceOf(Array);
    })
})


//To teams running these tests: Please replace the locationId with a valid ID from your database
describe("Location API", () => {
    it("should return location by ID", async () =>{
        const locationId = "68b236b9c19a1d5aece6f77d";
        const res = await request(app).get(`/locations/${locationId}`);
        expect(res.status).toBe(200);
        expect(res.body).toBeInstanceOf(Object);
        expect(res.body._id).toBe(locationId);
    })
})

describe("Location API", () => {
    it("should create a new location if logged in", async () =>{
        const newLocation = {
            name: "New Location",
            description: "A new location",
            lat: 123.456,
            lng: 78.910
        };
        const res = await request(app).post("/locations").send(newLocation);
        expect(res.status).toBe(201);
        expect(res.body).toBeInstanceOf(Object);
        expect(res.body.name).toBe(newLocation.name);
    })
})

describe("Location API", () => {
    it("should delete a location by ID", async () =>{
        const locationId = "68b236b9c19a1d5aece6f77d"; // Replace with a valid location ID
        const res = await request(app).delete(`/locations/${locationId}`);
        expect(res.status).toBe(204);
    })
})

describe("Location API", () => {
    it("should update a location by ID", async () =>{
        const locationId = "68b236b9c19a1d5aece6f77d"; // Replace with a valid location ID
        const updatedLocation = {
            name: "Updated Location",
            description: "An updated location",
            lat: 123.456,
            lng: 78.910
        };
        const res = await request(app).put(`/locations/${locationId}`).send(updatedLocation);
        expect(res.status).toBe(200);
        expect(res.body).toBeInstanceOf(Object);
        expect(res.body.name).toBe(updatedLocation.name);
    })
})
