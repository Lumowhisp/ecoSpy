document.getElementById("submitBtn").addEventListener("click", signUp);

const userList = JSON.parse(localStorage.getItem("users")) || [];
function signUp() {
  const userName = document.getElementById("userName").value;
  const userEmail = document.getElementById("userEmail").value;
  const userPass = document.getElementById("userPass").value;
  const veruserPass = document.getElementById("verPass").value;

  if (userPass !== veruserPass) {
    document.getElementById("verText").innerHTML = "Password didn't match";
    return;
  }
  for (let i = 0; i < userList.length; i++) {
    if (userList[i].userEmail === userEmail) {
      document.getElementById("verText").innerHTML = "User Exist";
      return;
    }
  }
  const user = {
    userName: userName,
    userEmail: userEmail,
    userPass: userPass,
  };
  userList.push(user);
  document.getElementById("verText").innerHTML = "User Registered succesfully";
  console.log(userList);
  // save
  localStorage.setItem("users", JSON.stringify(userList));
}
