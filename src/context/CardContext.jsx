import { createContext, useContext, useReducer } from "react";
import { sumiation } from "../components/helper/helper";

const CardContext = createContext();

const initialState = {
  selectedItems: [],
  counteItems: 0,
  total: 0,
  checkeOut: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEMS":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      }
      return { ...state, checkeOut: false, ...sumiation(state.selectedItems) };

    default:
      throw new Error("invalid");
  }
};

function CardContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CardContext.Provider value={{ state, dispatch }}>
      {children}
    </CardContext.Provider>
  );
}

const useCard = () => {
  const { state, dispatch } = useContext(CardContext);
  return [state, dispatch];
};

export default CardContextProvider;

export { useCard };
