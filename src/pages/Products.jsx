import { useProducts } from "../context/ProductContext";


import styles from "./Product.module.css"

function Products() {
  const products = useProducts();
  // console.log(products);
  return (
    <div className={styles.container}>
      {!products.length && <p>Loading ...</p>}
      <div className={styles.product}>
        {products.map((product) => (
          <p key={product.id}>{product.title}</p>
        ))}
      </div>
    </div>
  );
}

export default Products;
