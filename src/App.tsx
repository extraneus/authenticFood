import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppBar from "./components/appBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PizzaCard from "./components/Pizzacard";
import PizzaData from "../public/PizzaData";
import HeaderSection from "./components/selectionHeader";
import Footerall from "./components/footerall";
import SignUp from "./components/signUp";
import Login from "./components/logIn";
import PizzaSection from "./components/PizzaSection";
import LandingPage from "./components/landingPage";

function HomePage() {
  return (
    <>
      <Header />
      <br />
      <HeaderSection />
      <br />
      <PizzaSection />
      <div className="footerend">
        <Footer />
      </div>
      <Footerall />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing page with no AppBar */}
        <Route path="/landing" element={<LandingPage />} />
        
        {/* All other pages with AppBar */}
        <Route path="*" element={
          <>
            <AppBar />
            <br></br>
            <br></br>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/pizzas" element={<PizzaSection />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;