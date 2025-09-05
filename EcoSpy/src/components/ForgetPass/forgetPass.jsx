import { Link } from "react-router-dom";
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";// Adjust the import path as per your firebase config file

function ForgetPass() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setError("Please enter your email address");
      return;
    }

    setLoading(true);
    setError("");
    setMessage("");

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent successfully! Check your inbox.");
      setEmail(""); // Clear the form
    } catch (error) {
      console.error("Error sending password reset email:", error);
      
      // Handle specific error cases
      switch (error.code) {
        case 'auth/user-not-found':
          setError("No account found with this email address");
          break;
        case 'auth/invalid-email':
          setError("Please enter a valid email address");
          break;
        case 'auth/too-many-requests':
          setError("Too many requests. Please try again later");
          break;
        default:
          setError("Failed to send reset email. Please try again");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-200 to-green-700">
      <header>
        <div className="flex justify-between items-center h-17 w-full">
          <div className="flex">
            <Link to="/">
              <img
                className="max-h-32 w-auto pl-4 pt-6"
                src="/media/logoecospyBackgroundRemoved.png"
                alt="Logo-Ecospy"
              />
            </Link>
            <p className="text-green-800 font-semibold text-5xl mt-9">
              Eco<span className="text-green-600">Spy</span>
            </p>
          </div>
          <div>
            <ul className="flex space-x-5 pr-9 text-green-900 text-lg">
              <li>About Us</li>
              <li>Home</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </header>
      
      <main>
        <div className="flex w-full h-[75vh]">
          <div className="w-2xl">
            <img className="" src="media/forpass.png" />
          </div>
          
          <div className="w-4/12">
            <div className="flex flex-col bg-green-200 mt-35 pt-5 pl-10 pb-5 rounded-2xl hover:scale-105 transform transition duration-500">
              <h1 className="space-y-4">
                <span className="text-6xl font-extrabold text-green-800">
                  Forgot
                </span>{" "}
                <br />{" "}
                <span className="text-5xl font-extrabold text-green-950">
                  Your Password???
                </span>
              </h1>
              
              {/* Success Message */}
              {message && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 mt-4 w-3/4">
                  <div className="flex">
                    <svg className="w-5 h-5 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{message}</span>
                  </div>
                </div>
              )}
              
              {/* Error Message */}
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 mt-4 w-3/4">
                  <div className="flex">
                    <svg className="w-5 h-5 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span>{error}</span>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleForgotPassword}>
                <div className="flex flex-col">
                  <div className="relative w-3/4 ml-0 mt-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 size-6 text-green-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                    <input
                      className="bg-green-50 rounded w-full pl-12 pr-4 py-3 text-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={loading}
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={loading}
                    className={`rounded w-3/4 mt-4 ml-0 py-3 font-semibold transition-colors ${
                      loading 
                        ? 'bg-gray-400 cursor-not-allowed text-gray-600' 
                        : 'bg-green-600 hover:bg-green-700 text-white'
                    }`}
                  >
                    {loading ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </div>
                    ) : (
                      'Send Reset Link'
                    )}
                  </button>
                  
                  <div className="mt-4">
                    <Link 
                      to="/get-started" 
                      className="text-green-700 hover:text-green-900 font-medium text-lg"
                    >
                      ← Back to Login
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ForgetPass;