import styles from "./ShawarmaCard.module.css";
import clsx from "clsx";

type KoreanBBQ = {
  name: string;
  ingredients: string;
  price: number;
  photoName: string;
  soldOut: boolean;
};

function KoreanBBQCard({ koreanBBQ }: { koreanBBQ: KoreanBBQ }) {
  return (
    <div className={clsx(styles.card, koreanBBQ.soldOut && styles.soldOut)}>
      <div className={styles.imageContainer}>
        <img
          src={koreanBBQ.photoName}
          alt={koreanBBQ.name}
          className={styles.shawarmaImage}
        />
      </div>

      <div className={styles.textContent}>
        <div className={styles.nameLine}>
          <h3 className={styles.shawarmaName}>{koreanBBQ.name}</h3>
          <span className={styles.price}>
            {koreanBBQ.soldOut ? (
              <span className={styles.soldOutLabel}>SOLD OUT</span>
            ) : (
              `${koreanBBQ.price}tk`
            )}
          </span>
        </div>
        <p className={styles.ingredients}>{koreanBBQ.ingredients}</p>
      </div>
    </div>
  );
}

export default KoreanBBQCard;
