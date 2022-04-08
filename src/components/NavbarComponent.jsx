import React from "react";
import cart from "../assets/shopping-cart(1).png";
import userIcon from "../assets/user.png";

export default function NavbarComponent(props) {
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
          <img className="w-7 h-7  mx-6" src={userIcon} alt="userIcon" />
        </div>
      </div>
    </nav>
  );
}
