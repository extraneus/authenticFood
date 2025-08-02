import React from "react";
import JapaneseCard from "./JapaneseCard";
import JapaneseData from "../../public/JapaneseData"; // adjust path if needed

type JapaneseSectionProps = {
  filterCategory?: string;
};

const JapaneseSection: React.FC<JapaneseSectionProps> = ({ filterCategory }) => {
  // Show only if no filter OR filter is "Japanese"
  const visibleDishes =
    !filterCategory || filterCategory === "Japanese" ? JapaneseData : [];

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "20px" }}>
        Taste of Japan 🇯🇵
      </h2>
      <div className="card-grid">
        {visibleDishes.map((dish) => (
          <JapaneseCard key={dish.name} dish={dish} />
        ))}
      </div>
    </div>
  );
};

export default JapaneseSection;
