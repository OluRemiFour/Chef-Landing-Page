import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Footer from "./Footer";

function Carts() {
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
                  className="bg-[#292929] py-[14px] active:text-white px-14 outline-none md:w-[20rem] lg:w-[18rem] text-[14px] rounded-md "
                />
              </div>
            </div>
          </div>

          <div className="flex text-white gap-8 text-[20px]">
            <FaRegUser />
            <MdFavoriteBorder />
            <Link to="/cart">
              <BsCart2 />
              <p className="bg-red-600 hover:bg-[#0a0a0a] duration-500 transition-all absolute mt-[-1.6rem] ml-3 rounded-full px-[6px] text-center text-sm text-white">
                2
              </p>
            </Link>
          </div>
        </div>

        <div>
          <div className="bg-[#0A0A0A] py-4">
            <ul className="bg-[#DB6A18] flex justify-center items-center gap-14 py-4 text-white text-[16px]">
              <li>
                <Link to="/">Cookware</Link>
              </li>
              {/* <li>
                <Link>Kitchen appliances</Link>
              </li> */}
              {/* <li>
                <Link>Bakeware</Link>
              </li> */}
              <li>
                <Link to="/knives">Knives</Link>
              </li>
              {/* <li>
                <Link>Cutlery</Link>
              </li> */}
              <li>
                <Link to="/contact">Contact us</Link>
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
                <p className="bg-red-600 hover:bg-[#0a0a0a] duration-500 transition-all absolute mt-[-1.6rem] ml-3 rounded-full px-[6px] text-center text-sm text-white">
                  2
                </p>
              </Link>
            </div>
          </div>
          <div className="flex pb-4 text-center justify-center">
            <CiSearch className="absolute size-6 text-gray-400 my-5 mr-[18rem]" />
            <input
              type="text"
              placeholder="Search products"
              className="bg-[#292929] active:text-white py-4 px-16 outline-none w-[23rem] text-lg rounded-md "
            />
          </div>
        </div>
      </div>

      <div className="md:py-16 mx-auto gap-[40px] md:px-6 flex flex-col py-8 md:mx-auto">
        <div className="md:flex px-10 space-y-2 font-semibold items-center justify-between">
          <h1 className="text-3xl">Cart Items</h1>
          <Link to="/">
            <button className="">Back to shopping &rarr;</button>
          </Link>
        </div>

        <div className="md:grid lg:gap-[48px] lg:grid-cols-2 space-y-8 lg:space-y-0 py-10 items-center mx-auto flex flex-col justify-between">
          <div className="justify-between md:space-y-0 lg:space-y-4 space-y-4 gap-[48px] md:flex lg:block">
            <div className="lg:flex p-4 gap-3 w-fit border h-fit">
              <img src="/img.png" alt="img" className="w-full lg:w-fit" />
              <div className="space-y-1">
                <div className="flex font-semibold py-2 items-center justify-between">
                  <h1>Classic Non-stick Set</h1>
                  <p>N100, 000</p>
                </div>

                <div className="flex py-2 items-center justify-between">
                  <p>Available colors</p>
                  <div className="flex gap-2">
                    <div className="bg-[#E0DFFE] font-semibold rounded-full border ring ring-gray-500 h-[15px] w-[15px]"></div>
                    <div className="bg-[#5754BA] rounded-full h-[15px] w-[15px]"></div>
                    <div className="bg-[#DEAE55] rounded-full h-[15px] w-[15px]"></div>
                  </div>
                </div>

                <div className="flex justify-between gap-6 items-center">
                  <div className="flex space-x-2 items-center">
                    <MdFavoriteBorder />
                    <p>Move to wishlist</p>
                    <p className="flex items-center">
                      <MdOutlineDeleteOutline />
                      <p className="hidden md:block">Delete</p>
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between space-x-2 items-center">
                      <p className="hidden lg:block">Quantity</p>
                      <div className="border border-black">
                        <input
                          type="number"
                          placeholder="1"
                          className="border text-center w-10"
                        />
                        <select name="" className="outline-none"></select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:flex p-4 gap-3 w-fit border h-fit">
              <img src="/img1.png" alt="img" className="w-full lg:w-fit" />
              <div className="space-y-1">
                <div className="flex font-semibold py-2 items-center justify-between">
                  <h1>Classic Non-stick Set</h1>
                  <p>N100, 000</p>
                </div>

                <div className="flex py-2 items-center justify-between">
                  <p>Available colors</p>
                  <div className="flex gap-2">
                    <div className="bg-[#E0DFFE] font-semibold rounded-full border ring ring-gray-500 h-[15px] w-[15px]"></div>
                    <div className="bg-[#5754BA] rounded-full h-[15px] w-[15px]"></div>
                    <div className="bg-[#DEAE55] rounded-full h-[15px] w-[15px]"></div>
                  </div>
                </div>

                <div className="flex justify-between gap-6 items-center">
                  <div className="flex space-x-2 items-center">
                    <MdFavoriteBorder />
                    <p>Move to wishlist</p>
                    <p className="flex items-center">
                      <MdOutlineDeleteOutline />
                      <p className="hidden md:block">Delete</p>
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between space-x-2 items-center">
                      <p className="hidden lg:block">Quantity</p>
                      <div className="border border-black">
                        <input
                          type="number"
                          placeholder="1"
                          className="border text-center w-10"
                        />
                        <select name="" className="outline-none"></select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:mx-18 space-y-4 p-2">
            <div className="flex font-semibold text-lg justify-between">
              <h1>Order Summary</h1>
              <p>2 item</p>
            </div>
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>N180, 000</p>
            </div>
            <div className="flex py-2 justify-between">
              <p>Shipping</p>
              <p>N0, 000</p>
            </div>
            <div className="flex py-4 font-semibold border-t border-b border-[#dffeff] justify-between">
              <p>Total</p>
              <p>N180, 000</p>
            </div>

            <div className="flex py-2 justify-between">
              <input
                type="text"
                placeholder="Promo code"
                className="w-full border px-4 border-[#dffeff] outline-none"
              />
              <button className="py-4 px-10 bg-[#DB6A18] text-white">
                Apply
              </button>
            </div>
            <Link to="/checkout">
              <button className="bg-black p-4 my-4 rounded-md text-white w-full">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Carts;
