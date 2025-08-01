import React from "react";
import ShawarmaCard from "./ShawarmaCard"; // Correct import name
import ShawarmaData from "../../public/ShawarmaData"; // Correct data import

const ShawarmaSection = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2
        style={{
          textAlign: "center",
          fontSize: "2rem",
          marginBottom: "20px",
        }}
      >
        Our Tasty Shawarmas 🌯
      </h2>
      <div className="card-grid">
        {ShawarmaData.map((shawarma) => (
          <ShawarmaCard key={shawarma.name} shawarma={shawarma} />
        ))}
      </div>
    </div>
  );
};

export default ShawarmaSection;
