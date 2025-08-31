function Aboutus() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-green-400">
      <header>
        <nav className="flex items-center justify-between h-32">
          {/* logo */}
          <a href="/">
            <img
              className="max-h-32 w-auto mt-2 ml-10"
              src="media/logoecospyBackgroundRemoved.png"
              alt="Logo-EcoSpy"
            />
          </a>
          {/* menu */}
          <ul className="flex space-x-8 items-center mr-10">
            <li>
              <a
                className="text-2xl hover:text-green-600 hover:underline transition duration-400"
                href="/signin"
              >
                Log in
              </a>
            </li>
            <li>
              <a
                className="text-2xl hover:text-green-600 hover:underline transition duration-400"
                href="/get-started"
              >
                Sign up
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <article>
          <div className="flex flex-col justify-center">
            <h1 className="font-bold text-amber-700 text-6xl mt-7 px-6 md:px-60">
              Hey,
            </h1>
            <h1 className="font-semibold text-green-900 text-5xl mt-4 px-6 md:px-60">
              We&apos;re EcoSpy!
            </h1>
          </div>

          <div className="flex flex-col px-6 md:px-60 mt-10 text-2xl">
            <p className="text-2xl text-gray-800">
              Ever looked at your overflowing dustbin and thought,
              <span className="font-semibold">
                “Ye toh ambani banane ka raw material hai!”
              </span>
            </p>
            <p>
              Well, we did. And that&apos;s how <strong>EcoSpy</strong> was born
              — the squad that turns{" "}
              <span className="font-semibold">kachra into ka-ching </span>💸.
            </p>
            <p>
              We&apos;re not your boring{" "}
              <span className="text-lime-950 font-semibold">
                <em>“Swachh Bharat lecture”</em>
              </span>{" "}
              types. We&apos;re the{" "}
              <span className="font-semibold">
                “let&apos;s make waste pickup so easy that even your lazy
                roommate can do it” types.
              </span>
              <br />
              From <strong>daily smart pickups</strong> to{" "}
              <strong>cashback for trash</strong>, we make sure you don&apos;t
              just throw waste — you throw it{" "}
              <span className="font-semibold">like a boss.</span>
            </p>
          </div>

          {/* Right Now Section */}
          <div className="flex flex-col items-center">
            <div className="flex flex-col w-5xl bg-green-200 rounded-3xl px-6 mt-4 hover:bg-green-300 transition duration-1000">
              <h2 className="text-4xl font-semibold text-emerald-800 pt-3">
                Right now:
              </h2>
              <ul className="list-disc pl-6 pt-3 text-gray-800 text-2xl pb-3 font-mplus-rounded">
                <li>We pick up your waste daily.</li>
                <li>
                  We pay you according to the real market price of recyclables
                </li>
                <li>
                  We make you feel like you&apos;re investing… in the planet. 🌍
                </li>
              </ul>
            </div>

            {/* Coming Soon */}
            <div className="flex flex-col w-5xl bg-green-200 rounded-3xl px-6 mt-4 hover:bg-green-300 transition duration-1000">
              <h2 className="text-4xl font-semibold text-emerald-800 pt-3">
                Coming soon:
              </h2>
              <ul className="list-disc pl-6 pt-3 text-gray-800 text-2xl pb-3 font-mplus-rounded">
                <li>
                  <strong>AI Segregation Machine</strong> → Because humans
                  confuse wet waste with dry waste like they confuse “your” and
                  “you&apos;re”.
                </li>
                <li>
                  <strong>Biogas Power-Up</strong> → Your banana peels could
                  light someone&apos;s bulb. Literally.
                </li>
              </ul>
            </div>

            {/* Our Vibe */}
            <div className="flex flex-col w-5xl bg-green-200 rounded-3xl px-6 mt-4 hover:bg-green-300 transition duration-1000">
              <h2 className="text-4xl font-semibold text-emerald-800 pt-3">
                Our Vibe:
              </h2>
              <ul className="list-disc pl-6 pt-3 text-gray-800 text-2xl pb-3 font-mplus-rounded">
                <li>“Save the planet, get paid — why not both?”</li>
                <li>
                  Every pickup = EcoPoints = Rewards = You flexing in front of
                  your friends.
                </li>
                <li>Landfills ↓, Local energy ↑, Your pockets 💰.</li>
              </ul>
              <blockquote className="text-2xl text-gray-800 italic pb-3">
                💡 “One man&apos;s trash is another man&apos;s treasure” — we
                just made it official.
              </blockquote>
            </div>

            {/* Final Section */}
            <div className="flex flex-col max-w-5xl text-2xl rounded-3xl px-6 mt-4 py-4 text-emerald-800 hover:bg-green-300 hover:text-gray-800 transition duration-1000">
              <p>
                So yeah, <strong>EcoSpy</strong> is basically{" "}
                <strong>Zomato for your garbage</strong> —{" "}
                <span className="font-semibold">
                  <em>
                    order a pickup, sit back, earn rewards, save the planet.
                  </em>
                </span>
                Because adulting is hard… but throwing waste shouldn’t be.
              </p>
              <a
                href="#signup"
                className="flex justify-center items-center max-w-5xl mt-4 bg-green-700 text-white px-6 py-3 rounded hover:bg-green-200 hover:text-green-900 transition shadow-green-950"
              >
                Get Started
              </a>
            </div>
          </div>
        </article>
      </main>

      <footer className="flex items-center justify-center text-green-800 p-4 mt-auto">
        <p>&copy; 2025 EcoSpy. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Aboutus;
