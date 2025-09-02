import { Link } from "react-router-dom";

function PlanChoosing() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-green-300 text-green-600">
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
            <p className="text-green-800 font-semibold  text-5xl mt-9">
              Eco<span className="text-green-600">Spy</span>
            </p>
          </div>
          <div>
            <ul className="flex space-x-5 pr-9 text-green-900 text-lg">
              <li>About Us</li>
              <li>Logout</li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div className="flex-1">
        <hero>
          <div className="flex h-[70vh] justify-center items-center bg-green-500 mt-8 mx-20 rounded-4xl space-x-4">
            <div className="bg-green-200 rounded-2xl pl-3 pr-3 hover:scale-105 transform transition duration-400 hover:shadow-green-900 hover:shadow-xl">
              <h2 class="pt-4 pl-2">
                <span class="font-bold text-green-900 sm:text-3xl sm:pl-2">
                  Regular Plan
                </span>
                –
                <span class="font-semibold text-green-700 sm:text-2xl">
                  “Daily Eco Wins”
                </span>
              </h2>

              <ul className="list-disc pl-5 mt-4 space-y-1 text-lg">
                <li>
                  <span className="font-mplus-rounded">Pickup:</span>{" "}
                  <span className="font-playfair-display text-emerald-900">
                    Scheduled, routine
                  </span>
                </li>
                <li>
                  <span className="font-mplus-rounded">Track Waste: </span>
                  <span className="font-playfair-display text-emerald-900">
                    See contribution
                  </span>
                </li>
                <li>
                  <span className="font-mplus-rounded">Rewards: </span>
                  <span className="font-playfair-display text-emerald-900">
                    Recyclables → Instant cash
                  </span>
                </li>
                <li>
                  <span className="font-mplus-rounded">Impact:</span>
                  <span className="font-playfair-display text-emerald-900">
                    Eco-score rise
                  </span>
                </li>
                <li>
                  <span className="font-mplus-rounded">Easy:</span>
                  <span className="font-playfair-display text-emerald-900">
                    Set once, auto handled
                  </span>
                </li>
                <li>
                  <span className="font-mplus-rounded">Biogas Perks:</span>{" "}
                  <span className="font-playfair-display text-emerald-900">
                    Contribute & save
                  </span>{" "}
                </li>
              </ul>
              <div className="flex items-center justify-center">
                <a
                  href="/h"
                  type="button"
                  className="px-5 py-3 bg-green-700 text-gray-200 rounded mt-5 mb-5 hover:bg-green-500 hover:text-green-950 transform transition duration-1000"
                >
                  Claim Daily Wins
                </a>
              </div>
            </div>
            <div className="bg-green-200 rounded-2xl pr-8 pl-6 hover:scale-105 transform transition duration-400 hover:shadow-green-900 hover:shadow-xl">
              <h2 className="pt-4 pl-2">
                <span className="font-bold text-green-900 sm:text-3xl sm:pl-2">
                  Bulk Plan
                </span>
                &ndash;
                <span className="font-semibold text-green-700 sm:text-2xl">
                  “Mega Eco Flex”
                </span>
              </h2>
              <ul className="list-disc pl-5 text-lg mt-4 space-y-1">
                <li>
                  <span className="font-mplus-rounded text-green">
                    Flexible Pickup:
                  </span>{" "}
                  <span className="font-playfair-display text-emerald-900">
                    Choose time
                  </span>
                </li>
                <li>
                  <span className="font-mplus-rounded">Minimum Waste:</span>{" "}
                  <span className="font-playfair-display text-emerald-900">
                    Only big contributions
                  </span>
                </li>
                <li>
                  <span className="font-mplus-rounded">Rewards:</span>{" "}
                  <span className="font-playfair-display text-emerald-900">
                    Recyclables → Instant cash
                  </span>
                </li>
                <li>
                  <span className="font-mplus-rounded">Track & Flex:</span>{" "}
                  <span className="font-playfair-display text-emerald-900">
                    Eco-score grow
                  </span>
                </li>
                <li>
                  <span className="font-mplus-rounded">Hassle-Free:</span>{" "}
                  <span className="font-playfair-display text-emerald-900">
                    Company handles grind
                  </span>
                </li>
                <li>
                  <span className="font-mplus-rounded">Biogas Perks:</span>{" "}
                  <span className="font-playfair-display text-emerald-900">
                    Contribute & save
                  </span>
                </li>
              </ul>
              <div className="flex items-center justify-center">
                <a
                  href="/h"
                  type="button"
                  className="px-5 py-3 bg-green-700 text-gray-200 rounded mt-5 mb-5  hover:bg-green-500 hover:text-green-950 transform transition duration-1000"
                >
                  Unleash Mega Flex
                </a>
              </div>
            </div>
          </div>
        </hero>
      </div>
      <footer className="mt-auto flex items-center justify-center text-green-900 p-4">
        <p>&copy; 2025 EcoSpy. All rights reserved.</p>
      </footer>
    </div>
  );
}
export default PlanChoosing;
