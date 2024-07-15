import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Carts from "./components/Carts";
import Cookware from "./features/Cookware";
import Checkout from "./components/Checkout";
import Contact from "./features/Contact";
import Knives from "./features/Knives";
import { useEffect, useState } from "react";
import Data from "./components/Data";

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, [pathname]);

    return null;
  };

  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartCounter, setCartCounter] = useState(0);
  const [productQuantities, setProductQuantities] = useState({});

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    setProducts(Data);
    products.map((itm) => console.log(itm));
  }

  function getKnives() {
    return products?.filter(
      (item) =>
        item.name.toLowerCase().includes("knife") ||
        item.name.toLowerCase().includes("hand")
    );
  }
  function getCookware() {
    return products?.filter((item) => item.name.toLowerCase().includes("-"));
  }
  const cookware = getCookware();
  const knives = getKnives();
  const imageBaseUrl = "https://api.timbu.cloud/images/";

  const handleAddToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
    setCartCounter((prevCount) => prevCount + 1);
    setProductQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      updatedQuantities[item.id] = (updatedQuantities[item.id] || 0) + 1;
      return updatedQuantities;
    });
  };

  const handleRemoveFromCart = (item) => {
    setCartItems((prevCartItems) =>
      prevCartItems?.filter((cartItem) => cartItem.id !== item.id)
    );
    setCartCounter((prevCount) => prevCount - 1);
    setProductQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      if (updatedQuantities[item.id]) {
        updatedQuantities[item.id] -= 1;
        if (updatedQuantities[item.id] === 0) {
          delete updatedQuantities[item.id];
        }
      }
      return updatedQuantities;
    });
  };

  const handleIncreaseQuantity = (item) => {
    setProductQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      updatedQuantities[item.id] = (updatedQuantities[item.id] || 0) + 1;
      return updatedQuantities;
    });
  };

  const price = 190 * cartCounter;
  const subtotal = cartItems.reduce(
    (acc, cart) => acc + cart.quantity * 190 || price,
    0
  );
  const total = subtotal;
  // Search Products
  const [query, setQuery] = useState("");
  const [searchItem, setSearchItem] = useState("");

  function handleSearch(e) {
    const value = e.target.value;
    setQuery(value);

    const SearchProduct = Object(products).filter((products) =>
      products.name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchItem(SearchProduct);
  }
  // console.log(searchItem);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path=""
          element={
            <AppLayout
              handleSearch={handleSearch}
              query={query}
              cartCounter={cartCounter}
              products={products}
            />
          }
        >
          <Route
            path="/"
            element={
              <Cookware
                cookware={cookware}
                handleAddToCart={handleAddToCart}
                imageBaseUrl={imageBaseUrl}
                searchItem={searchItem}
                products={products}
              />
            }
          />
          <Route
            path="knives"
            element={
              <Knives
                handleAddToCart={handleAddToCart}
                imageBaseUrl={imageBaseUrl}
                knives={knives}
                cartCounter={cartCounter}
                searchItem={searchItem}
                products={products}
              />
            }
          />
        </Route>
        <Route
          path="cart"
          element={
            <Carts
              cartItems={cartItems}
              handleRemoveFromCart={handleRemoveFromCart}
              cartCounter={cartCounter}
              imageBaseUrl={imageBaseUrl}
              products={products}
              productQuantities={productQuantities}
              handleIncreaseQuantity={handleIncreaseQuantity}
              setCartItems={setCartItems}
            />
          }
        />
        <Route
          path="checkout"
          element={
            <Checkout
              cartItems={cartItems}
              cartCounter={cartCounter}
              imageBaseUrl={imageBaseUrl}
              products={products}
              total={total}
              setCartItems={setCartItems}
            />
          }
        />
        <Route path="contact" element={<Contact cartCounter={cartCounter} />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
