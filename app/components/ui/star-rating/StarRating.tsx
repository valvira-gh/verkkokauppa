import styles from "./star-rating.module.css";

interface Props {
  rate: number;
}

const StarRating: React.FC<Props> = ({ rate }) => {
  const filledStars = Math.floor(rate * 5) / 5;
  const emptyStars = 5 - filledStars;

  return (
    <div className={styles.starRating}>
      {[...Array(5)].map((_, index) => {
        if (index < filledStars) {
          return (
            <span key={index} className={styles.filledStars}>
              ★
            </span>
          );
        } else {
          return (
            <span key={index} className={styles.emptyStars}>
              ☆
            </span>
          );
        }
      })}
    </div>
  );
};

export default StarRating;
