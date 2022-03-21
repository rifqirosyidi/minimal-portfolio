import React from "react";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen -mt-40 -mb-20">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
