import { Link } from "react-router-dom";

const scrollButtonStyle = {
  bottom: "20px",
  right: "20px",
  padding: "10px 20px",
  fontSize: "16px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};
function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <>
      <div className="md:hidden">
        <div className="bg-[#0A0A0A] py-6 px-12">
          <div className="flex py-6 items-center justify-between">
            <div>
              <Link to="/">
                <h1 className="font-extrabold text-white text-4xl">CHEF</h1>
              </Link>
              {/* <img src="/LOGO.png" alt="logo" /> */}
            </div>
            <button className="bg-[#DB6A18] px-4 py-2 rounded-md text-white">
              Sign up
            </button>
          </div>
          <ul className="grid grid-cols-3 py-6 gap-6 text-white">
            <Link to="/">
              <li>Cookware</li>
            </Link>

            <Link to="/knives">
              {/* <li>Kitchen </li> */}
              <li>Knives</li>
            </Link>
            {/* <li>Bakeware</li> */}
            {/* <li>Cutlery</li> */}
            <Link to="/contact">
              <li>Contact us</li>
            </Link>
          </ul>

          <div className="py-8 flex justify-between">
            <div className="space-y-3 ">
              <div>
                <p className="text-slate-500 py-1">Contact</p>
                <p className="text-white">+948-924-567-77-642</p>
              </div>
              <div>
                <p className="text-slate-500 py-1">Email</p>
                <p className="text-white">Chefword@gmail.com</p>
              </div>
              <div>
                <p className="text-slate-500 py-1">Address</p>
                <p className="text-white">41 plot 5, Port-Harcourt, Nigeria </p>
              </div>
            </div>

            <div>
              <img
                onClick={scrollToTop}
                style={scrollButtonStyle}
                src="arrow.png"
                alt=""
              />
            </div>
          </div>
          <p className="text-slate-500">&#169; Oluremi | 2024</p>
        </div>
      </div>

      {/* Large Screen */}
      <div className="hidden md:block">
        <div className="bg-[#0A0A0A] py-10 lg:px-1 px-6">
          <div className="flex items-center justify-between py-8 md:px-14">
            <div>
              <h1 className="font-extrabold text-white text-5xl">CHEF</h1>
              {/* <img src="/LOGO.png" alt="logo" /> */}
            </div>
            <ul className="flex text-center space-x-4 items-center lg:justify-center lg:gap-16 text-white">
              {/* <li>Kitchen appliances</li> */}
              <Link to="/">
                <li>Cookware</li>
              </Link>
              <Link to="/knives">
                <li>Knives</li>
              </Link>

              <Link to="/contact">
                <li>Contact us</li>
              </Link>
              {/* <li>Cutlery</li> */}
            </ul>
            <button className="bg-[#DB6A18] p-2 rounded-md text-white">
              Sign up
            </button>
          </div>

          <div className="pt-36 flex items-center md:px-16 justify-between">
            <div>
              <Link onClick={scrollToTop} style={scrollButtonStyle}>
                <img src="arrow.png" alt="" />
              </Link>
            </div>
            <div>
              <p className="text-slate-500 py-1">Contact</p>
              <p className="text-white">+948-924-567-77-642</p>
            </div>
            <div>
              <p className="text-slate-500 py-1">Email</p>
              <p className="text-white">Chefword@gmail.com</p>
            </div>
            <div>
              <p className="text-slate-500 py-1">Address</p>
              <p className="text-white">41 plot 5, Port-Harcourt, Nigeria </p>
            </div>
          </div>
          <p className="text-slate-500 md:px-16 pt-14">&#169; Oluremi | 2024</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
