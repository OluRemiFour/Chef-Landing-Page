// import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
// import AppLayout from "./pages/AppLayout";
// import Carts from "./components/Carts";
// import Cookware from "./features/Cookware";
// import Checkout from "./components/Checkout";
// import Contact from "./features/Contact";
// import Knives from "./features/Knives";
// import { useEffect, useState } from "react";

// function App() {
//   const ScrollToTop = () => {
//     const { pathname } = useLocation();

//     useEffect(() => {
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });
//     }, [pathname]);

//     return null;
//   };

//   const [products, setProducts] = useState([]);
//   const [cartItems, setCartItems] = useState([]);
//   const [cartCounter, setCartCounter] = useState(0);
//   const [productQuantities, setProductQuantities] = useState({});

//   const Apikey = import.meta.env.VITE_API_KEY;
//   const Appid = import.meta.env.VITE_API_ID;
//   const apiORG = import.meta.env.VITE_API_ORG;
//   const baseUrl = `https://timbu-get-all-products.reavdev.workers.dev/?organization_id=${apiORG}&reverse_sort=false&page=1&size=16&Appid=${Appid}&Apikey=${Apikey}`;

//   async function getData() {
//     try {
//       const res = await fetch(baseUrl);
//       if (!res.ok) {
//         throw new Error(`HTTP error! status: ${res.status}`);
//       }
//       const data = await res.json();
//       setProducts(data.items);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }

//   useEffect(() => {
//     getData();
//   }, []);

//   function getKnives() {
//     return products?.filter(
//       (item) =>
//         item.name.toLowerCase().includes("knife") ||
//         item.name.toLowerCase().includes("hand")
//     );
//   }
//   function getCookware() {
//     return products?.filter(
//       (item) =>
//         item.name.toLowerCase().includes("-") ||
//         item.name.toLowerCase().includes("stain")
//     );
//   }
//   const cookware = getCookware();

//   const knives = getKnives();
//   const imageBaseUrl = "https://api.timbu.cloud/images/";

//   const handleAddToCart = (item) => {
//     setCartItems((prevCartItems) => [...prevCartItems, item]);
//     setCartCounter((prevCount) => prevCount + 1);
//     setProductQuantities((prevQuantities) => {
//       const updatedQuantities = { ...prevQuantities };
//       updatedQuantities[item.unique_id] =
//         (updatedQuantities[item.unique_id] || 0) + 1;
//       return updatedQuantities;
//     });
//   };

//   const handleRemoveFromCart = (item) => {
//     setCartItems((prevCartItems) =>
//       prevCartItems?.filter((cartItem) => cartItem.unique_id !== item.unique_id)
//     );
//     setCartCounter((prevCount) => prevCount - 1);
//     setProductQuantities((prevQuantities) => {
//       const updatedQuantities = { ...prevQuantities };
//       if (updatedQuantities[item.unique_id]) {
//         updatedQuantities[item.unique_id] -= 1;
//         if (updatedQuantities[item.unique_id] === 0) {
//           delete updatedQuantities[item.unique_id];
//         }
//       }
//       return updatedQuantities;
//     });
//   };

//   const handleIncreaseQuantity = (item) => {
//     setProductQuantities((prevQuantities) => {
//       const updatedQuantities = { ...prevQuantities };
//       updatedQuantities[item.unique_id] =
//         (updatedQuantities[item.unique_id] || 0) + 1;
//       return updatedQuantities;
//     });
//   };

//   return (
//     <BrowserRouter>
//       <ScrollToTop />
//       <Routes>
//         <Route path="" element={<AppLayout cartCounter={cartCounter} />}>
//           <Route
//             path="/"
//             element={
//               <Cookware
//                 cookware={cookware}
//                 handleAddToCart={handleAddToCart}
//                 imageBaseUrl={imageBaseUrl}
//               />
//             }
//           />
//           <Route
//             path="knives"
//             element={
//               <Knives
//                 handleAddToCart={handleAddToCart}
//                 imageBaseUrl={imageBaseUrl}
//                 knives={knives}
//                 cartCounter={cartCounter}
//               />
//             }
//           />
//         </Route>
//         <Route
//           path="cart"
//           element={
//             <Carts
//               cartItems={cartItems}
//               handleRemoveFromCart={handleRemoveFromCart}
//               cartCounter={cartCounter}
//               imageBaseUrl={imageBaseUrl}
//               productQuantities={productQuantities}
//               handleIncreaseQuantity={handleIncreaseQuantity}
//               setCartItems={setCartItems}
//             />
//           }
//         />
//         <Route path="checkout" element={<Checkout />} />
//         <Route path="contact" element={<Contact cartCounter={cartCounter} />} />
//         {/* <Route path="*" element={<NotFound />} /> */}
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Carts from "./components/Carts";
import Cookware from "./features/Cookware";
import Checkout from "./components/Checkout";
import Contact from "./features/Contact";
import Knives from "./features/Knives";
import { useEffect, useState } from "react";

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

  const Apikey = import.meta.env.VITE_API_KEY;
  const Appid = import.meta.env.VITE_API_ID;
  const apiORG = import.meta.env.VITE_API_ORG;
  const baseUrl = `https://timbu-get-all-products.reavdev.workers.dev/?organization_id=${apiORG}&reverse_sort=false&page=1&size=16&Appid=${Appid}&Apikey=${Apikey}`;

  async function getData() {
    try {
      const res = await fetch(baseUrl);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setProducts(data.items);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Display user-friendly message or handle error appropriately
    }
  }

  useEffect(() => {
    getData();
  }, []);

  function getKnives() {
    return products?.filter(
      (item) =>
        item.name.toLowerCase().includes("knife") ||
        item.name.toLowerCase().includes("hand")
    );
  }
  function getCookware() {
    return products?.filter(
      (item) =>
        item.name.toLowerCase().includes("-") ||
        item.name.toLowerCase().includes("stain")
    );
  }
  const cookware = getCookware();
  const knives = getKnives();
  const imageBaseUrl = "https://api.timbu.cloud/images/";

  const handleAddToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
    setCartCounter((prevCount) => prevCount + 1);
    setProductQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      updatedQuantities[item.unique_id] =
        (updatedQuantities[item.unique_id] || 0) + 1;
      return updatedQuantities;
    });
  };

  const handleRemoveFromCart = (item) => {
    setCartItems((prevCartItems) =>
      prevCartItems?.filter((cartItem) => cartItem.unique_id !== item.unique_id)
    );
    setCartCounter((prevCount) => prevCount - 1);
    setProductQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      if (updatedQuantities[item.unique_id]) {
        updatedQuantities[item.unique_id] -= 1;
        if (updatedQuantities[item.unique_id] === 0) {
          delete updatedQuantities[item.unique_id];
        }
      }
      return updatedQuantities;
    });
  };

  const handleIncreaseQuantity = (item) => {
    setProductQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      updatedQuantities[item.unique_id] =
        (updatedQuantities[item.unique_id] || 0) + 1;
      return updatedQuantities;
    });
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="" element={<AppLayout cartCounter={cartCounter} />}>
          <Route
            path="/"
            element={
              <Cookware
                cookware={cookware}
                handleAddToCart={handleAddToCart}
                imageBaseUrl={imageBaseUrl}
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
              productQuantities={productQuantities}
              handleIncreaseQuantity={handleIncreaseQuantity}
              setCartItems={setCartItems}
            />
          }
        />
        <Route path="checkout" element={<Checkout />} />
        <Route path="contact" element={<Contact cartCounter={cartCounter} />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
