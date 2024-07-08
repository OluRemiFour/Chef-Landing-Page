import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
// import Cookware from "../features/Cookware";

function AppLayout() {
  return (
    <div>
      <Hero />
      {/* <Cookware /> */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
