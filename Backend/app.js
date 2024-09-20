const express = require('express');
const path = require('path');
const app = express();
const port = 8080;
const mongoose = require('mongoose');
const Legal = require('../Backend/model/legal.js');
const Game = require('../Backend/model/game.js');
const Right = require('../Backend/model/rights.js');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport=require("passport");
const LocalStrategy=require('passport-local');
const User=require('../Backend/model/user.js');
const flash=require('connect-flash');

const MONGO_URL = "mongodb://127.0.0.1:27017/constitution";

async function main() {
    await mongoose.connect(MONGO_URL);
}

main()
    .then(() => {
        console.log("Connected to DB");
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

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Set the path for the views directory
app.set('views', path.join(__dirname, 'views'));

// Set EJS as the template engine
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.locals.success_messages = req.flash('success');
    res.locals.danger_messages = req.flash('error');
    next();
});
function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next(); // User is authenticated, proceed to the next middleware
    }
    req.flash('error', 'You need to log in first.');
    res.redirect('/'); // Redirect to login page if not authenticated
}


app.get("/", (req, res) => {
    res.render('main.ejs');
});
app.get("/signup",(req,res)=>{
    res.render('signup');
})
app.post('/signup', async (req, res) => {
    let { username, email, password } = req.body;
    let newUser = new User({ email, username });
    try {
        const registeredUser = await User.register(newUser, password);
        req.flash('success', 'Welcome to the application!');
        res.redirect('/');
    } catch (error) {
        req.flash('error', 'Something went wrong. Please try again.');
        res.redirect('/signup');
    }
});

// app.get("/demouser",async(req,res)=>{
//     let fakeUser=new User({
//         email:"st@gmail.com",
//         username:"del",
//     });
//      let registeredUser=await User.register(fakeUser,"helloworld");
//      res.send(registeredUser);
// })
app.get("/login",(req,res)=>{
    res.render('login');
});
app.post("/login", passport.authenticate("local",{failureRedirect:'/login',failureFlash:true}), async(req,res)=>{
    req.flash('success',"Welcome back","You are logged in");
    res.redirect("/");
});


app.get("/dictionary", (req, res) => {
    res.render('dictionary.ejs');
});
app.get('/logout', (req, res) => {
    req.logout((err) => { // Ensure this callback handles errors or completes the logout
        if (err) {
            return next(err); // Pass the error to Express
        }
        req.flash('error', 'You are logged out'); // Set flash message
        res.redirect('/'); // Redirect to home page
    });
});



app.post('/dictionary/search', isAuthenticated,async (req, res) => {
   
    const searchTerm = req.body.term;
    const term = await Legal.findOne({ name: new RegExp('^' + searchTerm + '$', 'i') });

    if (term) {
        res.render('result', { Legal: term });
    } else {
        res.render('result', { Legal: null });
    }
});

// Selection page
app.get('/gamepage', (req, res) => {
    res.render('gamepage');
});

let score = 0;

// Redirect /quiz to the first question (index 0)
app.get('/quiz', isAuthenticated, async(req, res) => {
    req.session.score = 0; // Reset score when starting a new quiz session
    res.redirect('/quiz/0');
});

// Get the first question
app.get('/quiz/:index',isAuthenticated, async (req, res) => {
    const index = parseInt(req.params.index);
    const questions = await Game.find();
    
    if (index < questions.length) {
        res.render('quiz', { question: questions[index], index, total: questions.length });
    } else {
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

    if (selectedAnswer === correctAnswer) {
        req.session.score = (req.session.score || 0) + 1;
    }

    res.redirect(`/quiz/${index + 1}`);
});

app.get('/rights',  isAuthenticated,async(req, res) => {
    res.render('rights');
});

// Route to get rights data
app.get('/rights/:slug', async (req, res) => {
    const slug = req.params.slug;
    const rightData = await Right.findOne({ slug: slug });

    if (rightData) {
        res.render('rightsDetails', { right: rightData });
    } else {
        res.status(404).send('Category not found');
    }
});
app.get("/funfacts",isAuthenticated,async(req,res)=>{
    res.render('funfacts');
})
app.get("/chatBot",(req,res)=>{
    res.render('chatBot');
})
app.get("/test", async (req, res) => {
    let sampleLegal = new Legal({
        name: "Rahul",
        meaning: "name",
        info: "hy",
    });

    await sampleLegal.save();
    console.log("Sample saved");
    res.send("Successful");
});

app.listen(port, () => {
    console.log(`Listening to the server at port ${port}`);
});