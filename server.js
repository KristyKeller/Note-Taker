
const express = require('express');
const db = require("./db/db.json");
var path = require("path");
var fs = require("fs");

const app = express();
const PORT = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

currentID = notes.length;

// Data
// API Routes
require("./routes")


// GET /api/notes

app.get("/", function (req, res) {
    res.send("");
});

app.get("/api/notes", function (req, res) {
    return res.json(notes);
}
// get data somehow from db.json 
// return res.json(data);

// POST /api/notes
// Delete /api/notes/:id
// /api/notes/1


// HTML Routes


// GET /notes to get notes.html

// fs.writeFile(destination, db, function(Err) { }) 

// Save deleted version of notes with that note removed 

// get * to get index.html


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
// db.json to

