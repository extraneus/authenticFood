import React from "react";
import ShawarmaCard from "./ShawarmaCard"; // Import the existing ShawarmaCard component
import KoreanData from "../../public/KoreanData"; // Your data array of shawarmas

const KoreanBBQSection = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2
        style={{
          textAlign: "center",
          fontSize: "2rem",
          marginBottom: "20px",
        }}
      >
        Korean BBQ 🍖
      </h2>
      <div className="card-grid">
        {KoreanData.map((shawarma) => (
          <ShawarmaCard key={shawarma.name} shawarma={shawarma} />
        ))}
      </div>
    </div>
  );
};

export default KoreanBBQSection;
