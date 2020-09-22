var express = require("express");
var path = require("path");
const { getMaxListeners } = require("process");

var app = express();
var port = 80;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// tabels available data;

var tables = [
    {
        tableNumber: 1,
        Name: "Blob",
        Email: "blobsblobs@gmail.com",
        Phone: 555 - 555 - 5555
    }
];

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"))
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "view.html"))
});

app.get("/reservation", function (req, res) {
    res.sendFile(path.join(__dirname, "resform.html"))
});

app.get("/api/tables", function (req, res) {
    return res.json(tables);
});

app.get("/api/tables/:table", function (req, res) {
    let chosen = req.params.character;

    console.log(chosen);
})
