import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/landing/Landing";
import Aboutus from "./components/aboutUs/aboutUs";
import GetStarted from "./components/getStarted/getStarted";
import Signup from "./components/signUp/signUp";
import PlanChoosing from "./components/planChoose/plan";
import ForgetPass from "./components/ForgetPass/forgetPass";
import DashBoard from "./components/userDashboard/dashBoard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/PlanChoosing" element={<PlanChoosing/>}/>
        <Route path="/forgetpassword" element={<ForgetPass/>}/>
        <Route path="/dashBoard" element={<DashBoard/>}/>
      </Routes>
    </Router>
  );
}
export default App;
