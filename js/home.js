var welcomeMassage = document.querySelector("#welcomeMassage");
var logOutBtn = document.querySelector("#logOutBtn");

if (localStorage.getItem("userName") != null) {
  welcomeMassage.innerHTML = "Welcome" + `${localStorage.getItem("userName")}`;
}

function logOut() {
  window.location.href = "index.html";
  localStorage.removeItem("userName");
}

logOutBtn.addEventListener("click", logOut);
