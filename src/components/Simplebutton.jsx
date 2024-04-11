import React from "react";

const Simplebutton = ({
  buttontext = "default text",
  onClick = () => console.log("default button onclick prop"),
}) => {
  return (
    <button
      className="text-sm font-medium font-roboto px-4 py-2 bg-red-500 rounded-lg ease-in-out transition-all hover:scale-105 active:bg-red-600 active:outline-red-400 duration-150 text-white outline-none border-none"
      onClick={onClick}
    >
      {buttontext}
    </button>
  );
};

export default Simplebutton;
