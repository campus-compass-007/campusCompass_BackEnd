import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const adminSchema = new mongoose.Schema({
  username: String,
  password: String
});


const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
