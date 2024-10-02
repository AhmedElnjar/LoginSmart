// ~ Html Elements
var userNameInput = document.querySelector("#userNameInput");
var emailInput = document.querySelector("#emailInput");
var passwordInput = document.querySelector("#passwordInput");
var signUpBtn = document.querySelector("#signUpBtn");
var alertMassage = document.querySelector("#alertMassage");
// ~ App Variables
var userContainer = [];

if (localStorage.getItem("usersdata") != null) {
  userContainer = JSON.parse(localStorage.getItem("usersdata"));
}
// ~ Functions

function signUp() {
  var data = {
    userName: userNameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };

  if (checkInputs() == true) {
    getAlertMessage("All Inputs Required", "red");
  } else {
    if (checkEmail() == true) {
      getAlertMessage("Email Already Exists", "red");
    } else {
      userContainer.push(data);
      localStorage.setItem("usersdata", JSON.stringify(userContainer));
      clearForms();
      getAlertMessage("Sucess", "limegreen");
    }
  }
}

signUpBtn.addEventListener("click", signUp);

// ! Function مع  Event طريقه أخري لأستخدام
// signUpBtn.addEventListener("click", function () {
//   var data = {
//     username: userNameInput.value,
//     email: emailInput.value,
//     password: passwordInput.value,
//   };

//   userContainer.push(data);
//   localStorage.setItem("usersdata", JSON.stringify(userContainer));
// });

// ! SignUp كنت عاوز اعملها لأجل انها تمسح الداتا اول ما المستخدم يضغط
function clearForms() {
  userNameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
}

function getAlertMessage(text, color) {
  alertMassage.classList.replace("d-none", "d-block");
  alertMassage.innerHTML = text;
  alertMassage.style.color = color;
}

function checkInputs() {
  if (
    userNameInput.value == "" ||
    emailInput.value == "" ||
    passwordInput.value == ""
  ) {
    return true;
  } else {
    return false;
  }
}

function checkEmail() {
  for (var i = 0; i < userContainer.length; i++) {
    if (userContainer[i].email == emailInput.value) {
      return true;
    }
  }
}
