import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/landing/Landing";
import Aboutus from "./components/aboutUs/aboutUs";
import GetStarted from "./components/getStarted/getStarted";
import Signup from "./components/signUp/signUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/signin" element={<Signup />} />
      </Routes>
    </Router>
  );
}
export default App;
