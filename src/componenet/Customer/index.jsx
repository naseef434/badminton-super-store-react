import React, { useState, useEffect } from "react";
import { urlGateWay } from "../../services/service";
import { userLogin } from "../../services/serviceEndPoint";
import Signup from "./Signup";

export default function Index({ closeModel }) {
  const [tabs, setTabs] = useState([
    { key: "phoneNumber", label: "Phone" },
    { key: "validateOtp", label: "OTP" },
    { key: "personalInfo", label: "Personal" },
  ]);

  const [activeTab, setActiveTab] = useState("phoneNumber");
  const [formSubmitted, setFormSubmitted] = useState(false);
  //get user phone number for requesting otp
  const [loginDetails, setLoginDetails] = useState({
    phone: "",
    otp: "",
  });
  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    email: "",
    city: "",
    address_line1: "",
    address_line2: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails({
      ...loginDetails,
      [name]: value,
    });
  };

  const handleChangePersonalInfo = (e) => {
    const { name, value } = e.target;
    setPersonalDetails({
      ...personalDetails,
      [name]: value,
    });
  };

  const requestingOtp = async () => {
    const response = await urlGateWay.post(userLogin.requestingOtp, {
      phone: loginDetails.phone,
    });
   console.log(response);
    const { data, status, error,message } = response;
   
    if (status === 200) {
      alert(data.message)
      setActiveTab("validateOtp");
    
    }else if(response.response.status === 400){
      alert("Phone number required")
    } else {
      console.log("something went wrong");
    }
  };

  //validating otp
  const handleValidateOtp = async () => {
    const response = await urlGateWay.post(userLogin.validateOtp, loginDetails);
    const { data, status } = response;
    if (status === 200) {
      localStorage.setItem("token", data?.access);
      setActiveTab("personalInfo");
    } else {
      window.alert("incorrect otp");
    }
  };

  const handleSubmit = async () => {
    const response = await urlGateWay.post(
      userLogin.updatePersonalInfo,
      personalDetails
    );
    const { data, status } = response;
    if (status === 200) {
      setFormSubmitted(true);
    } else {
      window.alert("something went wrong");
    }
  };
  return (
    <div>
      <Signup
        tabs={tabs}
        activeTab={activeTab}
        loginDetails={loginDetails}
        handleChange={handleChange}
        requestingOtp={requestingOtp}
        handleValidateOtp={handleValidateOtp}
        personalDetails={personalDetails}
        handleChangePersonalInfo={handleChangePersonalInfo}
        handleSubmit={handleSubmit}
        closeModel={closeModel}
      />
    </div>
  );
}
