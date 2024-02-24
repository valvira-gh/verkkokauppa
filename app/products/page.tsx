import styles from "./page.module.css";
import Image from "next/image";

async function getData() {
  const result = await fetch("https://fakestoreapi.com/products", {
    cache: "force-cache",
  });

  if (!result.ok) {
    throw new Error("Failed to fetch products");
  }

  return result.json();
}

interface DataTypes {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

const Products: React.FC = async () => {
  const data: DataTypes[] = await getData();

  return (
    <section className={styles.container}>
      <h2>Test Lab</h2>
      <div className={styles.gridContainer}>
        {data.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <Image
              src={product.image}
              alt={product.title}
              width={180}
              height={180}
            />
            <div className={styles.ratingContainer}>
              <p>{product.rating.rate}</p>
              <p>{product.rating.count}</p>
            </div>
            <h5 className={styles.productTitle}>{product.title}</h5>

            <div className={styles.priceContainer}>
              <p className={styles.productPrice}>${product.price}</p>
              <button className={styles.productButton}>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
