import React from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

const Root = () => {
  return (
    <>
      <Header />
      <div className="md:min-h-[calc(100vh-112px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Root;
