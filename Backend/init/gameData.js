const mongoose = require('mongoose');
const Quiz = require('../model/game'); // Assuming you have your Quiz model

const MONGO_URL = "mongodb://127.0.0.1:27017/constitution";

async function main() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
}

main();
const quizData = [
    {
        question: "What does the Constitution do?",
        options: ["Sets up the government", "Defines the law", "Establishes federalism"],
        correctAnswer: "Sets up the government"
    },
    {
        question: "How many amendments does the Constitution have?",
        options: ["10", "27", "33"],
        correctAnswer: "27"
    },
    {
        question: "Who is the 'Father of the Constitution'?",
        options: ["George Washington", "James Madison", "Alexander Hamilton"],
        correctAnswer: "James Madison"
    },
    {
        question: "Which amendment guarantees freedom of speech?",
        options: ["First Amendment", "Second Amendment", "Fourth Amendment"],
        correctAnswer: "First Amendment"
    },
    {
        question: "What is the supreme law of the land?",
        options: ["Federal laws", "The Constitution", "State laws"],
        correctAnswer: "The Constitution"
    },
    {
        question: "How many branches are there in the U.S. government?",
        options: ["2", "3", "4"],
        correctAnswer: "3"
    },
    {
        question: "Which branch of government is responsible for making laws?",
        options: ["Legislative", "Executive", "Judicial"],
        correctAnswer: "Legislative"
    },
    {
        question: "Who has the power to declare war?",
        options: ["The President", "The Supreme Court", "Congress"],
        correctAnswer: "Congress"
    },
    {
        question: "What does the Bill of Rights do?",
        options: ["Establishes government structure", "Lists individual freedoms", "Outlines economic policies"],
        correctAnswer: "Lists individual freedoms"
    },
    {
        question: "Which amendment abolished slavery?",
        options: ["13th Amendment", "14th Amendment", "15th Amendment"],
        correctAnswer: "13th Amendment"
    }
];

Quiz.insertMany(quizData)
    .then(() => {
        console.log("Data inserted");
        mongoose.connection.close();
    })
    .catch(err => {
        console.log(err);
    });
