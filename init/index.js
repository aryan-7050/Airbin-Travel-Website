const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("Connected to DB");
    return initDB(); // Call the function after connection
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  try {
    await Listing.deleteMany({});
    
    // Adding the owner ID to every object
    initData.data = initData.data.map((obj) => ({ 
      ...obj, 
      owner: "6968605ccab178bc8638ac80" 
    }));

    await Listing.insertMany(initData.data);
    console.log("Data was initialized successfully");
  } catch (err) {
    console.log("Error initializing data:", err);
  }
};