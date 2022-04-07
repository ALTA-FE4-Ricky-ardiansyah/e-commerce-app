import React from "react";

export default function NavbarComponent(props) {
  return (
    <nav className=" block px-6 py-4 shadow-lg bg-slate-100 w-full">
      <div className="flex justify-between">
        <div>
          <h5 className="text-gray-900 text-xl leading-tight font-bold italic mb-2">
            PROJECTMART
            <span className="font-normal italic">
              {props.label ? ` | ${props.label}` : ""}
            </span>
          </h5>
        </div>
        <div>
          <i class="fi fi-rr-shopping-cart"></i>
        </div>
      </div>
    </nav>
  );
}
