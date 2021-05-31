const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 8000;
const requests = require("requests");
const eath = path.join(__dirname,"../templates/views");


const staticpath = path.join(__dirname, "../public");

app.use(express.static(staticpath));

app.set("view engine", "hbs");
app.set('views', eath);
app.get("/", (req, res) => {
    res.send("welcome bro");
})

app.get("/about", (req, res) => {
    res.render("about");
})

app.get("/weather", (req, res) => {
   res.render("weather");
})

app.get("*", (req, res) => {
    res.send("404 error page bro");
})

app.listen(port , () => {
    console.log("listening");

})