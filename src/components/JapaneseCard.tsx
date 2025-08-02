import styles from "./JapaneseCard.module.css";
import clsx from "clsx";

type JapaneseDish = {
  name: string;
  ingredients: string;
  price: number;
  photoName: string;
  category: string;
  soldOut: boolean;
};

function JapaneseCard({ dish }: { dish: JapaneseDish }) {
  return (
    <div className={clsx(styles.card, dish.soldOut && styles.soldOut)}>
      <div className={styles.imageContainer}>
        <img
          src={dish.photoName}
          alt={dish.name}
          className={styles.dishImage}
        />
      </div>

      <div className={styles.textContent}>
        <div className={styles.nameLine}>
          <h3 className={styles.dishName}>{dish.name}</h3>
          <span className={styles.price}>
            {dish.soldOut ? (
              <span className={styles.soldOutLabel}>SOLD OUT</span>
            ) : (
              `$${dish.price}`
            )}
          </span>
        </div>
        <p className={styles.ingredients}>{dish.ingredients}</p>
      </div>
    </div>
  );
}

export default JapaneseCard;
