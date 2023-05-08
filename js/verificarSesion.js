function isLoggedIn() {
  const userData = JSON.parse(localStorage.getItem("user"));
  if (userData && userData.expires > Date.now()) {
    return true;
  }
  return false;
}
function hideItemIfNotLoggedIn() {
  const itemToHide = document.getElementById("itemToHide");
  if (!isLoggedIn()) {
    itemToHide.style.display = "none";
  } else {
    itemToHide.style.display = "block";
  }
}
