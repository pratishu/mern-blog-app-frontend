import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container h-screen ">
      <div className="flex justify-center items-center h-full flex-col gap-16">
        <h1 className="font-monstt text-gray-600 ">About This Website:</h1>
        <h2>
          Go to{" "}
          <Link
            className="font-semibold font-poppins text-primary cursor-pointer hover:underline"
            to={"/Articles"}
          >
            Articles
          </Link>{" "}
          page to explore our Articles
        </h2>
        <div className="flex item-center justify-center">
          <div className="flex gap-8 flex-col items-start justify-start w-full">
            <h3>You can do Following Things Currently:</h3>
            <ul className="text-2xl font-medium text-gray-500">
              <li>1. You can go to articles page and browser articles</li>
              <li>
                2. you can click on edit and edit those articles, those changes
                will persist and written in databases
              </li>
              <li>3. you can create new articles</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
