import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import Cookware from "../features/Cookware";
import Group from "../../public/Group.png";
// import HeroImage from "../../public/heroback.png";
// import smallImage from "../../public/small.png";

function Hero() {
  return (
    <>
      <div className="md:hidden">
        <div className="bg-[#0A0A0A]">
          <div className="bg-[#0A0A0A] pt-10 pb-5 px-8 flex items-center justify-between">
            <div className="flex gap-4">
              <div>
                <img src="/Icons.png" alt="burger" />
              </div>
              <Link to="/">
                <div>
                  <img src="/LOGO.png" alt="logo" />
                </div>
              </Link>
            </div>
            <div className="flex text-white gap-4 text-[20px]">
              <FaRegUser />
              <MdFavoriteBorder />
              <Link to="cart">
                <BsCart2 />
                <p className="bg-red-600 rounded-full px-1 text-center text-sm text-white">
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
              className="bg-[#292929] py-4 px-16 outline-none w-[23rem] text-lg rounded-md "
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
                <img src="/LOGO.png" />
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
            <Link to="cart">
              <BsCart2 />
              <p className="bg-red-600 rounded-full px-1 text-sm text-center text-white">
                2
              </p>
            </Link>
          </div>
        </div>

        <div>
          <div>
            <ul className="bg-[#DB6A18] flex justify-center items-center gap-14 py-4 text-white text-[16px]">
              <li>
                <Link>Cookware</Link>
              </li>
              <li>
                <Link>Kitchen appliances</Link>
              </li>
              <li>
                <Link>Bakeware</Link>
              </li>
              <li>
                <Link>Knives</Link>
              </li>
              <li>
                <Link>Cutlery</Link>
              </li>
              <li>
                <Link>Contact us</Link>
              </li>
            </ul>
            <div
              // src={{ backgroundImage: `url(${HeroImage})` }}
              className="h-[100%] back object-contain"
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
      <Cookware />
    </>
  );
}

export default Hero;
