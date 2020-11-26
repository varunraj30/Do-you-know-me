score=0
var readlineSync=require("readline-sync");
var intro=readlineSync.question("What is your name? ")
console.log("Hello "+intro)
console.log("Do You know Varun? Lets see how well you know Him.")
var confirm=readlineSync.question("Are you Ready? ")
if(confirm.toLowerCase()==="yes"){
  console.log("Let The Game Begin")
  function play(question,answer)
{
  var aquestion=readlineSync.question(question)
  if(aquestion.toLowerCase()===answer.toLowerCase()){
    console.log("You are right")
    score+=1
    console.log("Score is "+ score)
    }
    else{
      console.log("You are wrong")
      console.log("Score is "+ score)
    }
}

var questionOne={
  question: "Where Do Varun Live? ",
  answer: "Hyderabad"
}
var questionTwo={
  question: "Varun's Favourite Game? ",
  answer: "League of Legends"
}
var questionThree={
  question: "What is Varun's Favourite Food? ",
  answer: "Biryani" 
}
var questionFour={
  question: "What is Varun's Favourite Browser? ",
  answer: "Opera GX" 
}
var questionFive={
  question: "What is Varun's Favourite Movie? ",
  answer: "The Matrix" 
}
var questionSix={
  question: "What is Varun's Favourite Anime? ",
  answer: "Gintama" 
}

var questions=[questionOne,questionTwo,questionThree,questionFour,questionFive,questionSix]

for(var i=0;i<questions.length;i++){
  var currentQuestion=questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}


if(score==6)
{
  console.log("You know him very well")
}
if(score<=5) {
  console.log("Score is "+ score)
  console.log("Thanks For participating in this quiz")
}
}
else
{
  console.log("Bye Then!")
}
