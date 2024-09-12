import React from "react";
import Header from "./Header";
import Footer from "./Footer"
import Car from "../Components/Car";
import InquiryList from "./InquiryList";



function Home() {
    return (
        <div>
            <Header />
            <InquiryList />
            <Car />
            <Footer />
        </div>
    )
};


export default Home;