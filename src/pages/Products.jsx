import { useProducts } from "../context/ProductContext";
import ProductCards from "../components/ProductCards";

import styles from "./Product.module.css"

function Products() {
  const products = useProducts();
  // console.log(products);
  return (
    <div className={styles.container}>
      {!products.length && <p>Loading ...</p>}
      <div className={styles.product}>
        {products.map((product) => (
         <ProductCards  key={product.id} data={product}/>
        ))}
      </div>
    </div>
  );
}

export default Products;
