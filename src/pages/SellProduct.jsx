import React from "react";
// import Card2 from "../components/Card2";
import MenuComponent from "../components/MenuComponent";
import NavbarComponent from "../components/NavbarComponent";
import banner from "../assets/banner.jpg";

export default function SellProduct() {
  return (
    <div className="bg-slate-100 h-screen">
      <NavbarComponent />
      <div class="flex justify-center mt-10">
        <div class="block p-6 rounded-lg shadow-lg bg-white w-9/12">
          <div class="flex justify-center">
            <h5>Sell Product</h5>
          </div>
          <form class="mt-6">
            <div class="form-group mb-6">
              <input
                type=""
                class="form-control
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
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id=""
                aria-describedby=""
                placeholder="Product name"
              ></input>
            </div>
            <div class="form-group mb-6">
              <input
                type=""
                class="form-control
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
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id=""
                aria-describedby=""
                placeholder="Price"
              ></input>
            </div>
            <div class="form-group mb-6">
              <input
                type=""
                class="form-control
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
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id=""
                aria-describedby=""
                placeholder="link picture"
              ></input>
            </div>
            <div class="form-group mb-6">
              <input
                type=""
                class="form-control
                block
                w-full
                px-3
                py-8
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id=""
                aria-describedby=""
                placeholder="description"
              ></input>
            </div>
          </form>
          <div class="flex justify-end">
            <button
              type="submit"
              class="
            px-6
            py-2.5
            bg-orange-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-orange-700 hover:shadow-lg
            focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-orange-700 active:shadow-lg
            transition
            duration-150
            ease-in-out"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div class="flex justify-center mt-10">
        <div class="block p-6 rounded-lg shadow-lg bg-white w-9/12">
          <div class="flex justify-center">
            <h5>Your Product</h5>
          </div>
          <div>{/* <Card2 /> */}</div>
        </div>
      </div>
    </div>
  );
}
