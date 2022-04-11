import React from "react";

export default function CardOfCart(props) {
  return (
    <div className="m-5 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src={props.image}
            alt="gambar"
          />
        </div>
        <div className="p-8">
          <p className=" block mt-1 text-2xl font-semibold leading-tight  text-black ">
            {props.namaProduct}
          </p>
          <p className="my-5 block mt-3 text-2xl font-semibold leading-tight  text-orange-500 ">
            {props.harga}
          </p>
          <div className="flex justify-center">
            <div className="mb-3 xl:w-96">
              <label
                for="exampleNumber0"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Number input
              </label>
              <input
                type="number"
                className="
                    form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
                id="exampleNumber0"
                placeholder="Number input"
              />
            </div>
          </div>
          <p className="my-5 block mt-3 text-2xl font-semibold leading-tight  text-orange-500 ">
            <span className="text-sm text-slate-500 font-normal">
              sub total
            </span>{" "}
            {props.subTotal}
          </p>
          <button
            type="button"
            className="my-5 mt-4 inline-block px-10 py-2.5  bg-orange-600 text-white font-semibold text-xs leading-tight  rounded-full shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
