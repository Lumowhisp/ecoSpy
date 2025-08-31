import { Link } from "react-router-dom";
function Landing() {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-t from-green-600 text-green-900">
        <header>
          <nav className="flex items-center justify-between h-32">
            {/* logo */}
            <Link to="/">
              <img
                className="max-h-32 w-auto mt-2 ml-10"
                src="/media/logoecospyBackgroundRemoved.png"
                alt="Logo-Src"
              />
            </Link>
            {/* menu */}
            <ul className="flex space-x-8 items-center mr-10">
              <li>
                <Link
                  to="/aboutus"
                  className="text-2xl hover:text-green-600 hover:underline transition duration-700 shadow-2xl"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-2xl hover:text-green-600 hover:underline transition duration-400"
                >
                  Link
                </Link>
              </li>
              <li>
                <Link
                  to="/get-started"
                  className="text-2xl hover:text-green-600 hover:underline transition duration-400"
                >
                  Log in
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="text-2xl hover:text-green-600 hover:underline transition duration-400"
                >
                  Sign up
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="flex-1 flex flex-col items-center justify-center">
          <h1 className="text-6xl font-bold mb-4">
            EcoSpy: Smart Waste Management
          </h1>
          <p className="text-2xl mb-6">
            Collect, Recycle, and Earn! Transform your daily waste into rewards
            while helping the environment.
          </p>
          <Link
            to="/get-started"
            className="bg-green-700 text-white px-6 py-3 rounded hover:bg-green-200 hover:text-green-900 transition shadow-green-950"
          >
            Get Started
          </Link>
        </main>
        <footer className="flex items-center justify-center text-green-1000 p-4">
          <p>&copy; 2025 EcoSpy. All rights reserved.</p>
        </footer>
      </div>
    );
  }
  
  export default Landing;