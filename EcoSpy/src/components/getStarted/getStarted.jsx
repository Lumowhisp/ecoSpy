import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const GetStarted = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in successfully
        const user = userCredential.user;
        console.log("Signed in user:", user);
        navigate("/dashBoard"); // jaha redirect karna ho
      })
      .catch((error) => {
        setError(error.message); // error message show kar de
      });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-green-400 to bg-green-200">
      <header>
        <nav className="flex items-center justify-between h-32">
          {/* logo */}
          <a href="/">
            <img
              className="max-h-32 w-auto mt-2 ml-10"
              src="/media/logoecospyBackgroundRemoved.png"
              alt="Logo-Src"
            />
          </a>
          {/* menu */}
          <ul className="flex space-x-8 items-center mr-10">
            <li>
              <a
                className="text-2xl hover:text-green-600 hover:underline transition duration-700 shadow-2xl"
                href="/aboutus"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                className="text-2xl hover:text-green-600 hover:underline transition duration-400"
                href="/"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <div className="flex w-full justify-center items-center mt-10">
          <div className="flex w-full max-w-5xl bg-amber-500 justify-center items-center rounded-r-3xl rounded-l-3xl hover:scale-110 transform transition duration-500 shadow-2xl shadow-green-900">
            {/* left video */}
            <div className="bg-slate-400 w-1/2 h-full">
              <video
                className="w-full h-full object-cover rounded-l-3xl"
                autoPlay
                muted
                loop
                playsInline
              >
                <source
                  src="/media/Smart_Waste_Management_Reel_Creation.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* right form */}
            <div className="backdrop-blur-md bg-green-400/50 w-1/2 pt-10 pl-5 rounded-r-3xl">
              <h1 className="font-fjalla-one">
                <span className="text-green-900 text-5xl">Think Green,</span>
                <br />
                <span className="inline-block mt-3 text-green-700 text-4xl">
                  Sign In.
                </span>
              </h1>

              <div className="flex justify-center items-center max-w-5xl mr-0 sm:mr-4 mt-12 mb-6 py-5 rounded-3xl bg-green-600">
                <form
                  className="flex flex-col space-y-2 justify-center items-center"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSignin();
                  }}
                >
                  {/* Email */}
                  <div class="relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="absolute left-1 sm:left-3 top-1/2 transform -translate-y-1/2 w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-green-900"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                    <input
                      className="bg-green-200 py-2 px-4 pl-10 rounded-3xl border-0 focus:outline-none focus:ring-0"
                      type="email"
                      placeholder="E-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  {/* Password */}

                  <div class="relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="absolute left-1 sm:left-3 top-1/2 transform -translate-y-1/2 w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-green-900"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                      />
                    </svg>
                    <input
                      className="bg-green-200 py-2 px-4 pl-10 rounded-3xl border-0 focus:outline-none focus:ring-0"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  {/* Sign in */}
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-2xl bg-green-900 shadow-lg text-amber-300 font-semibold hover:bg-amber-600 hover:text-green-800 transition duration-500"
                  >
                    Sign In
                  </button>

                  {/* Forget password */}
                  <a
                    href="/forgetpassword"
                    className="px-6 py-2 rounded-2xl bg-amber-400 shadow-lg text-green-900 hover:scale-110 transition duration-300"
                  >
                    Forget Password
                  </a>

                  {/* Sign up link */}
                  <p className="font-semibold py-3 text-green-950">
                    New User?{" "}
                    <a
                      className="hover:underline hover:scale-125 transition duration-300"
                      href="/signup"
                    >
                      Sign Up
                    </a>
                  </p>

                  {error && <p className="text-red-600">{error}</p>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="flex items-center justify-center text-green-800 p-4 mt-auto">
        <p>&copy; 2025 EcoSpy. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GetStarted;
