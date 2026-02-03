const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

const userRoutes = require("./routes/user.js");
const postRoutes = require("./routes/post.js");

app.use(session({ secret :"mysuperscreststring"}));

app.get("/reqcount", (req ,res ) => {
    res.send('you sent a request x times ');
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});