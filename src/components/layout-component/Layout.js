import React from "react";
import "./Layout.css";
import { ApolloProvider } from "@apollo/client";
import Navbar from "../navbar-component/Navbar";
import Footer from "../footer-component/Footer";

const Layout = ({ pageTitle, children }) => {
  return (
    <ApolloProvider>
      <div className="main-layout-container">
        <title>{pageTitle}</title>
        <Navbar />
        <main>
          <h1 className="page-title-container">{pageTitle}</h1>
          {children}
        </main>
        <Footer />
      </div>
    </ApolloProvider>
  );
};

export default Layout;
