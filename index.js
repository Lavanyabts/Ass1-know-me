var readlinesync = require("readline-sync");

var score = 0;

var highScores = [
  {
    name: "lavanya",
    score: 5,
  },
  {
    name: "anitha",
    score: 3,
  },
  {
    name: "Roshini",
    score: 5,
  },
  {
  name: "Gaayu",
    score: 3,
  }
  ]
var questions = [{
  question: "What is My Fav Food? ",
  answer: "parota and briyani",
}, {
  question: "Where Do I Live? ",
  answer: "Madurai",
}, {
  question: "My Fav Musicians? ",
  answer: "BTS",
}, {
  question: "My Fav Country? ",
  answer: "New York",
}, {
  question: "My Fav Color? ",
  answer: "lavender",
}];
function welcome() {
   
  var userName = readlinesync.question("what's your Name? ");
  console.log("welcome "+ userName + " to DO YOU KNOW lavanya?");
  }
  function play(question, answer) {
    var userAnswer = readlinesync.question(question);
    if (userAnswer.toUpperCase() === answer.toUpperCase()) {
      console.log("right!");
      score = score + 1;
    } else {
      console.log("wrong");
    }
    console.log("current score: ", score);
    console.log("--------")
  }

  function game() {
    for (var i=0; i<questions.length; i++)
    {
      var currentQuestion = questions[i];
      play(currentQuestion.question, currentQuestion.answer)
    }
  }
 function showScore() {
    console.log("YAY! you SCORED: ", score);
    console.log("check out the high scores, if you should be there ping me and i'll update it");
    highScores.map(score => console.log(score.name, " : " , score.score))
  }

  welcome();
  game();
  showScore();