import Basket from "../components/Basket";
import { useCard } from "../context/CardContext";

function CheckOut() {
  const [state, dispatch] = useCard();
  const clickHandler = (type, payload) => {
    dispatch({ type, payload });
  };
  return (
    <div>
      <div>
        {state.selectedItems.map((product) => (
          <Basket
            key={product.id}
            product={product}
            clickHandler={clickHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default CheckOut;
