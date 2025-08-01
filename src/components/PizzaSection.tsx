import React from "react";
import PizzaCard from "./Pizzacard";
import PizzaData from "../../public/PizzaData";

interface PizzaSectionProps {
  filterCategory?: string; // optional prop for filtering
}

const PizzaSection: React.FC<PizzaSectionProps> = ({ filterCategory }) => {
  // Filter pizzas based on category if filterCategory is provided
  const filteredPizzas = filterCategory
    ? PizzaData.filter((pizza) => pizza.category === filterCategory)
    : PizzaData;

  return (
    <div style={{ padding: "20px" }}>
      <h2
        style={{ textAlign: "center", fontSize: "2rem", marginBottom: "20px" }}
      >
        {filterCategory
          ? `${filterCategory} Pizzas 🍕`
          : "Our Delicious Pizzas 🍕"}
      </h2>
      <div className="card-grid">
        {filteredPizzas.length > 0 ? (
          filteredPizzas.map((pizza) => (
            <PizzaCard key={pizza.name} pizza={pizza} />
          ))
        ) : (
          <p style={{ textAlign: "center", fontSize: "1.2rem", marginTop: "10px" }}>
            No pizzas available in this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default PizzaSection;
