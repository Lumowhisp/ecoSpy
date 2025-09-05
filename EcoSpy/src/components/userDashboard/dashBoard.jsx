import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import WasteHistory from "./wasteHistory";

function DashBoard() {
  const [plan, setPlan] = useState("");
  const [ecopoints, setEcopoints] = useState(0);
  const [wastecollected, setWasteCollected] = useState(0);
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      try {
        if (user) {
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setPlan(docSnap.data().plan);
          } else {
            setPlan("No plan found");
          }
        } else {
          setPlan("Please login to see your plan");
        }
      } catch (err) {
        console.error("Error fetching plan:", err);
      }
      try {
        if (user) {
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setEcopoints(docSnap.data().ecopoints);
          } else {
            setEcopoints(0);
          }
        } else {
          setEcopoints(0);
        }
      } catch (err) {
        console.error("Fetching EcoPoints Problem:", err);
      }
      try {
        if (user) {
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setWasteCollected(docSnap.data().wastecollected);
          } else {
            setWasteCollected(0);
          }
        } else {
          setWasteCollected(0);
        }
      } catch (err) {
        console.error("Fetching Waste Collected Problem:", err);
      }
    });

    return () => unsubscribe();
  }, []);

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
      <div>
        <div className="flex justify-center">
        <div className="backdrop-blur-sm bg-white/30 p-6 rounded-xl w-[90vw] hover:backdrop-blur-md hover:bg-amber-500/30 transform transition duration-1000">
            {/* //wasteCollectionHistory */}
            <div className="flex justify-between mt-7 mx-20 mb-7">
              <div className="h-[40vh] w-[20vw] bg-green-100 rounded-xl pt-3 hover:scale-110 transform transition duration-500 hover:shadow-2xl hover:shadow-green-900">
                <h2>
                  <strong>
                    <span className="text-4xl text-green-900 pl-3">
                      Eco Warrior
                    </span>
                  </strong>
                </h2>
                <h3>
                  <span className="text-xl text-green-700 pl-3">Status</span>
                </h3>
                <div className="flex flex-col justify-center items-center h-52">
                  <div className="flex items-center justify-center bg-green-300 w-2/3 h-1/3 rounded-4xl pb-3 mb-7 ">
                    <p>
                      <span class="text-4xl text-green-900 font-extrabold">
                        {wastecollected ? wastecollected : "...Loading"}
                        <span>kg</span>
                      </span>
                    </p>
                    
                  </div>
                  <div className="font-delius text-xl">
                      <p>Waste Collected</p>
                    </div>
                </div>
              </div>
              {/* //EcoPoints */}
              <div className="h-[40vh] w-[20vw] bg-green-100 rounded-xl pt-3 hover:scale-110 transform transition duration-500 hover:shadow-2xl hover:shadow-green-900">
                <h2>
                  <strong>
                    <span className="text-4xl text-green-900 pl-3">
                      EcoPoints
                    </span>
                  </strong>
                </h2>
                <h3>
                  <span className="text-xl text-green-700 pl-3">Earned</span>
                </h3>
                <div className="flex flex-col justify-center items-center h-52">
                  <div className="flex items-center justify-center bg-green-300 w-2/3 h-1/3 rounded-4xl pb-2 mb-5 ">
                    <p>
                      <span class="text-4xl font-extrabold text-green-900">
                        {ecopoints ? ecopoints : "...Loading"}
                      </span>
                    </p>
                  </div>
                  <div className="font-delius text-xl">
                    <p>1 EcoPoint &#61; &#8377;0.5</p>
                  </div>
                </div>
              </div>
              {/* Plan Div */}
              <div className="h-[40vh] w-[20vw] bg-green-100 rounded-xl pt-3 hover:scale-110 transform transition duration-500 hover:shadow-2xl hover:shadow-green-900">
                <div>
                  <h2>
                    <strong>
                      <span className="text-4xl text-green-900 pl-3 ">
                        Current Plan
                      </span>
                    </strong>
                  </h2>
                  <h3>
                    <span className="text-xl text-green-700 pl-3">EcoWins</span>
                  </h3>
                </div>
                <div className="flex flex-col justify-center items-center h-52">
                  <div className="flex items-center justify-center bg-green-300 w-2/3 h-1/3 rounded-4xl pb-2 ">
                    <p>
                      <span class="text-4xl font-playfair-display">
                        {plan ? plan : "...Loading"}
                      </span>
                    </p>
                  </div>
                  <div className="flex space-x-2 mt-7">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className=" size-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                        />
                      </svg>
                    </div>
                    <div className="text-xl font-delius">
                      <p>Change Plan???</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-5 ml-18"><WasteHistory/></div>
        
      </div>
    </div>
  );
}
export default DashBoard;
