import styles from "./ShawarmaCard.module.css";
import clsx from "clsx";

type JapaneseDish = {
  name: string;
  ingredients: string;
  price: number;
  photoName: string;
  soldOut: boolean;
};

function JapaneseCard({ japaneseDish }: { japaneseDish: JapaneseDish }) {
  return (
    <div className={clsx(styles.card, japaneseDish.soldOut && styles.soldOut)}>
      <div className={styles.imageContainer}>
        <img
          src={japaneseDish.photoName}
          alt={japaneseDish.name}
          className={styles.shawarmaImage}
        />
      </div>

      <div className={styles.textContent}>
        <div className={styles.nameLine}>
          <h3 className={styles.shawarmaName}>{japaneseDish.name}</h3>
          <span className={styles.price}>
            {japaneseDish.soldOut ? (
              <span className={styles.soldOutLabel}>SOLD OUT</span>
            ) : (
              `${japaneseDish.price}tk`
            )}
          </span>
        </div>
        <p className={styles.ingredients}>{japaneseDish.ingredients}</p>
      </div>
    </div>
  );
}

export default JapaneseCard;
