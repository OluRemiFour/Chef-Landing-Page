import { RiHomeOfficeLine, RiMailLine, RiPhoneLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";

const scrollButtonStyle = {
  bottom: "20px",
  right: "20px",
  padding: "10px 20px",
  fontSize: "16px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};
function Contact({ cartCounter }) {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <>
      <div className="hidden md:block">
        <div className="bg-[#0A0A0A] py-6 px-16 flex items-center justify-between">
          <div className="flex ">
            <div className="flex items-center">
              <div>
                <Link to="/">
                  <h1 className="font-extrabold text-white text-4xl">CHEF</h1>
                </Link>
              </div>
              <div className="flex space-x-7">
                <CiSearch className="absolute size-6 text-gray-400 my-3 mx-12" />
                <input
                  type="text"
                  placeholder="Search products"
                  className="bg-[#292929] py-[14px] px-14 outline-none md:w-[20rem] lg:w-[18rem] text-[14px] rounded-md "
                />
              </div>
            </div>
          </div>

          <div className="flex text-white gap-8 text-[20px]">
            <FaRegUser />
            <MdFavoriteBorder />
            <Link to="/cart">
              <BsCart2 />
              <div className="bg-red-600 absolute mt-[-1.6rem] ml-3 rounded-full px-[6px] text-center text-sm text-white">
                {cartCounter}
              </div>
            </Link>
          </div>
        </div>

        <div>
          <div className="bg-[#0A0A0A] py-4">
            <ul className="bg-[#DB6A18] flex justify-center items-center gap-14 py-4 text-white text-[16px]">
              <li>
                <NavLink to="/">Cookware</NavLink>
              </li>
              {/* <li>
                <NavLink>Kitchen appliances</NavLink>
              </li> */}
              {/* <li>
                <NavLink>Bakeware</NavLink>
              </li> */}
              <li>
                <NavLink to="/knives">Knives</NavLink>
              </li>
              {/* <li>
                <NavLink>Cutlery</NavLink>
              </li> */}
              <li>
                <NavLink to="/contact">Contact us</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="bg-[#0A0A0A]">
          <div className="bg-[#0A0A0A] pt-10 pb-10 px-8 flex items-center justify-between">
            <div className="flex gap-4 items-center">
              <div>
                <img src="/Icons.png" alt="burger" />
              </div>

              <Link to="/">
                <div>
                  <h1 className="font-extrabold text-white text-4xl">CHEF</h1>
                </div>
              </Link>
            </div>
            <div className="flex text-white gap-4 text-[20px]">
              <FaRegUser />
              <MdFavoriteBorder />
              <Link to="/cart">
                <BsCart2 />
                <div className="bg-red-600 rounded-full text-center px-1 text-sm text-white">
                  {cartCounter}
                </div>
              </Link>
            </div>
          </div>
          <div className="flex pb-4 text-center justify-center">
            <CiSearch className="absolute size-6 text-gray-400 my-5 mr-[18rem]" />
            <input
              type="text"
              placeholder="Search products"
              className="bg-[#292929] py-4 px-16 outline-none w-[23rem] text-lg rounded-md "
            />
          </div>
        </div>
      </div>
      <div className="m-10">
        <h1 className="text-[32px] font-semibold mx-6 pt-8">Contact Us</h1>

        <div className="lg:flex mx-auto w-fit gap-[48px]">
          <div className="block space-y-8 md:p-8">
            <div className="space-y-1">
              <div className="bg-[#DB6A18] mb-4 opacity-[88%] flex justify-center items-center rounded-full w-11 h-11">
                {" "}
                <RiMailLine className="fill-white size-5" />
              </div>
              <h1 className="font-semibold">Email Support</h1>
              <p>Someone from our team will get back to you.</p>
              <p>Chefword@gmail.com</p>
            </div>
            <div className="space-y-1">
              <div className="bg-[#DB6A18] mb-4 opacity-[88%] flex justify-center items-center rounded-full w-11 h-11">
                {" "}
                <RiPhoneLine className="fill-white size-5" />
              </div>{" "}
              <h1 className="font-semibold">Phone Support</h1>
              <p>Speak with our customer support personnel. </p>
              <p>+948-924-567-77-642</p>
            </div>
            <div className="space-y-1">
              <div className="bg-[#DB6A18] mb-4 opacity-[88%] flex justify-center items-center rounded-full w-11 h-11">
                {" "}
                <RiHomeOfficeLine className="fill-white size-5" />
              </div>{" "}
              <h1 className="font-semibold">Office visitation</h1>
              <p>We are open from 8AM-5PM (Monday-Friday)</p>
              <p>41 plot 5, Port-Harcourt, Nigeria </p>
            </div>
          </div>

          <div className="md:p-8 py-12">
            <h1 className="font-semibold text-lg py-2">Contact form</h1>
            <div className="md:flex gap-4 space-y-2 md:space-y-0">
              <div className="py-2">
                <label className="text-slate-500" htmlFor="">
                  First Name
                </label>
                <div className="border outline-none rounded-md w-[20rem]">
                  <input
                    type="text"
                    placeholder="First Name"
                    className=" p-4 outline-none rounded-md w-full"
                  />
                </div>
              </div>
              <div className="py-2">
                <label className="text-slate-500" htmlFor="">
                  Last Name
                </label>
                <div className="border outline-none rounded-md w-[20rem]">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className=" p-4 outline-none rounded-md w-full"
                  />
                </div>
              </div>
            </div>
            <div className="md:flex gap-4">
              <div className="py-2">
                <label className="text-slate-500" htmlFor="">
                  Email address{" "}
                </label>
                <div className="border outline-none rounded-md w-[20rem]">
                  <input
                    type="text"
                    placeholder="Email address"
                    className=" p-4 outline-none rounded-md w-full"
                  />
                </div>
              </div>
              <div className="py-2">
                <label className="text-slate-500" htmlFor="">
                  Phone Number{" "}
                </label>
                <div className="border outline-none rounded-md w-[20rem]">
                  <input
                    type="text"
                    placeholder="+23468000"
                    className=" p-4 outline-none rounded-md w-full"
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="text-slate-500" htmlFor="">
                Message
              </label>

              <textarea
                className="h-[10rem] p-4 border outline-none rounded-md w-full"
                name=""
                id=""
              ></textarea>
            </div>

            <button className="bg-black rounded-md p-4 my-8 text-white w-full">
              Submit{" "}
            </button>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="bg-[#0A0A0A] py-6 px-12">
          <div className="flex py-6 items-center justify-between">
            <div>
              <h1 className="font-extrabold text-white text-4xl">CHEF</h1>
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
              <img src="arrow.png" alt="" />
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
              <Link to="/">
                <h1 className="font-extrabold text-white text-5xl">CHEF</h1>
              </Link>
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

export default Contact;
