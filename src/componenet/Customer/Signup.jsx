import React, { useState } from "react";
import { urlGateWay } from "../../services/service";
import { userLogin } from "../../services/serviceEndPoint";
import "../Customer/signup.css";
export default function Signup({ closeModel }) {
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
    address_line2: ""
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
    // console.log({response});
    const { data, status, error } = response;
    if (status === 200) {
      setActiveTab("validateOtp");
    } else {
      console.log(data?.message);
    }
  };

  //validating otp
  const handleValidateOtp = async () => {
    const response = await urlGateWay.post(userLogin.validateOtp, loginDetails);
    const { data, status } = response;
    if (status === 200) {
      localStorage.setItem("token", data?.access)
      setActiveTab("personalInfo");
    } else {
      window.alert("incorrect otp");
    }
  };

  const handleSubmit = async() => {
    const response = await urlGateWay.post(userLogin.updatePersonalInfo, personalDetails);
    const { data, status } = response;
    if (status === 200) {
      setFormSubmitted(true);
    } else {
      window.alert("something went wrong");
    }
  };

  return (
    <div>
      <div className="overlay show-popup" />
      <div className="product-popup show-popup">
        <form
          action="#"
          className="form"
          id="forms"
          onsubmit="event.preventDefault()"
        >
          <a
            class="close"
            onClick={() => {
              closeModel(false);
            }}
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              color: "#0b4eb3",
              marginLeft: "270px",
            }}
          >
            ×
          </a>
          {!formSubmitted ? (
            <>
              <div className="progressbar">
                <div className="progress" id="progress" />
                {tabs?.map((tab) => (
                  <div
                    className={`progress-step ${
                      activeTab === tab.key ? "progress-step-active" : ""
                    } `}
                    data-title={tab.label}
                  />
                ))}
              </div>
              {activeTab === "phoneNumber" ? (
                <div className="step-forms step-forms-active">
                  <div className="group-inputs">
                    {" "}
                    <label htmlFor="username">Phone Number</label>{" "}
                    <input
                      type="text"
                      name="phone"
                      value={loginDetails.phone}
                      onChange={handleChange}
                    />{" "}
                  </div>

                  <div className>
                    {" "}
                    <a
                      href="#"
                      onClick={requestingOtp}
                      className="btn btn-next width-50 ml-auto"
                    >
                      Nextss
                    </a>{" "}
                  </div>
                </div>
              ) : activeTab === "validateOtp" ? (
                <div className="step-forms step-forms-active">
                  <div className="group-inputs">
                    {" "}
                    <label htmlFor="phone">OTP Validation</label>{" "}
                    <input
                      value={loginDetails.otp}
                      type="text"
                      onChange={handleChange}
                      name="otp"
                    />{" "}
                  </div>

                  <div className="btns-group">
                    {" "}
                    <a
                      href="#"
                      onClick={() => setActiveTab("phoneNumber")}
                      className="btn btn-prev"
                    >
                      Previous
                    </a>{" "}
                    <a
                      href="#"
                      onClick={() => handleValidateOtp()}
                      className="btn btn-next"
                    >
                      Next
                    </a>{" "}
                  </div>
                </div>
              ) : (
                <div className="step-forms step-forms-active">
                  {/* <div className="group-inputs"> <label htmlFor="dob">Date of Birth</label> <input type="date" name="dob" id="dob" /> </div>
                  <div className="group-inputs"> <label htmlFor="ID">National ID</label> <input type="number" name="ID" id="ID" /> </div> */}
                  <div className="group-inputs">
                    {" "}
                    <label htmlFor="ID">Name</label>
                    <input value={personalDetails.name} onChange={handleChangePersonalInfo} type="text" name="name" required />{" "}
                  </div>
                  <div className="group-inputs">
                    {" "}
                    <label htmlFor="ID">Email</label>{" "}
                    <input value={personalDetails.email} onChange={handleChangePersonalInfo} type="emil" name="email" required />{" "}
                  </div>
                  <div className="group-inputs">
                    {" "}
                    <label htmlFor="ID">City</label>{" "}
                    <input value={personalDetails.city} onChange={handleChangePersonalInfo} type="text" name="city" required />{" "}
                  </div>
                  <div className="group-inputs">
                    {" "}
                    <label htmlFor="ID">Address</label>{" "}
                    <input value={personalDetails.address_line1} onChange={handleChangePersonalInfo} textArea name="address_line1" required />{" "}
                  </div>
                  <div className="btns-group">
                    {" "}
                    <a
                      href="#"
                      onClick={() => setActiveTab("validateOtp")}
                      className="btn btn-prev"
                    >
                      Previous
                    </a>{" "}
                    <input
                      type="submit"
                      onClick={() => handleSubmit()}
                      defaultValue="Submit"
                      id="submit-form"
                      className="btn"
                    />{" "}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div
              class="welcome"
              style={{ margin: "-30px", marginTop: "-80px" }}
            >
              <div class="content">
                <svg
                  class="checkmark"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 52 52"
                >
                  <circle
                    class="checkmark__circle"
                    cx="26"
                    cy="26"
                    r="25"
                    fill="none"
                  />
                  <path
                    class="checkmark__check"
                    fill="none"
                    d="M14.1 27.2l7.1 7.2 16.7-16.8"
                  />
                </svg>
                <h2>Thanks for signup!</h2>
                <span>Happy Shopping!</span>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
