import React from "react";
import Navbar from "../navbar-component/Navbar";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="">
      <title>{pageTitle}</title>
      <Navbar />
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
