import React from "react";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen -mt-20 -mb-10">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
