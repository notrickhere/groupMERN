const Item = require("../models/itemModel");

const mongoose = require("mongoose");

const fs = require("fs");

const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

mongoose.connection.once("open", () => {
  console.log("connected to mongodb -- importData.js");
});

const itemList = JSON.parse(fs.readFileSync(`${__dirname}/seed.json`, "utf-8"));

const deleteDatabase = async () => {
  try {
    await Item.deleteMany();
  } catch (error) {
    console.log(error);
  } finally {
    console.log("delete complete");
  }
};

const importData = async () => {
  try {
    await Item.create(itemList);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("input complete");
  }
};

if (process.argv[2] === "--delete") {
  deleteDatabase();
} else if (process.argv[2] === "--import") {
  importData();
}
