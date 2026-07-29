import { useProducts } from "../context/ProductContext";
import ProductCards from "../components/ProductCards";

import styles from "./Product.module.css";
import Loading from "../components/Loading";
import { ImSearch } from "react-icons/im";
import { useState } from "react";
import { FaListUl } from "react-icons/fa";

function Products() {
  const [search, setSerach] = useState("");
  const products = useProducts();
  // console.log(products);

  const ButtonHandler = () => {
    console.log(search);
  };

  const CategoriesHandler = (event) => {
    const { tagName } = event.target;

    const category = event.target.innerText.toLowerCase();

    if (tagName !== "LI") return;

    console.log(category);
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
        <div>
          <div>
            <FaListUl />
            <p>Categories</p>
          </div>
          <ul onClick={CategoriesHandler}>
            <li>All</li>
            <li>Electronics</li>
            <li>jewelery</li>
            <li>Man's Clothing</li>
            <li>Woman's Clothing</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Products;
