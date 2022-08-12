var heading02 = document.querySelector("#h2");
        var fileEmail = document.querySelector("#emaill");
        var filePass = document.querySelector("#passwordd");
        function quizz() {
            var email = localStorage.getItem("email");
            var password = localStorage.getItem("password");
            if (fileEmail.value === email && filePass.value === password) {
                // location.href = "http://127.0.0.1:5500/quiz.html"
                window.location = "quiz.html";
            }
            else{
                heading02.style.padding = "1rem";
            heading02.innerHTML ="YOUR EMAIL PASSWORD IS NOT CORRECT" ;
            setTimeout(function clearr(){
                heading02.style.padding = "0rem";
                heading02.innerHTML = "";
            },2000)
            }
        }