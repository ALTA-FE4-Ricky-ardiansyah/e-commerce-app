import React, { useEffect } from "react";
import CardOfCart from "../components/CardOfCart";
import NavbarComponent from "../components/NavbarComponent";
import { checkAuth } from "../service/Auth";
import { useNavigate } from "react-router-dom";

export default function ShopingCart() {
  const navigate = useNavigate();

  useEffect(() => {
    Auth();
  }, []);

  const Auth = () => {
    // ambil localstorage
    const data = localStorage.getItem("user-info");
    // cek apakah ada localStorage
    if (data) {
      // convert json yang awalnya bentuk string jadi objek
      const json = JSON.parse(data);
      // check token
      checkAuthData(json.Token);
      // ambil namanya
    } else {
      navigate("/login");
    }
  };

  const checkAuthData = async (token) => {
    const Auth = await checkAuth(token);
    if (Auth.code !== 200) {
      localStorage.removeItem("user-info");
      navigate("/login");
    }
  };

  return (
    <div className="h-screen bg-slate-100">
      <NavbarComponent label={"Cart"} />
      <CardOfCart />
      <div className="m-10 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
        <div className="p-8">
          <div class="flex justify-between ...">
            <div>
              <p className="text-orange-600 text-lg font-semibold mb-4">
                <span className="text-slate-900 font-normal">Total Qty</span>{" "}
                Rp. 500,000
              </p>
            </div>
            <div>
              <button
                type="button"
                className=" inline-block px-10 py-2.5  bg-orange-600 text-white font-semibold text-xs leading-tight  rounded-full shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Check out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
