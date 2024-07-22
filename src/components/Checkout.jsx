import { useState } from "react";
import toast from "react-hot-toast";
import { CiCreditCard1 } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { usePaystack } from "./usePayStack";

function Checkout({ cartItems, cartCounter, setCartItems }) {
  const [shipping, setShipping] = useState(0);

  const subtotal = cartItems
    ?.map((cart) => cart.price * (cart.quantity || 1)) // Map each cart item to its total price
    .reduce((acc, price) => acc + price + shipping, 0); // Sum up all the total prices

  const cart = cartItems.map((cart, i) => {
    return cart.price;
  });
  const qty = cartItems.map((cart, i) => {
    return cart.quantity;
  });

  function clearCart() {
    setCartItems([]);
  }
  const [everyToggle, setTEveryToggle] = useState(false);
  const [abcToggle, setABCToggle] = useState(false);
  const [goodToggle, setGoodToggle] = useState();
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();

  function handleEveryToggle() {
    setTEveryToggle((toggle) => !toggle);
    if (!everyToggle) {
      setShipping(10000);
    } else {
      setShipping(0);
    }
  }
  function handleABCToggle() {
    setABCToggle((toggle) => !toggle);

    if (!abcToggle) {
      setShipping(6500);
    } else {
      setShipping(0);
    }
  }
  function handleGoodToggle() {
    setGoodToggle((toggle) => !toggle);

    if (!goodToggle) {
      setShipping(4000);
    } else {
      setShipping(0);
    }
  }

  const total = subtotal;
  const publicKey = "pk_test_dcfa3d8202774206e8f20cc79886e77e10fc9862";
  const amount = total * 100;

  const onSuccess = () =>
    toast.success("Thanks for doing business with us! Come back soon!!");
  const onClose = () => toast.error("Wait! Don't leave :(");

  const { initializePayment } = usePaystack({
    email,
    amount,
    name,
    phone,
    address,
    publicKey,
    onSuccess,
    onClose,
    clearCart,
  });

  return (
    <>
      {/* Header */}
      <div className="">
        <div className="bg-[#0A0A0A]">
          <div className="bg-[#0A0A0A] py-10 px-6">
            <Link to="/">
              <div className="md:mx-16">
                {/* <img src="/LOGO.png" alt="logo" /> */}
                <h1 className="font-extrabold text-white text-4xl">CHEF</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* checkout */}

      <div className="md:m-10 py-10">
        <h1 className="text-3xl font-semibold py-4 px-6 md:px-16">Checkout</h1>
        <div className="md:mx-16 mx-6 grid md:grid-cols-2 grid-cols-1 gap-[48px] justify-between">
          <div>
            <h1 className="font-semibold py-2 text-xl">1. Delivery Details</h1>
            <div>
              <h1 className="py-2 font-semibold">Contact information</h1>
              <div className="flex justify-between gap-3 items-center">
                <div className="py-2">
                  <label htmlFor="" className="text-slate-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Ore"
                    onChange={(e) => setName(e.target.value)}
                    className="border border-[#555555] py-4 px-6 rounded-md outline-none w-full"
                  />
                </div>

                <div>
                  <label htmlFor="" className="text-slate-700">
                    Last Name{" "}
                  </label>
                  <input
                    type="text"
                    placeholder="Godson"
                    className="border border-[#555555] py-4 px-6 rounded-md outline-none w-full"
                  />
                </div>
              </div>

              <div className="flex justify-between gap-3 items-center">
                <div className="py-2">
                  <label htmlFor="" className="text-slate-700">
                    Email address
                  </label>
                  <input
                    type="text"
                    placeholder="ore@gmail.com"
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-[#555555] py-4 px-3 rounded-md outline-none w-full"
                  />
                </div>

                <div>
                  <label htmlFor="" className="text-slate-700">
                    Number
                  </label>
                  <input
                    type="text"
                    placeholder="+23468000"
                    onChange={(e) => setPhone(e.target.value)}
                    className="border border-[#555555] py-4 px-8 rounded-md outline-none w-full"
                  />
                </div>
              </div>
            </div>

            <div>
              <h1 className="py-2 font-semibold">Shipping information</h1>
              <div className="flex gap-3 justify-between items-center">
                <div className="py-2">
                  <label htmlFor="" className="text-slate-700 px-4">
                    Country
                  </label>
                  <select
                    name=""
                    id=""
                    className="md:w-full border w-full rounded-md outline-none border-[#555555] p-4"
                  >
                    <option className="" value="">
                      Nigeria{" "}
                    </option>
                  </select>{" "}
                </div>

                <div className="flex flex-col md:block">
                  <label htmlFor="" className="text-slate-700">
                    City
                  </label>
                  <input
                    type="text"
                    placeholder="Lagos"
                    className="border border-[#555555] md:px-12 py-4 px-5 rounded-md outline-none w-full"
                  />
                </div>
              </div>

              <div className="flex gap-3 justify-between items-center">
                <div className="py-2">
                  <label htmlFor="" className="text-slate-700">
                    State/Province
                  </label>
                  <select
                    name=""
                    id=""
                    className="md:w-full border w-full rounded-md outline-none border-[#555555] p-4"
                  >
                    <option className="" value="">
                      Lagos{" "}
                    </option>
                  </select>{" "}
                </div>

                <div className="flex flex-col md:block">
                  <label htmlFor="" className="text-slate-700">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    placeholder="004"
                    className="border border-[#555555] py-4 px-5 rounded-md outline-none w-full"
                  />
                </div>
              </div>
            </div>

            <div className="py-2">
              <label htmlFor="" className="text-slate-700">
                Shipping Address 1
              </label>
              <input
                type="text"
                onChange={(e) => setAddress(e.target.value)}
                className="w-full border border-[#555555] py-4 px-5 outline-none rounded-md"
              />
            </div>
            <div className="py-2">
              <label htmlFor="" className="text-slate-700">
                Shipping Address 2 (optional)
              </label>
              <input
                type="text"
                id=""
                className="w-full border border-[#555555] py-4 px-5 outline-none rounded-md"
              />
            </div>

            <div className="flex space-x-4 items-center">
              <input type="checkbox" name="" id="checkbox" className="size-4" />
              <label htmlFor="checkbox">
                Save this information for next time
              </label>
            </div>

            <div className="py-8 space-y-4">
              <h1 className="font-semibold py-2">Shipping method</h1>
              <div
                onClick={handleEveryToggle}
                className={`flex justify-between px-6 py-4 space-x-2 border ${
                  everyToggle ? "border border-[#DB6A18]" : "border"
                }`}
              >
                <div className="flex space-x-3 py-2 items-start">
                  <label
                    htmlFor=""
                    className={`px-1 w-5 h-5 rounded-full ${
                      everyToggle ? "bg-[#DB6A18]" : ""
                    }`}
                  >
                    <input type="radio" className="" />
                  </label>
                  <div>
                    <p className="font-semibold">Everyday transport company</p>
                    <p className="text-slate-600">
                      Delivers within 1-2 business days
                    </p>
                  </div>
                </div>
                <p className="font-semibold">N10,000</p>
              </div>

              <div
                onClick={handleABCToggle}
                className={`flex justify-between px-6 py-4 space-x-2 border ${
                  abcToggle ? "border border-[#DB6A18]" : "border"
                }`}
              >
                <div className="flex space-x-3 py-2 items-start">
                  <label
                    htmlFor=""
                    className={`px-1 w-5 h-5 rounded-full ${
                      abcToggle ? "bg-[#DB6A18]" : ""
                    }`}
                  >
                    <input type="radio" className="" />
                  </label>
                  <div>
                    <p className="font-semibold">ABC transport company</p>
                    <p className="text-slate-600">
                      Delivers within 3-4 business days
                    </p>
                  </div>
                </div>
                <p className="font-semibold">N6,500</p>
              </div>

              <div
                onClick={handleGoodToggle}
                className={`flex justify-between px-6 py-4 space-x-2 border ${
                  goodToggle ? "border border-[#DB6A18]" : "border"
                }`}
              >
                <div className="flex space-x-3 py-2 items-start">
                  <label
                    htmlFor=""
                    className={`px-1 w-5 h-5 rounded-full ${
                      goodToggle ? "bg-[#DB6A18]" : ""
                    }`}
                  >
                    <input type="radio" className="" />
                  </label>
                  <div>
                    <p className="font-semibold">Goodtour bus company</p>
                    <p className="text-slate-600">
                      Delivers within 3-5 business days
                    </p>
                  </div>
                </div>
                <p className="font-semibold">N4,000</p>
              </div>

              <div className="flex space-x-4 items-center">
                <input
                  type="checkbox"
                  name=""
                  id="checkbox"
                  className="size-4"
                />
                <label htmlFor="checkbox">
                  Register for a free account, for better tracking{" "}
                </label>
              </div>
            </div>
            <h1 className="font-semibold py-2 text-xl">2. Payment</h1>

            <div className="py-4 ">
              <div className="flex items-center border border-[#DB6A18]  justify-between p-4 rounded-md bg-[#DB6A18]">
                <p className="text-white">Pay with</p>
                <img src="/visa.png" alt="" className="w-1/6" />
              </div>
              <div className="border space-y-4 py-12 flex-col text-center flex md:px-20 px-16 border-t-0">
                <div className="text-center mx-auto">
                  <CiCreditCard1 className="size-16" />
                </div>
                <div>
                  After clicking “Proceed to payment”, you will be redirected to
                  Paystack to complete your purchase securely.
                </div>
              </div>
            </div>

            <div className="flex space-x-4 mb-2 border py-5 px-2 items-center">
              <input type="radio" name="" id="radio" className="size-4" />
              <label htmlFor="radio" className="">
                Same as billing address{" "}
              </label>
            </div>
            <div className="flex space-x-4 border py-5 px-2 items-center">
              <input type="radio" name="" id="radio" className="size-4" />
              <label htmlFor="radio" className="">
                Use a different billing address
              </label>
            </div>
            <div className="hidden md:block py-6">
              <button
                onClick={() => initializePayment(onSuccess, onClose)}
                className="bg-black rounded-md p-5 text-white w-full"
              >
                Procced to payment &rarr;
              </button>
            </div>
          </div>

          {/* Purchase */}
          <div className="md:mx-14">
            <div className="flex justify-between">
              <h1 className="font-semibold py-2 px-1 text-xl">Your purchase</h1>
              <Link to="/cart">
                <p className="flex items-center gap-2">
                  Edit
                  <FaRegEdit />
                </p>
              </Link>
            </div>
            {/* <div> */}
            <div className="space-y-4 p-2">
              <div className="flex font-semibold text-lg justify-between">
                <h1>Order Summary</h1>
                <p>{cartCounter || ""} item</p>
              </div>
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>{total} </p>
              </div>
              <div className="flex py-2 justify-between">
                <p>Shipping</p>
                <p>{shipping || 0.0}</p>
              </div>
              <div className="flex py-4 font-semibold border-t border-b border-[#555555] justify-between">
                <p>Total</p>
                <p>N{total}</p>
              </div>
            </div>
            {/* </div> */}

            <div className="space-y-4 py-6">
              {cartItems.map((cart, index) => (
                <div key={index}>
                  <div className="flex justify-between">
                    <div className="flex md:gap-4 gap-2">
                      <img
                        src={cart.photos}
                        alt={cart.name}
                        className="w-[30%] md:h-fit"
                      />
                      <div className="space-y-2">
                        <p className="font-semibold">{cart.name}</p>
                        <p>Color selected</p>
                        <p>Quantity</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <p>
                        {`N${(cart.price * cart.quantity || cart.price).toFixed(
                          2
                        )}` || 0}
                      </p>
                      <div className="bg-[#E0DFFE] font-semibold rounded-full border ring ring-gray-500 h-[15px] w-[16px]"></div>
                      <p>{cart.quantity || "1"}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="block md:hidden py-6">
              <button
                onClick={() => initializePayment(onSuccess, onClose)}
                className="bg-black rounded-md p-5 text-white w-full"
              >
                Procced to payment &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* checkout end */}

      {/* Footer */}
      <div className="md:hidden">
        <div className="bg-[#0A0A0A] py-10 px-12">
          <div className="flex py-6 items-center justify-between">
            <div>
              <h1 className="font-extrabold text-white text-4xl">CHEF</h1>
            </div>
            <button className="bg-[#DB6A18] px-4 py-2 rounded-md text-white">
              Sign up
            </button>
          </div>
          <ul className="grid grid-cols-3 py-8 gap-6 text-white">
            <Link to="/">
              <li>Cookware</li>
            </Link>
            {/* <li>Kitchen </li> */}
            {/* <li>Bakeware</li> */}
            <Link to="/knives">
              <li>Knives</li>
            </Link>
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
        </div>
      </div>

      {/* Large Screen */}
      <div className="hidden md:block">
        <div className="bg-[#0A0A0A] py-10 lg:px-1 px-6">
          <div className="flex items-center justify-between py-8 md:px-14">
            <div>
              <Link to="/">
                <h1 className="font-extrabold text-white text-4xl">CHEF</h1>
              </Link>
            </div>
            <ul className="flex text-center space-x-2 items-center lg:justify-center lg:gap-16 text-white">
              {/* <li>Kitchen appliances</li> */}
              <Link to="/">
                <li>Cookware</li>
              </Link>
              {/* <li>Bakeware</li> */}
              <Link to="/knives">
                <li>Knives</li>
              </Link>

              {/* <li>Cutlery</li> */}
              <Link to="/contact">
                <li>Contact us</li>
              </Link>
            </ul>
            <button className="bg-[#DB6A18] p-2 rounded-md text-white">
              Sign up
            </button>
          </div>

          <div className="pt-36 flex items-center md:px-16 justify-between">
            <div>
              <img src="arrow.png" alt="" />
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
          <p className="text-slate-500 md:px-16 pt-14">@Oluremi | 2024</p>
        </div>
      </div>
    </>
  );
}

export default Checkout;
