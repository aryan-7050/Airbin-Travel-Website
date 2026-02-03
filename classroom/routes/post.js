const express = require("express");
const router = express.Router();
//Posts
//Index
router.get("/", (req , res) => {
    res.send("GET for posts");

});

//Show 
router.get("/:id", (req , res) => {
    res.send("GET for show posts id");

});

//post
router.get("/", (req , res) => {
    res.send("POST for posts");

});

//Delete-
router.delete("/:id", (req , res) => {
    res.send("Delete for posts id");

});

module.exports = router;
