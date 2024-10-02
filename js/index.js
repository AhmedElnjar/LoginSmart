// ~ Html Elements
var emailLoginInput = document.querySelector("#emailLoginInput");
var passwordLoginInput = document.querySelector("#passwordLoginInput");
var loginBtn = document.querySelector("#loginBtn");
var alertMassage = document.querySelector("#alertMassage");

// ~ App Variables

var userContainer = [];
if (localStorage.getItem("usersdata") != null) {
  userContainer = JSON.parse(localStorage.getItem("usersdata"));
}

// ~ Functions

function login() {
  if (checkInputs() == true) {
    getAlertMessage("All Inputs Required", "red");
  } else {
    if (checkEmailPassword() == true) {
      //
      window.location.href = "home.html";
    } else {
      //
      getAlertMessage("Email Or Password Not Correct", "red");
    }
  }
}

loginBtn.addEventListener("click", login);

function checkEmailPassword() {
  for (var i = 0; i < userContainer.length; i++) {
    if (
      userContainer[i].email == emailLoginInput.value &&
      userContainer[i].password == passwordLoginInput.value
    ) {
      localStorage.setItem("userName", userContainer[i].userName);
      return true;
    }
  }
}

function getAlertMessage(text, color) {
  alertMassage.classList.replace("d-none", "d-block");
  alertMassage.innerHTML = text;
  alertMassage.style.color = color;
}

function checkInputs() {
  if (emailLoginInput.value == "" || passwordLoginInput.value == "") {
    return true;
  } else {
    return false;
  }
}
