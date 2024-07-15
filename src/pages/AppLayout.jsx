import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

function AppLayout({ handleSearch, query, cartCounter, products }) {
  return (
    <div>
      <Hero
        query={query}
        handleSearch={handleSearch}
        cartCounter={cartCounter}
        products={products}
      />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
