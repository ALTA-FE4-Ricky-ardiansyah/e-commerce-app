import React, { useState } from "react";
import Card from "../components/Card";
import MenuComponent from "../components/MenuComponent";
import NavbarComponent from "../components/NavbarComponent";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [name, setName] = useState({});
  const [password, setPassword] = useState({});
  const [email, setEmail] = useState({});

  // for login
  const [passwordLogin, setPasswordLogin] = useState(null);
  const [emailLogin, setEmailLogin] = useState(null);

  const navigate = useNavigate();

  async function signup() {
    let item = { name, password, email };
    console.warn(name, password, email);

    let result = await fetch("http://34.238.121.143:8000/api/users", {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "Content-Type": "text/plain", Accept: "*/*" },
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate("/home");
    alert("halo");
  }

  async function signIn() {
    let result = await fetch("http://34.238.121.143:8000/api/auth", {
      method: "POST",
      body: {
        username: emailLogin,
        password: passwordLogin,
      },
      headers: { "Content-Type": "text/plain", Accept: "*/*" },
    });
    result = await result.json();
    console.log(result.data);
    localStorage.setItem("user-info", JSON.stringify(result.data));
    navigate("/home");
  }

  return (
    <div className="bg-slate-100 h-screen">
      <NavbarComponent />
      <div className="flex justify-center mt-10">
        <div className="block p-6 rounded-lg shadow-lg bg-white w-9/12">
          <div className="flex justify-center">
            <h5>Sign Up</h5>
          </div>
          <form className="mt-6">
            <div className="form-group mb-6">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control
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
                placeholder="Username"
              ></input>
            </div>
            <div className="form-group mb-6">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control
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
                placeholder="Password"
              ></input>
            </div>
            <div className="form-group mb-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control
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
                placeholder="Email"
              ></input>
            </div>
          </form>
          <div className="flex justify-end">
            <button
              onClick={() => signup()}
              type="submit"
              className="
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
            active:bg-orange-800 active:shadow-lg
            transition
            duration-150
            ease-in-out"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <h5>or already have an acount?</h5>
      </div>
      <div className="flex justify-center mt-10">
        <div className="block p-6 rounded-lg shadow-lg bg-white w-9/12">
          <div className="flex justify-center">
            <h5>Sign In</h5>
          </div>
          <form className="mt-6">
            <div className="form-group mb-6">
              <input
                onChange={(e) => setEmailLogin(e.target.value)}
                type=""
                className="form-control
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
                placeholder="Username"
              ></input>
            </div>
            <div className="form-group mb-6">
              <input
                onChange={(e) => setPasswordLogin(e.target.value)}
                type=""
                className="form-control
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
                placeholder="Password"
              ></input>
            </div>
          </form>
          <div className="flex justify-end">
            <button
              type="submit"
              onClick={() => {
                signIn();
              }}
              className="
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
            active:bg-orange-800 active:shadow-lg
            transition
            duration-150
            ease-in-out"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
