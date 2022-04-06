import React from "react";

export default function Card() {
  return (
    <div className="mt-9 flex justify-center">
      <div className="w-60 rounded-lg shadow-lg bg-white max-w-sm ">
        <a href="#!">
          <img
            className="rounded-t-lg"
            src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
            alt=""
          />
        </a>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-bold  mb-2 ">Card title</h5>
          <p className="text-orange-600 text-lg font-semibold mb-4">
            RP. 1.000.000
          </p>
          <button
            type="button"
            className=" inline-block px-10 py-2.5  bg-orange-600 text-white font-semibold text-xs leading-tight  rounded-full shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Add to Chart
          </button>
        </div>
      </div>
    </div>
  );
}
