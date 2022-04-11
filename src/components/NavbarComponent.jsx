import React from "react";
import cart from "../assets/shopping-cart(1).png";
import userIcon from "../assets/user.png";
import { checkAuth } from "../service/Auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function NavbarComponent(props) {
  const navigate = useNavigate();

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
      return (
        <span>
          Hallo {json.User.username === "" ? "User" : json.User.username}
        </span>
      );
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
    <nav className=" block px-6 py-4 shadow-lg bg-slate-100 w-full">
      <div className="flex justify-between">
        <div>
          <h5 className="text-gray-900 text-xl leading-tight font-bold italic mb-2">
            <a href="/">PROJECTMART</a>
            <span className="font-normal italic">
              {props.label ? ` | ${props.label}` : ""}
            </span>
          </h5>
        </div>
        <div className="flex justify-center">
          <a href="/cart">
            <img className="w-7" src={cart} alt="shopcart" />
          </a>

          <a href="/sellProduct">
            <img className="w-7 h-7  mx-6" src={userIcon} alt="userIcon" />
          </a>
          {Auth()}
        </div>
      </div>
    </nav>
  );
}
