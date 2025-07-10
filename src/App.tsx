import "./App.css";
import Header from "./components/Header";
import PizzaCard from "./components/Pizzacard";
import PizzaData from "../public/PizzaData";
import Footer from "./components/Footer";
import HeaderSection from "./components/selectionHeader";
import Footerall from "./components/footerall";
function App() {
  return (
    <>
      <Header></Header>
      <br />
      <HeaderSection></HeaderSection>

      <br />
      <div className="card-grid">
        {PizzaData.map((pizza) => (
          <PizzaCard key={pizza.name} pizza={pizza} />
        ))}
      </div>
      <div className="footerend">
        <Footer />
      </div>
      <Footerall />
    </>
  );
}

export default App;
