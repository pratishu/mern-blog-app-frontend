import React from "react";
import { useNavigate } from "react-router-dom";
import Simplebutton from "../components/Simplebutton";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="container h-full w-full flex justify-center items-center">
      <div className="flex justify-center items-center overflow-hidden   gap-8 rounded-xl bg-rose-900/5 ">
        {/* left side */}
        <div
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          }}
          className="h-full w-full flex-1 flex-col gap-8 px-4 py-2  bg-no-repeat bg-cover bg-center flex justify-center items-center min-h-[600px]"
        >
          <h1 className=" bg-gradient-to-r  ">
            Find your Niche in our social App
          </h1>
          <p className=" bg-gradient-to-r from-black to-gray-50 bg-clip-text text-transparent">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
            adipisci totam laudantium magnam in officiis.
          </p>
          <p className="text-gray-700">
            Click here to <span className="text-primary">Register</span>
          </p>
          <Simplebutton
            buttontext="Register"
            onClick={() => {
              navigate("/register");
            }}
          />
        </div>

        {/* right side */}
        <div className="flex-1 h-full flex flex-col gap-8 justify-center ">
          <h1 className="text-primary">Login</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="flex flex-col gap-16 "
          >
            <input
              type="text"
              placeholder="Username"
              className="text-lg font-medium h-16 border-b  border-b-gray-600 bg-inherit outline-none focus:border-b focus:border-b-red-700"
            />

            <input
              type="password"
              placeholder="password"
              className="text-lg font-medium h-16 border-b  border-b-gray-600 bg-inherit outline-none focus:border-b focus:border-b-red-700"
            />
            <div>
              <Simplebutton
                buttontext="Submit"
                onClick={() => {
                  // console.log("login button clicked");
                  alert("button has been clicked");
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
