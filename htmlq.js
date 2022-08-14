var h1 = document.querySelector("#head");
h1.innerHTML = "Hello " + localStorage.getItem("FirstName");



var question = document.querySelector("#question");
var option01 = document.querySelector("#option-01");
var option02 = document.querySelector("#option-02");
var option03 = document.querySelector("#option-03");
var submit = document.querySelector("button");
var answers = document.querySelectorAll(".input");


var quesArr = [];

quesArr.push(new Questions("What does HTML stand for?", "Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Langauge", "answer-01"));
quesArr.push(new Questions("Choose the correct HTML element for the largest heading:", "< heading >", "< h1 >", "< h6 >", "answer-02"));
quesArr.push(new Questions("What is the correct HTML element for inserting a line break?", "< br >", "< lb >", "< break >", "answer-01"));
quesArr.push(new Questions("What is the correct HTML for adding a background color?", "< body style = 'background-color:yellow'; >", "< body bg = 'yellow >", "< background >yellow</ background >", "answer-01"));
quesArr.push(new Questions("Who is the father of HTML?", "Rasmus Lerdorf", "Tim Berners-Lee", " Brendan Eich", "answer-02"));


function Questions(question, opt01, opt02, opt03, answer) {
    this.question = question;
    this.option1 = opt01;
    this.option2 = opt02;
    this.option3 = opt03;
    this.ans = answer;
}
var totalQuestion = 0;
var score = 0;
var loadQuestion = function (){
    question.innerHTML = quesArr[totalQuestion].question;
    option01.innerHTML = quesArr[totalQuestion].option1;
    option02.innerHTML = quesArr[totalQuestion].option2;
    option03.innerHTML = quesArr[totalQuestion].option3;

}
loadQuestion();

var getCheckedAnswer = function(){
    var answer;
    answers.forEach(function (curAnsElem) {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }

    })
    return answer;

};

submit.addEventListener('click' , function(){
    var checkedAnswer = getCheckedAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quesArr[totalQuestion].ans){
        score++ ;
    };
    totalQuestion++ ;
    if(totalQuestion < quesArr.length){
        loadQuestion();
    }else{
        console.log(score + "/" + totalQuestion);
        window.location = "result.html";
    }
});

