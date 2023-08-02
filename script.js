let IDbutton = document.querySelector(".ID");
let MainPage = document.querySelector(".MainPage");
let IDpage = document.querySelector(".IDpage");
let LogInPage = document.querySelector(".log-in-page");
let PersonalMedical = document.querySelector(".name");
let enter = document.querySelector(".enter");
let error = document.querySelector(".error");
let Account = document.querySelector(".sign-in");
let AccountPage = document.querySelector(".AccountPage");
let AboutButton = document.querySelector(".abt");
let AboutPage = document.querySelector(".Aboutpage");
let DiseaseButton = document.querySelector(".myDisease");
let MyDiseasePage = document.querySelector(".MyDiseasePage");
var audio = new Audio("mario.mp3")


function googleTranslateElementInit() {
  new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
}


IDbutton.onclick = function() {
  MainPage.style.display = "none";
  IDpage.style.display = "block";
  LogInPage.style.display = "none";

  PersonalMedical.onclick = function() {
    MainPage.style.display = "block";
    IDpage.style.display = "none";
    AccountPage.style.display = "none";
  }
}

AboutButton.onclick = function() {
  MainPage.style.display = "none";
  AboutPage.style.display = "block";
  LogInPage.style.display = "none";
  MyDiseasePage.style.display="none";

  PersonalMedical.onclick = function() {
    MainPage.style.display = "block";
    AboutPage.style.display = "none";
    AccountPage.style.display = "none";
  }

}

DiseaseButton.onclick = function() {
  MainPage.style.display = "none";
  AboutPage.style.display = "none";
  LogInPage.style.display = "none";
  MyDiseasePage.style.display="block";

  PersonalMedical.onclick = function() {
    MainPage.style.display = "block";
    AboutPage.style.display = "none";
    AccountPage.style.display = "none";
    MyDiseasePage.style.display="none";
  }
}


enter.onclick = function() {
  userCheck()
};

var input = document.querySelector(".email");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    userCheck()
  }
});

var input = document.querySelector(".password");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    userCheck()
  }
});


function userCheck() {
  let email = document.querySelector(".email").value;
  let password = document.querySelector(".password").value;
  if (email === "mario25@yahoo.com" && password === "password") {
    MainPage.style.display = "block";
    LogInPage.style.display = "none";
    Account.innerHTML = "Your Account";
    audio.play()

    Account.onclick = function() {
      MainPage.style.display = "none";
      IDpage.style.display = "none";
      LogInPage.style.display = "none";
      AboutPage.style.display = "none";
      MyDiseasePage.style.display = "none";
      AccountPage.style.display = "block";
    }

    PersonalMedical.onclick = function() {
      MainPage.style.display = "block";
      IDpage.style.display = "none";
      AccountPage.style.display = "none";
       MyDiseasePage.style.display = "none";
    }

  }
  else {
    error.innerHTML = "Incorrect Email/Password"
  }
};