const chalk = require("chalk");
var readlineSync = require('readline-sync');
var score = 0;
 

//program starts
var myname = readlineSync.question("Please enter your name \n\n");
console.log(chalk.yellow ('\nWELCOME '+ myname + ' on "How well you know Nikhil ?"\n\n'));

//play fucntion
function play(question, answer){
    var userAnswer = readlineSync.question(question) 

    if (userAnswer.toUpperCase() === answer.toUpperCase()) {
        console.log(chalk.green('Right answer'));
        score +=1;
    } else {
        console.log(chalk.red('Wrong answer!!!\n'));
        console.log(chalk.yellow('Correct answer is '+ answer));

    }
    console.log("=====>Your score after this round: " + score+"\n");
}

//questions
var questions = [
    {
        question: "Where is my birthplace ?\n",
        answer: "Assam"
    },
    {
        question: "Where do I live ?\n",
        answer: "Nagpur"
    },
    {
        question: "What is my age ?\n",
        answer: "23"
    },
    {
        question: "Which is my favourite color ?\n",
        answer: "Red"
    },
    {
        question: "What is my favourite fruit ?\n",
        answer: "Pineapple"
    },
];

//array length
var len = questions.length;

//for loop
for(var i = 0 ; i<len; i++){
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
}
console.log(chalk.bgGreenBright("Your Final Score is "+ score+ "..\n\n"));


//https://replit.com/@swdnikhil/How-well-you-know-me?v=1