import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = () => {
  return (
    <div className="h-screen w-full bg-background text-text box-border relative ">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
