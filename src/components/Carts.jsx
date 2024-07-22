import { BsCart2 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { MdFavoriteBorder, MdOutlineDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { useState } from "react";

function Carts({
  cartCounter,
  handleRemoveFromCart,
  cartItems,
  imageBaseUrl,
  setCartItems,
}) {
  // const defaultPrice = 190;

  const handleQuantityChange = (event, cartItem) => {
    const newQuantity = parseInt(event.target.value, 10);

    setCartItems((prevCartItems) =>
      prevCartItems?.map((item) =>
        item.id === cartItem.id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const subtotal = cartItems
    ?.map((cart) => cart.price * (cart.quantity || 1)) // Map each cart item to its total price
    .reduce((acc, price) => acc + price, 0); // Sum up all the total prices

  const total = subtotal;
  return (
    <>
      <div className="hidden md:block">
        {/* Header section */}
        <div className="bg-[#0A0A0A] py-6 px-16 flex items-center justify-between">
          <div className="flex">
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
                  className="bg-[#292929] py-[14px] active:text-white px-14 outline-none md:w-[20rem] lg:w-[18rem] text-[14px] rounded-md"
                />
              </div>
            </div>
          </div>

          <div className="flex text-white gap-8 text-[20px]">
            <FaRegUser />
            <MdFavoriteBorder />
            <Link to="/cart">
              <BsCart2 />
              <div className="bg-red-600 hover:bg-[#0a0a0a] duration-500 transition-all absolute mt-[-1.6rem] ml-3 rounded-full px-[6px] text-center text-sm text-white">
                {cartCounter}
              </div>
            </Link>
          </div>
        </div>

        {/* Navigation links */}
        <div className="bg-[#0A0A0A] py-4">
          <ul className="bg-[#DB6A18] flex justify-center items-center gap-14 py-4 text-white text-[16px]">
            <li>
              <Link to="/">Cookware</Link>
            </li>
            <li>
              <Link to="/knives">Knives</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile header section */}
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
                <div className="bg-red-600 hover:bg-[#0a0a0a] duration-500 transition-all absolute mt-[-1.6rem] ml-3 rounded-full px-[6px] text-center text-sm text-white">
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
              className="bg-[#292929] active:text-white py-4 px-16 outline-none w-[23rem] text-lg rounded-md"
            />
          </div>
        </div>
      </div>

      {/* Cart items */}
      <div className="md:py-16 mx-auto gap-[40px] md:px-6 flex flex-col py-8 md:mx-auto">
        <div className="md:flex px-10 space-y-2 font-semibold items-center justify-between">
          <h1 className="text-3xl">Cart Items</h1>
          <Link to="/">
            <button className="">Back to shopping &rarr;</button>
          </Link>
        </div>

        {/* List of cart items */}
        {/* <div className="md:grid lg:gap-[48px] lg:grid-cols-2 space-y-8 py-10 items-center mx-auto flex flex-col justify-between"> */}
        <div className="md:grid lg:gap-[48px] lg:grid-cols-2 space-y-8 py-10 mx-auto flex flex-col justify-between">
          <div>
            {cartItems?.map((cart, index) => (
              <div
                key={index}
                className="justify-between md:space-y-0 lg:space-y-4 space-y-4 gap-[48px] md:flex pt-3 lg:block"
              >
                <div className="lg:flex p-4 gap-3 border lg:justify-around items-center lg:h-fit">
                  <img
                    // src={`${imageBaseUrl}${cart.photos[0].url}`}
                    src={cart.photos}
                    alt={cart.name}
                    // className="w-full lg:w-1/6 lg:h-full"
                    className="w-full lg:w-2/5 lg:h-1/5"
                  />

                  <div className="space-y-1 ">
                    <div className="flex font-semibold py-2 items-center justify-between ">
                      <h1>{cart.name}</h1>
                      <p>
                        {`N${(cart.price * cart.quantity || cart.price).toFixed(
                          2
                        )}`}
                      </p>
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
                        <div
                          onClick={() => handleRemoveFromCart(cart)}
                          className="flex items-center"
                        >
                          <MdOutlineDeleteOutline />
                          <button className="hidden md:block">Delete</button>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between space-x-2 items-center">
                          <p className="hidden lg:block">Quantity</p>
                          <div className="border border-black">
                            <select
                              value={cart.quantity}
                              onChange={(event) =>
                                handleQuantityChange(event, cart)
                              }
                              className="outline-none"
                            >
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order summary */}
          <div className="md:mx-18 space-y-4 p-2">
            <div className="flex font-semibold text-lg justify-between">
              <h1>Order Summary</h1>
              <p>{cartCounter || ""} (item)</p>
            </div>
            <div className="flex justify-between">
              <p>Subtotal</p>
              <div>{`N${subtotal.toFixed(2)}`}</div>
            </div>
            <div className="flex py-2 justify-between">
              <p>Shipping</p>
              <p>N0, 000</p>
            </div>
            <div className="flex py-4 font-semibold border-t border-b border-[#dffeff] justify-between">
              <p>Total</p>
              <div>{`N${total.toFixed(2)}`}</div>
            </div>

            <div className="flex justify-between">
              <Link to="/checkout">
                <button className="border-[#0A0A0A] border-2 bg-[#0A0A0A] text-white w-[130px] h-[35px]">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Carts;
