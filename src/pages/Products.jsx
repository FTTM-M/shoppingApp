import { useProducts } from "../context/ProductContext";
import ProductCards from "../components/ProductCards";

import styles from "./Product.module.css";
import Loading from "../components/Loading";
import SearchedProducts from "../components/helper/helper";
import { ImSearch } from "react-icons/im";
import { useEffect, useState } from "react";
import { FaListUl } from "react-icons/fa";

function Products() {
  const [search, setSearch] = useState("");
  const [display, setDisplay] = useState([]);
  const [query, setQuery] = useState({});
  const products = useProducts();
  // console.log(products);

  useEffect(() => {
    setDisplay(products);
  }, [products]);

  useEffect(() => {
    let searchedProducts = SearchedProducts(products, query.search);
    setDisplay(searchedProducts);
  }, [query]);

  const ButtonHandler = () => {
    setQuery({ ...query, search });
  };

  const CategoriesHandler = (event) => {
    const { tagName } = event.target;

    const category = event.target.innerText.toLowerCase();

    if (tagName !== "LI") return;

    setQuery({ ...query, category });
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase().trim())}
        />
        <button onClick={ButtonHandler}>
          <ImSearch />
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.product}>
          {!display.length && <Loading />}
          {display.map((product) => (
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
