import { FaListUl } from "react-icons/fa";
import { createQuery } from "./helper/helper";
import styles from "./SideBar.module.css"

function SideBar({setQuery}) {

     const CategoriesHandler = (event) => {
    const { tagName } = event.target;

    const category = event.target.innerText.toLowerCase();

    if (tagName !== "LI") return;

    setQuery((query) => createQuery(query, { category }));
  };
  return (
    <div className={styles.sidebar}>
      <div>
        <FaListUl />
        <p>Categories</p>
      </div>
      <ul onClick={CategoriesHandler}>
        <li>All</li>
        <li>Electronics</li>
        <li>jewelery</li>
        <li>Men's Clothing</li>
        <li>Women's Clothing</li>
      </ul>
    </div>
  );
}

export default SideBar;
