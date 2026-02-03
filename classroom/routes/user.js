const express = require("express");
const router = express.Router();


//Index-route
router.get("/", (req , res) => {
    res.send("GET for users");

});

//Show Route
router.get("/:id", (req , res) => {
    res.send("GET for show users id");

});

//post-route
router.get("/", (req , res) => {
    res.send("POST for users");

});

//Delete-users
router.delete("/:id", (req , res) => {
    res.send("Delete for users id");

});

module.exports = router;