import styles from "./Pizzacard.module.css";
import clsx from "clsx";

type Pizza = {
  name: string;
  ingredients: string;
  price: number;
  photoName: string;
  soldOut: boolean;
};

function PizzaCard({ pizza }: { pizza: Pizza }) {
  return (
    <div className={clsx(styles.card, pizza.soldOut && styles.soldOut)}>
      <div className={styles.imageContainer}>
        <img
          src={pizza.photoName}
          alt={pizza.name}
          className={styles.pizzaImage}
        />
      </div>

      <div className={styles.textContent}>
        <div className={styles.nameLine}>
          <h3 className={styles.pizzaName}>{pizza.name}</h3>
          <span className={styles.price}>
            {pizza.soldOut ? (
              <span className={styles.soldOutLabel}>SOLD OUT</span>
            ) : (
              `$${pizza.price}`
            )}
          </span>
        </div>
        <p className={styles.ingredients}>{pizza.ingredients}</p>
      </div>
    </div>
  );
}

export default PizzaCard;
