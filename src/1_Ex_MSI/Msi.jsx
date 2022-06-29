import React from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import Header from "./Header";
import LaptopList from "./LaptopList";
import PhoneList from "./PhoneList";

function Msi() {
  return (
    <div className="bg-dark">
      <Header />
      <Banner />
      <PhoneList />
      <LaptopList />
      <Footer />
    </div>
  );
}

export default Msi;
