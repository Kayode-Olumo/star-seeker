import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import Home from "./pages/Home/Home";
import GateDetails from "./pages/GateDetails/GateDetails";
import CheapTravel from "./pages/CheapTravel/CheapTravel";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/starseeker/gate-details/:id"
            element={<GateDetails />}
          />
          <Route path="/starseeker/cheap-travel" element={<CheapTravel />} />
        </Routes>
      </Router>
      <ScrollToTop smooth />
    </>
  );
}

export default App;
