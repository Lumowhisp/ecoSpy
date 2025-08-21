document.getElementById("signinBtn").addEventListener("click", Signin);
const userList = JSON.parse(localStorage.getItem("users")) || [];
function Signin() {
  const userEmail = document.getElementById("email").value;
  const userPass = document.getElementById("password").value;
  for (let i = 0; i < userList.length; i++) {
    if (
      userEmail === userList[i].userEmail &&
      userPass === userList[i].userPass
    ) {
      window.location.href = "../.html";
      return;
    }
  }
  document.getElementById("verText").innerHTML = "Invalid credentials";
}
