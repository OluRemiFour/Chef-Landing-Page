import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Carts from "./components/Carts";
import Cookware from "./features/Cookware";
import Checkout from "./components/Checkout";
import Contact from "./features/Contact";
import Knives from "./features/Knives";
// import Checkout from "./components/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route />
        <Route path="/" element={<AppLayout />}>
          <Route path="cookware" element={<Cookware />} />
        </Route>
        <Route path="cart" element={<Carts />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="knives" element={<Knives />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
