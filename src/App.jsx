import { Navigate, Route, Routes } from "react-router-dom";

import Products from "./pages/Products";
import CheckOut from "./pages/CheckOut";
import NotFound from "./pages/404";
import Details from "./pages/Details";
import ProductProvider from "./context/ProductContext";

function App() {
  return (
    <>
      <ProductProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/products" replace />} />
          <Route path="/products" element={<Products />} />
          <Route path="/chackOut" element={<CheckOut />} />
          <Route path="/products/:id" element={<Details />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </ProductProvider>
    </>
  );
}

export default App;
