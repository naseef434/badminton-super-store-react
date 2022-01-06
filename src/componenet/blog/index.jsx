import React from "react";
import BlogArea from "./BlogArea";
import BLogBreadCrumb from "./BLogBreadCrumb";
import Navbar from "../../componenet/navbar/Navbar";
import Footer from "../../componenet/footer/Footer";
export default function index() {
  return (
    <div>
      <Navbar />
      <BLogBreadCrumb />
      <BlogArea />
      <Footer />
    </div>
  );
}
