import { useProducts } from "../context/ProductContext";
import ProductCards from "../components/ProductCards";

import styles from "./Product.module.css";
import Loading from "../components/Loading";
import { ImSearch } from "react-icons/im";
import { useState } from "react";

function Products() {
  const [search, setSerach] = useState("");
  const products = useProducts();
  // console.log(products);

  const ButtonHandler = () => {
    console.log(search);
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSerach(e.target.value.toLocaleLowerCase().trim())}
        />
        <button onClick={ButtonHandler}>
          <ImSearch />
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.product}>
          {!products.length && <Loading />}
          {products.map((product) => (
            <ProductCards key={product.id} data={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
