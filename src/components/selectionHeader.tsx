import React from "react";
import styles from "./selectionHeader.module.css";
import clsx from "clsx";

interface CuisineCategory {
  title: string;
  img: string;
  className: string;
}

interface HeaderSectionProps {
  onCategorySelect: (category: string) => void;
}

const cuisines: CuisineCategory[] = [
  { title: "Italian", img: "/header/italy.jpg", className: "italian" },
  { title: "Japanese", img: "/header/japanese.jpg", className: "japanese" },
  { title: "Chinese", img: "/header/chinese.jpg", className: "chinese" },
  { title: "Thai", img: "/header/thai.jpg", className: "thai" },
  { title: "Korean", img: "/header/turkish.jpg", className: "korean" }, // ✅ Corrected image path
  {
    title: "Middle Eastern",
    img: "/header/middleeast.jpg",
    className: "middle-east",
  },
];

const HeaderSection: React.FC<HeaderSectionProps> = ({ onCategorySelect }) => {
  return (
    <div className={clsx(styles.headerContainer, "bg-white")}>
      <div className={styles.headerContent}>
        <div className={styles.scrollContainer}>
          <div className={styles.itemsContainer}>
            {cuisines.map((item, index) => (
              <button
                key={index}
                className={clsx(styles.cuisineItem, "cursor-pointer")}
                onClick={() => onCategorySelect(item.title)}
                style={{
                  border: "none",
                  background: "transparent",
                  textAlign: "center",
                }}
              >
                <div className={styles.imageContainer}>
                  <img
                    src={item.img}
                    alt={item.title}
                    className={styles.cuisineImage}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "/placeholder-food.jpg";
                    }}
                  />
                </div>
                <p
                  className={styles.cuisineTitle}
                  style={{ fontSize: "1.2rem", fontWeight: "600" }}
                >
                  {item.title}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
