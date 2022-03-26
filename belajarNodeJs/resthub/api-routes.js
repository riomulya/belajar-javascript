//api-router js

//import express routes
const express = require("express");
const router = express.Router();

//set default api response
router.get("/", (req, res) => {
  res.json({
    status: "api its working",
    message: "Welcome to resthub Backend App",
  });
});

//import contact controller
const contactController = require("./contactController");

//contact routes
router
  .route("./contacts")
  .get(contactController.index)
  .post(contactController.new);

router
  .route("./contacts/:contact_id")
  .get(contactController.view)
  .patch(contactController.update)
  .put(contactController.update)
  .delete(contactController.delete);

//export api routes
module.exports = router;
