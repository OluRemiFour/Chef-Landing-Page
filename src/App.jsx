import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Carts from "./components/Carts";
import Cookware from "./features/Cookware";
import Checkout from "./components/Checkout";
import Contact from "./features/Contact";
import Knives from "./features/Knives";
import React from "react";
// import Checkout from "./components/Checkout";

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    React.useEffect(() => {
      // window.scrollTo(0, 0);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, [pathname]);

    return null;
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
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
