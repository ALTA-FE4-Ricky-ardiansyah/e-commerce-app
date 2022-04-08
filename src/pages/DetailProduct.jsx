import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MenuComponent from "../components/MenuComponent";
import NavbarComponent from "../components/NavbarComponent";
import { getProduct } from "../service/Product";

export default function DetailProduct() {
  const [product, setProduct] = useState({});
  const params = useParams();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await getProduct(params.product_id);
    setProduct(response.data);
    console.log(product);
    // if (response.code === 200) {
    //   setProduct(response.data);
    // } else {
    //   alert("Something error, please reload");
    // }
  };

  return (
    <div
      className="bg-slate-100 h-screen
    "
    >
      <div>
        <NavbarComponent />
        <div className="flex justify-center">
          <MenuComponent />
        </div>
        <div className="m-5 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full md:w-48"
                src={product.image}
                alt="gambar"
              />
            </div>
            <div className="p-8">
              <p className=" block mt-1 text-2xl font-semibold leading-tight  text-black ">
                {product.title}
              </p>
              <p className="mt-2 text-slate-500">{product.description}</p>
              <p className="my-5 block mt-3 text-2xl font-semibold leading-tight  text-orange-500 ">
                Rp. {product.price}
              </p>
              <button
                type="button"
                className="my-5 mt-4 inline-block px-10 py-2.5  bg-orange-600 text-white font-semibold text-xs leading-tight  rounded-full shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
