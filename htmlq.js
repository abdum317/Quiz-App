var h1 = document.querySelector("#head");
h1.innerHTML = "Hello " + localStorage.getItem("FirstName");

var question = document.querySelector("#question");
var option01 = document.querySelector("#option-01");
var option02 = document.querySelector("#option-02");
var option03 = document.querySelector("#option-03");
var radioButton = document.querySelectorAll("#input");

var quesArr = [];
quesArr.push(new Questions("What does HTML stand for?" , "Hyper Test Markup Language" , "Hyperlinks and Text Markup Language" , "Home Tool Markup Langauge"));
quesArr.push(new Questions("Choose the correct HTML element for the largest heading:" , "'<heading>'" , "<h1>" , "<h6>"));
quesArr.push(new Questions("What is the correct HTML element for inserting a line break?" , "<br>" , "<lb>" , "<break>"));
quesArr.push(new Questions("What is the correct HTML for adding a background color?" , "<body style = 'background-color:yellow';>" , "<body bg = 'yellow>" , "<background>yellow</background>"));
quesArr.push(new Questions("Who is the father of HTML?" , "Rasmus Lerdorf" , "< Tim Berners-Lee" , " Brendan Eich"));
console.log(quesArr);































function checkRadio() {

    // for(var i = 0; i<radioButton.length; i++){
    //     if(radioButton[i].checked){
    //         document.write(radioButton[i].value);
    //     }
    // }

    for(var i = 0; i<quesArr.length; i++){
    }
}





// var bb = {
//     question : "What does HTML stand for?",
//     o01:"hyper text markeup langaue",
//     o02:"hyper text markeup ",
//     o03:"hyper text markeup landfade"
// }

question.innerHTML = quesArr[0].question;
option01.innerHTML = quesArr[0].option1;
option02.innerHTML = quesArr[0].option2;
option03.innerHTML = quesArr[0].option3;



function Questions(question , opt01 , opt02 , opt03){
    this.question = question;
    this.option1 = opt01;
    this.option2 = opt02;
    this.option3 = opt03;
}