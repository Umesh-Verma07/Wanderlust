const mongoose = require("mongoose");
const Data = require("./data.js");
const Listing = require("../models/listing.js")

main().then(()=>{
    console.log("connected to DB");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

const initDB = async () =>{
    await Listing.deleteMany({});
    Data.data = Data.data.map((obj) => ({...obj, owner: "6593d61d1eb6037bc1d97eb8"}));
    await Listing.insertMany(Data.data);
    console.log("Data was initialized");
}

initDB();