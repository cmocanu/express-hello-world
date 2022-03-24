const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.send("Hello there!"));
app.get("/1", (req, res) => res.send({test:"just a test bro!"}));
app.get("/2", (req, res) => res.send({test:"just a test bro 22!"}));
app.get("/3", (req, res) => res.send({test:"just a test bro 3!"}));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
