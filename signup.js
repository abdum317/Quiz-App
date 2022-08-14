var heading02 = document.querySelector("#h2");
var firstName = document.querySelector("#firstname");
var lastName = document.querySelector("#lastname")
var emaill = document.querySelector("#email");
var password = document.querySelector("#password");
function local(){
   var mail01 = localStorage.setItem("email" , emaill.value);
   var pass01 =  localStorage.setItem("password" , password.value);
   var firstN = localStorage.setItem("FirstName" , firstName.value);

   if(firstName.value === "" || lastName.value === ""){
    heading02.style.padding = "1rem";
    heading02.innerHTML ="PLEASE FILL THE FORM CORRECTLY" ;
    setTimeout(function clearr(){
        heading02.style.padding = "0rem";
        heading02.innerHTML = "";
    },2000)
   }
   else if(emaill.value === "" || password.value === ""){
    heading02.style.padding = "1rem";
    heading02.innerHTML ="PLEASE FILL THE FORM CORRECTLY" ;
    setTimeout(function clearr(){
        heading02.style.padding = "0rem";
        heading02.innerHTML = "";
    },2000)
   }
   else{
    window.location = "index.html";
   }

}