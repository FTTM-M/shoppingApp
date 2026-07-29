import { useProducts } from "../context/ProductContext";
import ProductCards from "../components/ProductCards";

import styles from "./Product.module.css";
import Loading from "../components/Loading";

function Products() {
  const products = useProducts();
  // console.log(products);
  return (
    <div className={styles.container}>
     
      <div className={styles.product}> 
        {!products.length && <Loading />}
        {products.map((product) => (
          <ProductCards key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
