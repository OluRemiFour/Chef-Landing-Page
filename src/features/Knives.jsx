import { BsCart2 } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import Group from "../../public/Group.png";
import Footer from "../components/Footer";

function Knives() {
  return (
    <>
      <div className="md:hidden">
        <div className="bg-[#0A0A0A]">
          <div className="bg-[#0A0A0A] pt-10 pb-5 px-8 flex items-center justify-between">
            <div className="flex gap-4 items-center">
              <div>
                <img src="/Icons.png" alt="burger" />
              </div>
              <Link to="/">
                <div>
                  <h1 className="font-extrabold text-white text-4xl">CHEF</h1>

                  {/* <img src="/LOGO.png" alt="logo" /> */}
                </div>
              </Link>
            </div>
            <div className="flex text-white gap-4 text-[20px]">
              <FaRegUser />
              <MdFavoriteBorder />
              <Link to="/cart">
                <BsCart2 className="relative" />
                <p className="bg-red-600 absolute mt-[-1.6rem] ml-3 rounded-full px-[6px] text-center text-sm text-white">
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
              className="bg-[#292929] py-4 px-16 outline-none w-[23rem] text-lg rounded-md text-white"
            />
          </div>
        </div>
        <div>
          <img src={Group} className="w-[100%] object-fill h-fit" />
          {/* <div className="text-white z-50 text-center">
            <h1 className="text-[38px] absolute right-0 left-0 mx-auto mt-[-14rem] font-semibold">
              Built to last, Cook with Confidence
            </h1>
            <p className="text-lg px-16 absolute right-0 left-0 mx-auto py-14 mt-[-10rem]">
              Limited edition! Get yours before they’re gone again, shop the
              collection now!
            </p>
          </div> */}
        </div>
      </div>

      {/* Large Screen */}
      <div className="hidden md:block">
        <div className="bg-[#0A0A0A] py-10 px-16 flex items-center justify-between">
          <div className="flex">
            <div className="flex items-center">
              <div>
                <h1 className="font-extrabold text-white text-5xl">CHEF</h1>

                {/* <img src="/LOGO.png" /> */}
              </div>
              <div className="flex space-x-7">
                <CiSearch className="absolute size-6 text-gray-400 my-3 mx-12" />
                <input
                  type="text"
                  placeholder="Search products"
                  className="bg-[#292929] py-[14px] px-14 outline-none md:w-[20rem] lg:w-[18rem] text-[14px] text-white rounded-md "
                />
              </div>
            </div>
          </div>

          <div className="flex text-white gap-8 text-[20px]">
            <FaRegUser />
            <MdFavoriteBorder />
            <Link to="/cart">
              <BsCart2 className="" />
              <p className="bg-red-600 hover:bg-[#0a0a0a] duration-500 transition-all absolute mt-[-1.6rem] ml-3 rounded-full px-[6px] text-center text-sm text-white">
                2
              </p>
            </Link>
          </div>
        </div>

        <div>
          <div>
            <ul className="bg-[#DB6A18] flex justify-center items-center gap-14 py-4 text-white text-[16px]">
              <li>
                <NavLink to="/">Cookware</NavLink>
              </li>
              {/* <li>
                <NavLink to="kitchen">Kitchen appliances</NavLink>
              </li> */}
              {/* <li>
                <NavLink to="bakeware">Bakeware</NavLink>
              </li> */}
              <li>
                <NavLink to="/knives">Knives</NavLink>
              </li>
              {/* <li>
                <NavLink to="cutlery">Cutlery</NavLink>
              </li> */}
              <li>
                <NavLink to="/contact">Contact us</NavLink>
              </li>
            </ul>
            <div
              // src={{ backgroundImage: `url(${HeroImage})` }}
              className="h-[100%] back bg-[url('/back.png')] object-contain"
            >
              <div className="text-white text-center py-56">
                <h1 className="text-[44px] font-semibold">
                  Built to last, Cook with Confidence
                </h1>
                <p className="text-lg">
                  Limited edition! Get yours before they’re gone again, shop the
                  collection now!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* knives */}
      <div className="lg:mx-16 my-14">
        <div className="pb-12">
          <h1 className="font-bold text-3xl py-5 text-center mx-auto w-fit">
            Knives Collection
          </h1>
          <img src="/Line.png" alt="line" className="mx-auto w-fit" />
        </div>

        <div>
          <div className="flex items-center justify-between m-8">
            <p className="">6 items found </p>
            <div className="border p-2">
              {" "}
              Sort by:
              <select
                name=""
                id=""
                className="text-[#DB6A18] px-1 font-semibold text-sm outline-none"
              >
                <option value="">Popularity</option>
              </select>
            </div>
          </div>

          <div className="lg:m-8 m-4 space-y-4 md:space-y-0 md:flex gap-4 justify-between">
            <div className="flex flex-col space-y-[12px] border rounded-md py-8 px-4 w-fit">
              <div>
                <img src="/section1.png" alt="img" className="size-full" />
                <div className="bg-[#DB6A18]  md:hidden rounded-full mt-[-3.4rem] lg:ml-[22%] flex ml-[68%] absolute opacity-[88px] w-[40px] h-[40px] lg:flex items-center justify-center">
                  <MdFavoriteBorder className="text-white size-6" />
                </div>
              </div>
              <div className="flex justify-between font-semibold">
                <h1>Classic knife Set</h1>
                <p>N190, 000</p>
              </div>
              <h3 className="text-[14px] w-fit">
                This 5-quart pot is crafted from high-quality, durable materials
                that ensure even heat distribution and long-lasting performance.
              </h3>
              <div className="flex items-center justify-between">
                <p className="font-semibold">Available colors</p>
                <div className="flex gap-2">
                  <div className="bg-[#E0DFFE] font-semibold rounded-full border ring ring-gray-500 h-[18px] w-[18px]"></div>
                  <div className="bg-[#5754BA] rounded-full h-[18px] w-[18px]"></div>
                  <div className="bg-[#DEAE55] rounded-full h-[18px] w-[18px]"></div>
                </div>
              </div>

              <div className="flex justify-between pt-4 items-center">
                <div>
                  <p className="font-semibold">Sizes in set</p>
                  <div className="flex gap-2">
                    <p>12</p>
                    <p>20</p>
                    <p>24</p>
                  </div>
                </div>

                <button className="flex gap-2 border p-2 rounded-md border-black items-center">
                  <p>Add to cart</p>
                  <BsCart2 />
                </button>
              </div>
            </div>

            <div className="flex flex-col space-y-[12px] border rounded-md py-8 px-4 w-auto">
              <div>
                <img src="/section2.png" alt="img" className="size-full" />
                <div className="bg-[#DB6A18]  md:hidden rounded-full mt-[-3.4rem] lg:ml-[22%] flex ml-[68%] absolute opacity-[88px] w-[40px] h-[40px] lg:flex items-center justify-center">
                  <MdFavoriteBorder className="text-white size-6" />
                </div>
              </div>
              <div className="flex justify-between font-semibold">
                <h1>Rare Knife Set</h1>
                <p>N90, 000</p>
              </div>
              <h3 className="text-[14px] w-fit">
                {/* This 5-quart pot is crafted from high-quality, durable materials
              that ensure even heat distribution. */}
                This 5-quart pot is crafted from high-quality, durable materials
                that ensure even heat distribution and long-lasting performance.
              </h3>
              <div className="flex items-center justify-between">
                <p className="font-semibold">Available colors</p>
                <div className="flex gap-2">
                  <div className="bg-[#E0DFFE] font-semibold rounded-full border ring ring-gray-500 h-[18px] w-[18px]"></div>
                  <div className="bg-[#1F130A] rounded-full h-[18px] w-[18px]"></div>
                  <div className="bg-[#DEAE55] rounded-full h-[18px] w-[18px]"></div>
                </div>
              </div>

              <div className="flex justify-between py-4 items-center">
                <div>
                  <p className="font-semibold">Sizes in set</p>
                  <div className="flex gap-2">
                    <p>12</p>
                    <p>20</p>
                    <p>24</p>
                  </div>
                </div>

                <button className="flex gap-2 border p-2 rounded-md border-black items-center">
                  <p>Add to cart</p>
                  <BsCart2 />
                </button>
              </div>
            </div>

            <div className="flex flex-col space-y-[12px] border rounded-md py-8 px-4 w-fit">
              <div>
                <img src="/section3.png" alt="img" className="size-full" />
                <div className="bg-[#DB6A18]  md:hidden rounded-full mt-[-3.4rem] lg:ml-[22%] flex ml-[68%] absolute opacity-[88px] w-[40px] h-[40px] lg:flex items-center justify-center">
                  <MdFavoriteBorder className="text-white size-6" />
                </div>
              </div>
              <div className="flex justify-between font-semibold">
                <h1>Steel Metal knife</h1>
                <p>N100, 000</p>
              </div>
              <div className="w-fit">
                <h3 className="text-[14px]">
                  This 5-quart pot is crafted from high-quality, durable
                  materials that ensure even heat distribution and long-lasting
                  performance.
                </h3>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-semibold">Available colors</p>
                <div className="flex gap-2">
                  <div className="bg-[#E0DFFE] font-semibold rounded-full border ring ring-gray-500 h-[18px] w-[18px]"></div>
                  <div className="bg-[#5754BA] rounded-full h-[18px] w-[18px]"></div>
                  <div className="bg-[#DEAE55] rounded-full h-[18px] w-[18px]"></div>
                </div>
              </div>

              <div className="flex justify-between py-4 items-center">
                <div>
                  <p className="font-semibold">Sizes in set</p>
                  <div className="flex gap-2">
                    <p>24</p>
                  </div>
                </div>

                <button className="flex gap-2 border p-2 rounded-md border-black items-center">
                  <p>Add to cart</p>
                  <BsCart2 />
                </button>
              </div>
            </div>
          </div>

          <div className="lg:m-8 m-4 md:flex gap-4 justify-between">
            <div className="flex flex-col space-y-[12px] border rounded-md py-8 px-4 w-fit">
              <div>
                <img src="/section4.png" alt="img" className="size-full" />
                <div className="bg-[#DB6A18]  md:hidden rounded-full mt-[-3.4rem] lg:ml-[22%] flex ml-[68%] absolute opacity-[88px] w-[40px] h-[40px] lg:flex items-center justify-center">
                  <MdFavoriteBorder className="text-white size-6" />
                </div>
              </div>
              <div className="flex justify-between font-semibold">
                <h1>Black Crested knife </h1>
                <p>N290, 000</p>
              </div>
              <h3 className="text-[14px] w-fit">
                This 5-quart pot is crafted from high-quality, durable materials
                that ensure even heat distribution and long-lasting performance.
              </h3>
              <div className="flex items-center justify-between">
                <p className="font-semibold">Available colors</p>
                <div className="flex gap-2">
                  <div className="bg-[#471A1A] font-semibold rounded-full border ring ring-gray-500 h-[18px] w-[18px]"></div>
                  <div className="bg-[#5754BA] rounded-full h-[18px] w-[18px]"></div>
                  <div className="bg-[#DEAE55] rounded-full h-[18px] w-[18px]"></div>
                </div>
              </div>

              <div className="flex justify-between py-4 items-center">
                <div>
                  <p className="font-semibold">Sizes in set</p>
                  <div className="flex gap-2">
                    <p>12</p>
                    <p>20</p>
                    <p>24</p>
                    <p>32</p>
                  </div>
                </div>

                <button className="flex gap-4 border p-2 rounded-md border-black items-center">
                  <p>Add to cart</p>
                  <BsCart2 />
                </button>
              </div>
            </div>

            <div className="flex flex-col space-y-[12px] border rounded-md py-8 px-4 w-fit">
              <div>
                <img src="/section5.png" alt="img" className="size-full" />
                <div className="bg-[#DB6A18]  md:hidden rounded-full mt-[-3.4rem] lg:ml-[22%] flex ml-[68%] absolute opacity-[88px] w-[40px] h-[40px] lg:flex items-center justify-center">
                  <MdFavoriteBorder className="text-white size-6" />
                </div>
              </div>
              <div className="flex justify-between font-semibold">
                <h1>Striped Knife Set</h1>
                <p>N80, 000</p>
              </div>
              <h3 className="text-[14px] w-fit">
                This 5-quart pot is crafted from high-quality, durable materials
                that ensure even heat distribution and long-lasting performance.
              </h3>
              <div className="flex items-center justify-between">
                <p className="font-semibold">Available colors</p>
                <div className="flex gap-2">
                  <div className="bg-[#E0DFFE] font-semibold rounded-full border ring ring-gray-500 h-[18px] w-[18px]"></div>
                  <div className="bg-[#1F130A] rounded-full h-[18px] w-[18px]"></div>
                  <div className="bg-[#DEAE55] rounded-full h-[18px] w-[18px]"></div>
                </div>
              </div>

              <div className="flex justify-between py-4 items-center">
                <div>
                  <p className="font-semibold">Sizes in set</p>
                  <div className="flex gap-2">
                    <p>24</p>
                  </div>
                </div>

                <button className="flex gap-2 border p-2 rounded-md border-black items-center">
                  <p>Add to cart</p>
                  <BsCart2 />
                </button>
              </div>
            </div>

            <div className="flex flex-col space-y-[12px] border rounded-md py-8 px-4 w-fit">
              <div>
                <img src="/section6.png" alt="img" className="size-full" />
                <div className="bg-[#DB6A18]  md:hidden rounded-full mt-[-3.4rem] lg:ml-[22%] flex ml-[68%] absolute opacity-[88px] w-[40px] h-[40px] lg:flex items-center justify-center">
                  <MdFavoriteBorder className="text-white size-6" />
                </div>
              </div>
              <div className="flex justify-between font-semibold">
                <h1>Hand Forged Set</h1>
                <p>N100, 000</p>
              </div>
              <h3 className="text-[14px] w-fit">
                This 5-quart pot is crafted from high-quality, durable materials
                that ensure even heat distribution and long-lasting performance.
              </h3>
              <div className="flex items-center justify-between">
                <p className="font-semibold">Available colors</p>
                <div className="flex gap-2">
                  <div className="bg-[#E0DFFE] font-semibold rounded-full border ring ring-gray-500 h-[18px] w-[18px]"></div>
                  <div className="bg-[#5754BA] rounded-full h-[18px] w-[18px]"></div>
                  <div className="bg-[#DEAE55] rounded-full h-[18px] w-[18px]"></div>
                </div>
              </div>

              <div className="flex justify-between py-4 items-center">
                <div>
                  <p className="font-semibold">Sizes in set</p>
                  <div className="flex gap-2">
                    <p>12</p>
                    <p>20</p>
                    <p>24</p>
                  </div>
                </div>

                <button className="flex gap-2 border p-2 rounded-md border-black items-center">
                  <p>Add to cart</p>
                  <BsCart2 />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Knives;
