import styles from "./page.module.css";

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
      {data.map((product) => (
        <div key={product.id} className={styles.productCard}>
          <h5 className={styles.productTitle}>{product.title}</h5>
        </div>
      ))}
    </section>
  );
};

export default Products;
