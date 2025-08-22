import mongoose, { Model, Schema } from "mongoose";
import Location from "./models/location.js";

const initDB = () => {
    mongoose.connect(process.env.MONGO_URI, {dbName: "MapManage"}).then(() => {
        console.log("Database connected!");

    //     db.collection("Manage").find().toArray().then(result => {
    //         console.log(result);
    //     })
    // }).catch((error: MongoError) => {
    //     console.error("Database connection failed:", error);
    // })
})
}


export default initDB;