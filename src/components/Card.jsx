import React from "react";
// import { Link } from "react-router-dom";
export default function Card(props) {
  return (
    // <Link href={`/product/${props.id}`}>
    <div className="mt-9 mx-5">
      <div className="w-60 rounded-lg shadow-lg bg-white max-w-sm ">
        <a href="#!">
          <img className="rounded-t-lg" src={props.image} alt="" />
        </a>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-bold  mb-2 ">
            {props.namaProduct}
          </h5>
          <p className="text-orange-600 text-lg font-semibold mb-4">
            {props.harga}
          </p>
          <button
            type="button"
            className=" inline-block px-10 py-2.5  bg-orange-600 text-white font-semibold text-xs leading-tight  rounded-full shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    // </Link>
  );
}
