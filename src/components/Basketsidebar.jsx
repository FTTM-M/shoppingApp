import { TbChecklist } from "react-icons/tb";
import { FaHashtag } from "react-icons/fa";
import { BsPatchCheck } from "react-icons/bs";

function Basketsidebar({ state, clickHandler }) {
  return (
    <div>
      <div>
        <TbChecklist />
        <p>Total:</p> <span>{state.total_price} $</span>
      </div>
      <div>
        <FaHashtag />
        <p>Quantity:</p> <span>{state.counter}</span>
      </div>
      <div>
        <BsPatchCheck />
        <p> Status:</p> <span>{!state.checkeOut && "pending ..."}</span>
      </div>

      <button onClick={() => clickHandler("CHECKOUT", state)}>Check Out</button>
    </div>
  );
}

export default Basketsidebar;
