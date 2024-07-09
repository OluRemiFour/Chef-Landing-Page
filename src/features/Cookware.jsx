import { BsCart2 } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";

function Cookware() {
  return (
    <div className="lg:mx-16 my-14">
      <div className="pb-12">
        <h1 className="font-bold text-3xl py-5 text-center mx-auto w-fit">
          Cookware Collection
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
              <img src="/section-img.png" alt="img" className="size-full" />
              <div className="bg-[#DB6A18]  md:hidden rounded-full mt-[-3.4rem] lg:ml-[22%] flex ml-[68%] absolute opacity-[88px] w-[40px] h-[40px] lg:flex items-center justify-center">
                <MdFavoriteBorder className="text-white size-6" />
              </div>
            </div>
            <div className="flex justify-between font-semibold">
              <h1>Classic Non-stick Set</h1>
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
              <img src="/section-img2.png" alt="img" className="size-full" />
              <div className="bg-[#DB6A18]  md:hidden rounded-full mt-[-3.4rem] lg:ml-[22%] flex ml-[68%] absolute opacity-[88px] w-[40px] h-[40px] lg:flex items-center justify-center">
                <MdFavoriteBorder className="text-white size-6" />
              </div>
            </div>
            <div className="flex justify-between font-semibold">
              <h1>Stain-free frying pan </h1>
              <p>N190, 000</p>
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
              <img src="/section-img1.png" alt="img" className="size-full" />
              <div className="bg-[#DB6A18]  md:hidden rounded-full mt-[-3.4rem] lg:ml-[22%] flex ml-[68%] absolute opacity-[88px] w-[40px] h-[40px] lg:flex items-center justify-center">
                <MdFavoriteBorder className="text-white size-6" />
              </div>
            </div>
            <div className="flex justify-between font-semibold">
              <h1>Transparent Kettle</h1>
              <p>N100, 000</p>
            </div>
            <div className="w-fit">
              <h3 className="text-[14px]">
                This 5-quart pot is crafted from high-quality, durable materials
                that ensure even heat distribution and long-lasting performance.
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
              <img src="/section-img3.png" alt="img" className="size-full" />
              <div className="bg-[#DB6A18]  md:hidden rounded-full mt-[-3.4rem] lg:ml-[22%] flex ml-[68%] absolute opacity-[88px] w-[40px] h-[40px] lg:flex items-center justify-center">
                <MdFavoriteBorder className="text-white size-6" />
              </div>
            </div>
            <div className="flex justify-between font-semibold">
              <h1>Superior Non-stick Set</h1>
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
              <img src="/section-img4.png" alt="img" className="size-full" />
              <div className="bg-[#DB6A18]  md:hidden rounded-full mt-[-3.4rem] lg:ml-[22%] flex ml-[68%] absolute opacity-[88px] w-[40px] h-[40px] lg:flex items-center justify-center">
                <MdFavoriteBorder className="text-white size-6" />
              </div>
            </div>
            <div className="flex justify-between font-semibold">
              <h1>Non-rust frying pan</h1>
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
              <img src="/section-img5.png" alt="img" className="size-full" />
              <div className="bg-[#DB6A18]  md:hidden rounded-full mt-[-3.4rem] lg:ml-[22%] flex ml-[68%] absolute opacity-[88px] w-[40px] h-[40px] lg:flex items-center justify-center">
                <MdFavoriteBorder className="text-white size-6" />
              </div>
            </div>
            <div className="flex justify-between font-semibold">
              <h1>Double coat Non-stick</h1>
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
  );
}

export default Cookware;
