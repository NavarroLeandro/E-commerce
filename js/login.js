const loginForm = document.getElementById("loginForm");
const logoutBtn = document.getElementById("logout");
const welcomeDiv = document.getElementById("welcome");
const successMsg = document.createElement("div");
const successMsgContainer = document.getElementById("successMsgContainer");

successMsg.style.display = "none";
successMsg.textContent = "Sesión iniciada correctamente";
successMsg.classList.add("alert", "alert-success");
successMsgContainer.appendChild(successMsg);

function isLoggedIn() {
  const userData = JSON.parse(localStorage.getItem("user"));
  if (userData && userData.expires > Date.now()) {
    return true;
  }
  return false;
}

function showLoginForm() {
  loginForm.style.display = "block";
  welcomeDiv.style.display = "none";
}

function showWelcomeMsg() {
  loginForm.style.display = "none";
  welcomeDiv.style.display = "block";
}

if (isLoggedIn()) {
  showWelcomeMsg();
} else {
  showLoginForm();
}

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "admin@street.com" && password === "admin123") {
    const user = {
      email: email,
      expires: Date.now() + 5 * 60 * 1000,
    };
    localStorage.setItem("user", JSON.stringify(user));
    showSuccessMsg();
    setTimeout(() => {
      window.location.href = "/index.html";
    }, 3000);
  } else {
    alert("Email o contraseña incorrecta");
  }
});

function showSuccessMsg() {
  loginForm.style.display = "none";
  successMsg.style.display = "block";
}

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("user");
  showLoginForm();
  window.location.href = "/index.html";
});
