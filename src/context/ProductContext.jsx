import { createContext, useEffect, useState } from "react";
import api from "../services/config";

const productContext = createContext();

function ProductProvider({ children }) {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const Fetch = async () => {
      try {
        setResponse(api.get("/product"));
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

export default ProductProvider;
