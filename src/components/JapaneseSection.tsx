import React from "react";
import JapaneseCard from "./Japanesecard"; 
import JapaneseData from "../../public/JapaneseData"; 

const JapaneseSection = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "20px" }}>
        Japanese Cuisine 🍱
      </h2>
      <div className="card-grid">
        {JapaneseData.map((dish) => (
          <JapaneseCard key={dish.name} japaneseDish={dish} />
        ))}
      </div>
    </div>
  );
};

export default JapaneseSection;
