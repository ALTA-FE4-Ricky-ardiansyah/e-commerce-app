import React from "react";
import Card from "../components/Card";
import MenuComponent from "../components/MenuComponent";
import NavbarComponent from "../components/NavbarComponent";
import banner from "../assets/banner.jpg";

export default function Home() {
  return (
    <div className="bg-slate-100">
      <NavbarComponent />
      <div className="justify-center">
        <img className="w-screen mt-1" src={banner} alt="banner" />
      </div>
      <div className="flex justify-center">
        <MenuComponent />
      </div>
      <div>
        <Card />
      </div>
      <div>neh</div>
    </div>
  );
}
