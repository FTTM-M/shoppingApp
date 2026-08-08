import { createContext, useReducer } from "react";

const CardContext = createContext();

const initialState = {};

const reducer = {};

function CardContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <CardContext.Provider value={state}>{children}</CardContext.Provider>;
}

export default CardContextProvider;
