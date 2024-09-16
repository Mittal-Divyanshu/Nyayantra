const express = require('express');
const path = require('path'); 
const app = express();
const port = 8080;
const mongoose = require('mongoose');
const Legal = require('../Backend/model/legal.js');
const Game = require('../Backend/model/game.js');
const Right = require('../Backend/model/rights.js');
const bodyParser = require('body-parser');
const session = require('express-session'); // Import express-session
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

// Set up session middleware
app.use(session({
    secret: 'your_secret_key', // Change this to a more secure secret
    resave: false,
    saveUninitialized: true
}));

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
app.get("/gamepage", (req, res) => {
    res.render('gamepage');
 });
let score = 0;

// Redirect /quiz to the first question (index 0)
app.get('/quiz', (req, res) => {
    req.session.score = 0; // Reset score when starting a new quiz session
    res.redirect('/quiz/0');
});

// Get the first question
app.get('/quiz/:index', async (req, res) => {
    const index = parseInt(req.params.index);
    const questions = await Game.find();
    
    if (index < questions.length) {
        res.render('quiz', { question: questions[index], index, total: questions.length });
    } else {
        // Ensure we get the total number of questions correctly here
        const totalQuestions = questions.length;
        res.render('gameResult', { score: req.session.score, totalQuestions });
    }
});


// Handle quiz answer submission
app.post('/quiz/:index/submit', async (req, res) => {
    const index = parseInt(req.params.index);
    const questions = await Game.find();
    const selectedAnswer = req.body.answer;
    const correctAnswer = questions[index].correctAnswer;

    // Update score if the answer is correct
    if (selectedAnswer === correctAnswer) {
        req.session.score = (req.session.score || 0) + 1;
    }

    // Redirect to the next question
    res.redirect(`/quiz/${index + 1}`);
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

app.get("/rights",(req,res)=>{
    res.render('rights');
});

app.get('/rights/:slug', async (req, res) => {
    const slug = req.params.slug;
    const rightData = await Right.findOne({ slug: slug });

    if (rightData) {
        res.render('rightsDetails', { right: rightData });
    } else {
        res.status(404).send('Category not found');
    }
});


app.get("/funfacts", (req, res) => {
    res.render('funfacts');
 });
app.listen(port, () => {
    console.log(`listening to the server at the port ${port}`);
});
