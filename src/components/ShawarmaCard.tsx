import styles from "./ShawarmaCard.module.css";
import clsx from "clsx";

type Shawarma = {
  name: string;
  ingredients: string;
  price: number;
  photoName: string;
  soldOut: boolean;
};

function ShawarmaCard({ shawarma }: { shawarma: Shawarma }) {
  return (
    <div className={clsx(styles.card, shawarma.soldOut && styles.soldOut)}>
      <div className={styles.imageContainer}>
        <img
          src={shawarma.photoName}
          alt={shawarma.name}
          className={styles.shawarmaImage}
        />
      </div>

      <div className={styles.textContent}>
        <div className={styles.nameLine}>
          <h3 className={styles.shawarmaName}>{shawarma.name}</h3>
          <span className={styles.price}>
            {shawarma.soldOut ? (
              <span className={styles.soldOutLabel}>SOLD OUT</span>
            ) : (
              `${shawarma.price}tk`
            )}
          </span>
        </div>
        <p className={styles.ingredients}>{shawarma.ingredients}</p>
      </div>
    </div>
  );
}

export default ShawarmaCard;
