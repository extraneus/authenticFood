import React from "react";
import PizzaCard from "./Pizzacard";
import PizzaData from "../../public/PizzaData";

const PizzaSection = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "20px" }}>
        Our Delicious Pizzas 🍕
      </h2>
      <div className="card-grid">
        {PizzaData.map((pizza) => (
          <PizzaCard key={pizza.name} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaSection;
