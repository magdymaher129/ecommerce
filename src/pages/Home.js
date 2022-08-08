import React from "react";
import Card from "../component/Card";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

import Products from "../component/Products";
export default function Home() {
  return (
    <>
          <Navbar/>
      <Card />
      <Products />
      <Footer />
    </>
  );
}
