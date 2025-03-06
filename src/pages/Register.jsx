import React from "react";
import { useNavigate } from "react-router-dom";
import Simplebutton from "../components/Simplebutton";

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="container h-full w-full flex justify-center items-center border-2">
      <div className="flex justify-center items-center overflow-hidden   gap-8 rounded-xl bg-rose-900/5 ">
        {/* left side */}
        <div
          style={{
            backgroundImage: `url("https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
          }}
          className="h-full w-full flex-1 flex-col gap-8 px-4 py-2  bg-no-repeat bg-cover bg-center flex justify-center items-center min-h-[600px]"
        >
          <h1 className=" bg-gradient-to-r  ">JOIN US</h1>
          <p className=" bg-gradient-to-r from-black to-gray-50 bg-clip-text text-transparent">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
            adipisci totam laudantium magnam in officiis.
          </p>
          <p className="text-gray-50">
            Already have an <span className="text-primary">Account?</span>
          </p>
          <Simplebutton
            buttontext={"go to login page"}
            onClick={() => {
              navigate("/Login");
            }}
          />

          {/* <PrimaryBtn
              text="Login"
              onClick={() => {
                navigate("/login");
              }}
            /> */}
        </div>

        {/* right side */}
        <div className="flex-1 h-full flex flex-col gap-8 justify-center ">
          <h1 className="text-primary">Register</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="flex flex-col gap-16 "
          >
            <input
              type="text"
              placeholder="Username"
              className="text-lg font-medium h-16 border-b border-b-gray-600 bg-inherit  outline-none focus:border-b focus:border-b-red-700 "
            />

            <input
              type="password"
              placeholder="password"
              className="text-lg font-medium h-16 border-b  border-b-gray-600 bg-inherit outline-none focus:border-b focus:border-b-red-700 "
            />

            <input
              type="email"
              placeholder="E-mail"
              className="text-lg font-medium h-16 border-b  border-b-gray-600 bg-inherit outline-none focus:border-b focus:border-b-red-700 "
            />
            <div>
              <Simplebutton buttontext={"Submit"} />
              {/* <PrimaryBtn
                  text="Submit"
                  onClick={() => {
                    // console.log("login button clicked");
                    alert("button has been working");
                  }}
                /> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
