import { createContext, useContext, useReducer } from "react";

const CardContext = createContext();

const initialState = {};

const reducer = (state, action) => {
  console.log(action);
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
