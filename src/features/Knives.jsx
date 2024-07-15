import { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";

function ProductList({ knives, handleAddToCart, imageBaseUrl }) {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedItems = knives?.slice(startIndex, startIndex + itemsPerPage);

  const totalPages = Math.ceil(knives?.length / itemsPerPage);

  return (
    <div className="lg:mx-16 my-14">
      <div className="pb-12">
        <h1 className="font-bold text-3xl py-5 text-center mx-auto w-fit">
          {" "}
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
      </div>

      <div className="md:grid md:grid-cols-3 gap-4 space-y-4 md:space-y-0">
        {selectedItems.map((knife, index) => (
          <div
            key={index}
            className="flex flex-col space-y-[12px] border rounded-md py-8 px-4 w-fit"
          >
            <div>
              {knife.photos && knife.photos?.length > 0 && (
                <img
                  src={`${imageBaseUrl}${knife.photos[0].url}`}
                  alt={knife.name}
                  className="size-full"
                />
              )}
              <div className="bg-[#DB6A18] rounded-full mt-[-3.4rem] flex mr-auto mx-4 absolute opacity-[88px] w-[40px] h-[40px] items-center justify-center">
                <MdFavoriteBorder className="text-white size-6" />
              </div>
            </div>

            <div className="flex justify-between font-semibold">
              <h1>{knife.name}</h1>
              <p>N190</p>
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

              <button
                onClick={() => handleAddToCart(knife)}
                className="flex gap-2 border p-2 rounded-md border-black items-center"
              >
                <p>Add to cart</p>
                <BsCart2 />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center space-x-4 mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 border ${
              currentPage === index + 1 ? "bg-[#DB6A18] text-white" : "bg-white"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
