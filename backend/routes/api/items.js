// IMPORT EXPRESS IN ORDER TO CREATE ROUTERS
const express = require("express");

// IMPORT USER CONTROLLER
const itemController = require("../../controllers/api/itemController");

// Use express to create a router
const router = express.Router();

// Use the router to redirect to different controller depending on the method
router.route("/").get(itemController.getItems);
router.route("/").post(itemController.createItem);
router.route("/category/:itemCategory").get(itemController.getCategory);
router.route("/:id").get(itemController.getItem);
// router.route("/:id").update(itemController.updateItem);
router.route("/:id").delete(itemController.deleteItem);

// EXPORT ROUTER TO BE USED IN OTHER PARTS OF OUR APPLICATION
module.exports = router;
