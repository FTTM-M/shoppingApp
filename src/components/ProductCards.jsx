import { Link } from "react-router-dom";
import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { Title } from "./helper/helper";
import { useCard } from "../context/CardContext";
import styles from "./ProductCards.module.css";

function ProductCards({ data }) {
  const { title, image, id, price } = data;

  const [state, dispatch] = useCard();

  const clickHandler = () => {
    dispatch({ type: "add", payload: data });
  };

  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h3>{Title(title)}</h3>
      <p>{price} $</p>
      <div className={styles.actions}>
        <Link to={`/products/${id}`}>
          {" "}
          <TbListDetails />
        </Link>
        <div>
          {" "}
          <button onClick={clickHandler}>
            <TbShoppingBagCheck />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCards;
