import Location from "../models/location.js";
import initDB from "../db.js";
import { configDotenv } from "dotenv";


// //Future proofing for when we run this script on startup if the database is empty
// if (require.main === module) {
//   console.log("The script is being run directly");
//   configDotenv();
//   initDB();
// }
// else {
//     console.log("The script is being run by another script passing to it");
//     if (await Location.find().countDocuments() === 0) {
//         seedDatabase();
//     }
// }


configDotenv();
await initDB();
await seedDatabase().then(() => {
  process.exit(0);
});

async function seedDatabase() {
  await Location.deleteMany({});
  const locations = [{
  "name": "Faculty of Engineering",
  "shortName": "Engineering",
  "address": "North West University, Potchefstroom",
  "lat": -26.6906,
  "lng": 27.0933,
  "type": "academic",
  "description": "Engineering faculty building",
  "facilities": [
    "Computer Labs",
    "Lecture Halls",
    "Engineering Labs"
  ],
  "__v": 0
},
{
  "name": "Faculty of Natural and Agricultural Sciences",
  "shortName": "Nat & Agri Sciences",
  "address": "North West University, Potchefstroom",
  "lat": -26.6906,
  "lng": 27.0933,
  "type": "academic",
  "description": "Natural and Agricultural Sciences faculty",
  "facilities": [
    "Science Labs",
    "Lecture Halls",
    "Research Centers"
  ]
},
{
  "name": "Ferdinand Postma Library",
  "shortName": "Main Library",
  "address": "North West University, Potchefstroom",
  "lat": -26.6906,
  "lng": 27.0933,
  "type": "library",
  "description": "Main university library",
  "facilities": [
    "Study Areas",
    "Computer Lab",
    "Archives",
    "Group Study Rooms"
  ]
},
{
  "name": "Administration Building",
  "shortName": "Admin",
  "address": "North West University, Potchefstroom",
  "lat": -26.6906,
  "lng": 27.0933,
  "type": "administration",
  "description": "Main administration building",
  "facilities": [
    "Student Services",
    "Registrar",
    "Finance Office"
  ]
},
{
  "name": "Sports Complex",
  "shortName": "Sports",
  "address": "North West University, Potchefstroom",
  "lat": -26.6906,
  "lng": 27.0933,
  "type": "sports",
  "description": "Main sports and recreation complex",
  "facilities": [
    "Gymnasium",
    "Swimming Pool",
    "Sports Fields",
    "Fitness Center"
  ]
},
{
  "name": "Vergeet-My-Nie",
  "shortName": "VMN",
  "address": "North West University, Potchefstroom",
  "lat": -26.6906,
  "lng": 27.0933,
  "type": "residence",
  "description": "Student residence",
  "facilities": [
    "Dining Hall",
    "Study Areas",
    "Recreation Room"
  ]
},
{
  "name": "Heimat",
  "shortName": "Heimat",
  "address": "North West University, Potchefstroom",
  "lat": -26.6906,
  "lng": 27.0933,
  "type": "residence",
  "description": "Student residence",
  "facilities": [
    "Dining Hall",
    "Study Areas",
    "Recreation Room"
  ]
}

  ];
  await Location.insertMany(locations);
  console.log("Database seeded!");
}

export default seedDatabase;