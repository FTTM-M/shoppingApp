import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/config";

const productContext = createContext();

function ProductProvider({ children }) {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const Fetch = async () => {
      try {
        setResponse(await api.get("/products"));
      } catch (error) {
        console.log(error.message);
      }
    };

    Fetch();
  }, []);
  return (
    <productContext.Provider value={response}>
      {children}
    </productContext.Provider>
  );
}

const useProducts = () => {
  const products = useContext(productContext);
  return products;
};

export default ProductProvider;
export { useProducts };
