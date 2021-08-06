const express = require("express");
const cors = require("cors");
const ctrl = require("./controller.js")

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.


app.get("/api/fortune", ctrl.fortune);
app.get("/api/lotr", ctrl.lotr);
app.get("/api/cat/left", ctrl.catLeft);
app.get("/api/cat/right", ctrl.catRight);
app.post("/api/chaCompliment", ctrl.chaCompliment);



app.get("/api/compliment", ctrl.compliment);

app.listen(4000, () => console.log("Server running on 4000"));
