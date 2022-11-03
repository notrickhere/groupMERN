// IMPORT EXPRESS IN ORDER TO CREATE ROUTERS
const express = require("express");

// IMPORT USER CONTROLLER
const usedItemController = require("../../controllers/api/usedItemController");

// Use express to create a router
const router = express.Router();

// Use the router to redirect to different controller depending on the method

router.route("/").get(usedItemController.getUsedItems);
router.route("/").post(usedItemController.createUsedItem);
router.route("/:id").get(usedItemController.getUsedItem);
// router.route("/:id").update(usedItemController.updateUsedItem);
router.route("/:id").delete(usedItemController.deleteUsedItem);

// EXPORT ROUTER TO BE USED IN OTHER PARTS OF OUR APPLICATION
module.exports = router;
