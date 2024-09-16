import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Car from "../Components/Car";
import CompanyInformation from "./CompanyInformation";

function Home() {
  return (
    <div>
      <Header />
      <Car />
      <CompanyInformation />
      <Footer />
    </div>
  );
}

export default Home;
