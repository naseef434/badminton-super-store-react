import React from "react";
import { Link } from "react-router-dom";

function CheckOut({ cart }) {
  return (
    <div>
      <div className="checkout_area pt-80">
        <div className="container">
          <div className="notification__message">
            <p>
              <i className="fal fa-window-maximize" />
              Returning customer? Click here to <a href="login.html">login</a>
            </p>
            {/* <p>
              <i className="fal fa-window-maximize" />
              Have a coupon? Click here to enter your code
            </p> */}
          </div>
          <div className="row">
            <div className="col-xl-7 col-lg-7 col-md-12">
              <div className="checkout_form mb-100">
                <form action="#">
                  <div className="row mb-30">
                    <div className="col-xl-12 col-lg-12 col-md-6">
                      <div className="checkout__wrap">
                        <label>
                          Full Name <span>*</span>
                        </label>
                        <input type="text" name="fname" />
                      </div>
                    </div>
                  </div>

                  <div className="checkout__wrap">
                    <label>
                      Phone <span>*</span>
                    </label>
                    <input type="text" name="phone" />
                  </div>

                  <div className="checkout__wrap">
                    <label>
                      City <span>*</span>
                    </label>
                    <select name="country">
                      <option value="Dubai"> Dubai</option>
                      <option value="Abu Dhabi"> Abu Dhabi</option>
                      <option value="Sharjah">Sharjah</option>
                      <option value="Ajman">Ajman</option>
                      <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                      <option value="Fujairah">Fujairah</option>
                      <option value="Umm al-Quwain">Umm al-Quwain</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="checkout__wrap">
                    <label>
                      Email address <span>*</span>
                    </label>
                    <input type="email" name="email" />
                  </div>
                  <div className="checkout__wrap">
                    <label>
                      Addess <span />
                    </label>
                    <textarea
                      name="ordernote"
                      placeholder="For faster delivery please fill out your detailed here"
                      defaultValue={""}
                    />
                  </div>
                  <div className="checkout__wrap-2 pt-20">
                    <input type="checkbox" name="check2" />
                    <span>Ship to a different address?</span>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-12">
              <div className="cart__acount ml-50">
                <h5>Your order</h5>
                <table>
                  <tbody>
                    {cart?.items?.map((item) => (
                      <tr className="first-child-2">
                        <td>Product</td>
                        <td>
                          {item.product} <span>× {item.quantity}</span>
                        </td>
                      </tr>
                    ))}

                    <tr className="first-child-2">
                      <td>Subtotal</td>
                      <td className="lightbluee">{cart?.total} - AED</td>
                    </tr>
                    <tr className="first-child lastchild">
                      <td>Shipping</td>
                      <td>40 - AED. </td>
                    </tr>
                    <tr className="first-child-2">
                      <td>Total</td>
                      <td className="lightbluee">----</td>
                    </tr>
                  </tbody>
                </table>
                <div className="checkout__accordion mt-30">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Network
                        </button>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="terms pt-50 pb-20">
                  <p>
                    Your personal data will be used to process your order,
                    support your experience throughout this website, and for
                    other purposes described in our privacy policy
                  </p>
                  <div className="check_term">
                    <input type="checkbox" /> &nbsp;&nbsp;&nbsp;<a href="#"><span>click here to read terms</span></a>
                    <p>
                      I have read and agree to the website terms and conditions{" "}
                     
                    </p>
                  </div>
                  <div className="order-button">
                    <Link to="/thankyou">
                      <button type="submit">place order</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
