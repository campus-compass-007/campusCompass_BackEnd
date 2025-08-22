import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/';
const SESSION_SECRET = process.env.SESSION_SECRET;
const SECRET = process.env.SECRET;

export default { PORT, MONGO_URI, SESSION_SECRET, SECRET };