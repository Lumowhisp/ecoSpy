import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword,sendEmailVerification, updateProfile } from "firebase/auth";

function Signup() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [verPass, setVerPass] = useState("");
  const [message, setMessage] = useState("");

  const handleSignUp =async (e) => {e.preventDefault();
    if (userPass !== verPass) {
      setMessage("Password didn't match");
      return;
    }
    try{
      const userCredential=await createUserWithEmailAndPassword(auth,userEmail,userPass)
      const user=userCredential.user;
      await updateProfile(auth.currentUser, {
        displayName: userName,
      });
      await sendEmailVerification(user);
      setMessage("User Registered successfully ✅.Please Verify E-mail");
    } catch(error){
      setMessage(error.message);
    }
    // let userList = JSON.parse(localStorage.getItem("users")) || [];

    // if (!userName || !userPass || !userEmail || !verPass) {
    //   setMessage("Fields are required");
    //   return;
    // }

    

    // const exists = userList.find((user) => user.userEmail === userEmail);
    // if (exists) {
    //   setMessage("User already exists");
    //   return;
    // }

    // const user = { userName, userEmail, userPass };
    // userList.push(user);
    // localStorage.setItem("users", JSON.stringify(userList));
    // setMessage("User Registered successfully ✅");
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-b from-green-400 to bg-green-200 items-center justify-center">
      <div className="flex flex-col bg-green-500 space-y-5 rounded-2xl pl-5 sm:pl-7 pt-6">
        <h1 className="font-fjalla-one text-2xl sm:text-4xl">
          <span className="text-green-900">Hop In,</span> <br />
          <span className="text-green-700">Earn Green 💚💰</span>
        </h1>

        <div className="sm:pl-10 sm:pr-10">
          <div className="flex flex-col items-center justify-center space-y-3 bg-green-700 rounded-2xl py-6 mr-5 px-5">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="absolute left-1 top-1/2 transform -translate-y-1/2 w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              <input
                className="pl-6 bg-green-300 rounded-xl"
                type="text"
                placeholder="Name"
                required
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="absolute left-1 top-1/2 transform -translate-y-1/2 w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                />
              </svg>

              <input
                className="pl-6 bg-green-300 rounded-xl"
                type="email"
                placeholder="Email"
                required
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </div>
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="absolute left-1 top-1/2 transform -translate-y-1/2 w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
              <input
                className="pl-6 bg-green-300 rounded-xl"
                type="password"
                placeholder="Set Password"
                required
                value={userPass}
                onChange={(e) => setUserPass(e.target.value)}
              />
            </div>
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="absolute left-1 top-1/2 transform -translate-y-1/2 w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <input
                className="pl-6 bg-green-300 rounded-xl"
                type="password"
                placeholder="Verify Password"
                required
                value={verPass}
                onChange={(e) => setVerPass(e.target.value)}
              />
            </div>
          </div>
          <button
            onClick={handleSignUp}
            className="rounded-2xl px-5 py-2 mt-5 bg-green-900 shadow-lg sm:text-xl sm:px-9 sm:ml-12 text-amber-300 font-semibold hover:bg-amber-200 hover:text-green-800 duration-500"
          >
            SignUp
          </button>
        </div>

        <div className="flex flex-col justify-center items-center">
          <p className="font-semibold py-3 sm:py-3 sm:mr-8 text-green-950">
            Old User?{" "}
            <Link
              className="hover:underline hover:scale-125 transition duration-300"
              to="/get-started"
            >
              Sign In
            </Link>
          </p>
          <p className="font-sans mb-4 sm:text-xl text-gray-800">{message}</p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
