import mongoose from "mongoose"
const {Schema, model} = mongoose

const locationSchema = new Schema({
    name: String,
    shortName: String,
    address: String,
    lat: Number,
    lng: Number,
    type: String,
    description: String,
    facilities: [String]
})

const Location = model("Location", locationSchema)

export default Location