// IMPORT JSON WEBTOKEN TO ASSIST WITH TOKEN
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const Item = require("./../../models/itemModel");

exports.getItems = async (req, res) => {
  try {
    const items = await Item.find({});
    res.status(200).json(items);
  } catch (error) {
    response.status(500).json({
      status: "error",
      error: error,
    });
  }
};

exports.getCategory = async (req, res) => {
  try {
    const { itemCategory } = req.params;
    console.log(itemCategory);
    const category = await Item.find({ category: itemCategory });
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({
      status: "error",
      error: error,
    });
  } finally {
    console.log(`returned categories`);
  }
};

exports.getItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({
      status: "error",
      error: error,
    });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
  } catch (error) {
    response.status(500).json({
      status: "error",
      error: error,
    });
  }
};

exports.createItem = async (request, response) => {
  try {
    const newItem = await Item.create({
      name: request.body.name, // ------------
      price: request.body.price,
      img: request.body.img,
      category: request.body.category,
      description: request.body.description,
    });

    response.status(200).json(newItem);
  } catch (error) {
    response.status(500).json({
      status: "error",
      error: error,
    });
  }
};
