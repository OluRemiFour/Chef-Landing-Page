import { BsCart2 } from "react-icons/bs";

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
          <div className="flex flex-col space-y-3 border rounded-md p-6 w-fit">
            <div>
              <img src="/section-img.png" alt="img" className="size-full" />
            </div>
            <div className="flex justify-between font-semibold">
              <h1>Classic Non-stick Set</h1>
              <p>N190, 000</p>
            </div>
            <p className="text-[14.2px] w-fit py-2">
              This 5-quart pot is crafted from high-quality, durable materials
              that ensure even heat distribution.
            </p>
            <div className="flex items-center justify-between">
              <p>Available colors</p>
              <div className="flex gap-2">
                <div className="bg-[#E0DFFE] font-semibold rounded-full border ring ring-gray-500 h-[18px] w-[18px]"></div>
                <div className="bg-[#5754BA] rounded-full h-[18px] w-[18px]"></div>
                <div className="bg-[#DEAE55] rounded-full h-[18px] w-[18px]"></div>
              </div>
            </div>

            <div className="flex justify-between py-4 items-center">
              <div>
                <p>Sizes in set</p>
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

          <div className="flex flex-col space-y-3 border rounded-md p-6 w-fit">
            <div>
              <img src="/section-img2.png" alt="img" className="size-full" />
            </div>
            <div className="flex justify-between font-semibold">
              <h1>Stain-free frying pan </h1>
              <p>N190, 000</p>
            </div>
            <p className="text-[14.2px] w-fit py-2">
              This 5-quart pot is crafted from high-quality, durable materials
              that ensure even heat distribution.
            </p>
            <div className="flex items-center justify-between">
              <p>Available colors</p>
              <div className="flex gap-2">
                <div className="bg-[#E0DFFE] font-semibold rounded-full border ring ring-gray-500 h-[18px] w-[18px]"></div>
                <div className="bg-[#1F130A] rounded-full h-[18px] w-[18px]"></div>
                <div className="bg-[#DEAE55] rounded-full h-[18px] w-[18px]"></div>
              </div>
            </div>

            <div className="flex justify-between py-4 items-center">
              <div>
                <p>Sizes in set</p>
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

          <div className="flex flex-col space-y-3 border rounded-md p-6 w-fit">
            <div>
              <img src="/section-img1.png" alt="img" className="size-full" />
            </div>
            <div className="flex justify-between font-semibold">
              <h1>Transparent Kettle</h1>
              <p>N100, 000</p>
            </div>
            <div className="w-fit">
              <p className="text-[14.2px] py-2">
                This 5-quart pot is crafted from high-quality, durable materials
                that ensure even heat distribution.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p>Available colors</p>
              <div className="flex gap-2">
                <div className="bg-[#E0DFFE] font-semibold rounded-full border ring ring-gray-500 h-[18px] w-[18px]"></div>
                <div className="bg-[#5754BA] rounded-full h-[18px] w-[18px]"></div>
                <div className="bg-[#DEAE55] rounded-full h-[18px] w-[18px]"></div>
              </div>
            </div>

            <div className="flex justify-between py-4 items-center">
              <div>
                <p>Sizes in set</p>
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
          <div className="flex flex-col space-y-3 border rounded-md p-6 w-fit">
            <div>
              <img src="/section-img3.png" alt="img" className="size-full" />
            </div>
            <div className="flex justify-between font-semibold">
              <h1>Superior Non-stick Set</h1>
              <p>N290, 000</p>
            </div>
            <p className="text-[14.2px] w-fit py-2">
              This 5-quart pot is crafted from high-quality, durable materials
              that ensure even heat distribution.
            </p>
            <div className="flex items-center justify-between">
              <p>Available colors</p>
              <div className="flex gap-2">
                <div className="bg-[#471A1A] font-semibold rounded-full border ring ring-gray-500 h-[18px] w-[18px]"></div>
                <div className="bg-[#5754BA] rounded-full h-[18px] w-[18px]"></div>
                <div className="bg-[#DEAE55] rounded-full h-[18px] w-[18px]"></div>
              </div>
            </div>

            <div className="flex justify-between py-4 items-center">
              <div>
                <p>Sizes in set</p>
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

          <div className="flex flex-col space-y-3 border rounded-md p-6 w-fit">
            <div>
              <img src="/section-img4.png" alt="img" className="size-full" />
            </div>
            <div className="flex justify-between font-semibold">
              <h1>Non-rust frying pan</h1>
              <p>N80, 000</p>
            </div>
            <p className="text-[14.2px] w-fit py-2">
              This 5-quart pot is crafted from high-quality, durable materials
              that ensure even heat distribution.
            </p>
            <div className="flex items-center justify-between">
              <p>Available colors</p>
              <div className="flex gap-2">
                <div className="bg-[#E0DFFE] font-semibold rounded-full border ring ring-gray-500 h-[18px] w-[18px]"></div>
                <div className="bg-[#1F130A] rounded-full h-[18px] w-[18px]"></div>
                <div className="bg-[#DEAE55] rounded-full h-[18px] w-[18px]"></div>
              </div>
            </div>

            <div className="flex justify-between py-4 items-center">
              <div>
                <p>Sizes in set</p>
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

          <div className="flex flex-col space-y-3 border rounded-md p-6 w-fit">
            <div>
              <img src="/section-img5.png" alt="img" className="size-full" />
            </div>
            <div className="flex justify-between font-semibold">
              <h1>Double coat Non-stick</h1>
              <p>N100, 000</p>
            </div>
            <p className="text-[14.2px] w-fit py-2">
              This 5-quart pot is crafted from high-quality, durable materials
              that ensure even heat distribution.
            </p>
            <div className="flex items-center justify-between">
              <p>Available colors</p>
              <div className="flex gap-2">
                <div className="bg-[#E0DFFE] font-semibold rounded-full border ring ring-gray-500 h-[18px] w-[18px]"></div>
                <div className="bg-[#5754BA] rounded-full h-[18px] w-[18px]"></div>
                <div className="bg-[#DEAE55] rounded-full h-[18px] w-[18px]"></div>
              </div>
            </div>

            <div className="flex justify-between py-4 items-center">
              <div>
                <p>Sizes in set</p>
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
