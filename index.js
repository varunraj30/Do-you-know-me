score=0
var readlineSync=require("readline-sync");
var intro=readlineSync.question("What is your name? ")
console.log("Hello "+intro)
console.log("Do You know Varun? Lets see how well you know Him.")
var confirm=readlineSync.question("Are you Ready? ")
if(confirm.toLowerCase()==="yes"){
  console.log("Let The Game Begin")
}
else
{
  console.log("Bye Then!")
}
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

var questions=[questionOne,questionTwo,questionThree]

for(var i=0;i<questions.length;i++){
  var currentQuestion=questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}


if(score==3)
{
  console.log("You know him very well")
}
else
{
  console.log("Thanks For participating in this quiz")
}