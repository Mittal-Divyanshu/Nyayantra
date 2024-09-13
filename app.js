const express = require('express');
const path = require('path'); 
const app = express();
const port = 8080;
const mongoose = require('mongoose');
const Legal = require('../Backend/model/legal.js');
const bodyParser = require('body-parser');
const MONGO_URL = "mongodb://127.0.0.1:27017/constitution";

async function main() {
    await mongoose.connect(MONGO_URL);
}

main()
    .then(() => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

// Set the path for the views directory
app.set('views', path.join(__dirname, 'views'));

// Set EJS as the template engine
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
   res.render('main.ejs');
});

app.get("/dictionary", (req, res) => {
    res.render('dictionary.ejs');  // Render the EJS file
});

app.post('/dictionary/search', async (req, res) => {
    const searchTerm = req.body.term;
    const term = await Legal.findOne({ name: new RegExp('^' + searchTerm + '$', 'i') });

    if (term) {
        res.render('result', { Legal: term });
    } else {
        res.render('result', { Legal: null });
    }
});

app.get("/test", async (req, res) => {
    let sampleLegal = new Legal({
        name: "Rahul",
        meaning: "name",
        info: "hy",
    });

    await sampleLegal.save();
    console.log("sample saved");
    res.send("successful");
});

app.listen(port, () => {
    console.log(`listening to the server at the port ${port}`);
});