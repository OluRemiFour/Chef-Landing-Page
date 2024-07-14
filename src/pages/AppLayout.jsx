import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

function AppLayout({ cartCounter }) {
  return (
    <div>
      <Hero cartCounter={cartCounter} />
      {/* <Cookware /> */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
