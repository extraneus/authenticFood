import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import AppBar from "./components/appBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeaderSection from "./components/selectionHeader";
import Footerall from "./components/footerall";
import SignUp from "./components/signUp";
import Login from "./components/logIn";
import PizzaSection from "./components/PizzaSection";
import ShawarmaSection from "./components/ShawarmaSection";
import KoreanSection from "./components/KoreanSection";
import JapaneseSection from "./components/JapaneseSection"; // ✅ Import JapaneseSection
import LandingPage from "./components/landingPage";
import About from "./components/About";
import Contact from "./components/Contact";

function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);

  return (
    <>
      <Header />
      <br />
      <HeaderSection onCategorySelect={setSelectedCategory} />
      <br />

      {/* Show all sections by default or filter based on selection */}
      {!selectedCategory && (
        <>
          <PizzaSection />
          <ShawarmaSection />
          <KoreanSection />
          <JapaneseSection /> {/* ✅ Show Japanese in default */}
        </>
      )}

      {selectedCategory === "Italian" && <PizzaSection filterCategory="Italian" />}
      {selectedCategory === "Middle Eastern" && <ShawarmaSection />}
      {selectedCategory === "Korean" && <KoreanSection />}
      {selectedCategory === "Japanese" && <JapaneseSection />} {/* ✅ Add filter for Japanese */}

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
        {/* Landing page without AppBar */}
        <Route path="/landing" element={<LandingPage />} />

        {/* Home page */}
        <Route
          path="/"
          element={
            <>
              <AppBar />
              <br />
              <br />
              <LandingPage />
            </>
          }
        />

        {/* Menu page */}
        <Route
          path="/menu"
          element={
            <>
              <AppBar />
              <br />
              <br />
              <MenuPage />
            </>
          }
        />

        {/* Korean page as standalone */}
        <Route
          path="/korean"
          element={
            <>
              <AppBar />
              <br />
              <br />
              <KoreanSection />
              <Footerall />
            </>
          }
        />

        {/* Japanese page as standalone */}
        <Route
          path="/japanese"
          element={
            <>
              <AppBar />
              <br />
              <br />
              <JapaneseSection /> {/* ✅ Japanese standalone page */}
              <Footerall />
            </>
          }
        />

        {/* About page */}
        <Route
          path="/about"
          element={
            <>
              <AppBar />
              <br />
              <br />
              <About />
            </>
          }
        />

        {/* Contact page */}
        <Route
          path="/contact"
          element={
            <>
              <AppBar />
              <br />
              <br />
              <Contact />
            </>
          }
        />

        {/* Signup page */}
        <Route
          path="/signup"
          element={
            <>
              <AppBar />
              <br />
              <br />
              <SignUp />
            </>
          }
        />

        {/* Login page */}
        <Route
          path="/login"
          element={
            <>
              <AppBar />
              <br />
              <br />
              <Login />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
