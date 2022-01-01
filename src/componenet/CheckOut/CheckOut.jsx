import React from "react";

function CheckOut() {
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
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="checkout__wrap">
                        <label>
                          First name <span>*</span>
                        </label>
                        <input type="text" name="fname" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="checkout__wrap">
                        <label>
                          Last name <span>*</span>
                        </label>
                        <input type="text" name="lname" />
                      </div>
                    </div>
                  </div>
                  <div className="checkout__wrap">
                    <label>
                      Company name (optional) <span />
                    </label>
                    <input type="text" name="cname" />
                  </div>
                  <div className="checkout__wrap">
                    <label>
                      Country / Region <span>*</span>
                    </label>
                    <select name="country">
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Bangladesh">Pakistan</option>
                      <option value="Bangladesh">Arab</option>
                      <option value="Bangladesh">America</option>
                      <option value="Bangladesh">Saudi Arabia</option>
                      <option value="Bangladesh">Israil</option>
                      <option value="Bangladesh">Irak</option>
                      <option value="Bangladesh">Netherland</option>
                    </select>
                  </div>
                  <div className="checkout__wrap">
                    <label>
                      Street address <span>*</span>
                    </label>
                    <input
                      className="mb-20"
                      type="text"
                      name="add1"
                      placeholder="house number and street number"
                    />
                    <input
                      type="text"
                      name="add2"
                      placeholder="apartment,suite,unit,etc.(optional)"
                    />
                  </div>
                  <div className="checkout__wrap">
                    <label>
                      Town / City *<span />
                    </label>
                    <input type="text" name="town" />
                  </div>
                  <div className="checkout__wrap">
                    <label>
                      County (optional)
                      <span />
                    </label>
                    <input type="text" name="country" />
                  </div>
                  <div className="checkout__wrap">
                    <label>
                      Postcode<span>*</span>
                    </label>
                    <input type="text" name="postcode" />
                  </div>
                  <div className="checkout__wrap">
                    <label>
                      Phone <span>*</span>
                    </label>
                    <input type="text" name="phone" />
                  </div>
                  <div className="checkout__wrap">
                    <label>
                      Email address <span>*</span>
                    </label>
                    <input type="email" name="email" />
                  </div>
                  <div className="checkout__wrap-2 pt-20">
                    <input type="checkbox" name="check1" />
                    <span>Create an account?</span>
                  </div>
                  <div className="checkout__wrap-2 pt-20">
                    <input type="checkbox" name="check2" />
                    <span>Ship to a different address?</span>
                  </div>
                  <div className="checkout__wrap">
                    <label>
                      Order notes (optional) <span />
                    </label>
                    <textarea
                      name="ordernote"
                      placeholder="Note about your order, e.g special note for delivery"
                      defaultValue={""}
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-12">
              <div className="cart__acount ml-50">
                <h5>Your order</h5>
                <table>
                  <tbody>
                    <tr className="first-child-2">
                      <td>product</td>
                      <td>
                        NikeCourts Air Zoom <span>× 1</span>
                      </td>
                    </tr>
                    <tr className="first-child-2">
                      <td>Subtotal</td>
                      <td className="lightbluee">$18.00</td>
                    </tr>
                    <tr className="first-child lastchild">
                      <td>Shipping</td>
                      <td>Enter your address to view shipping options. </td>
                    </tr>
                    <tr className="first-child-2">
                      <td>Total</td>
                      <td className="lightbluee">$47.00</td>
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
                          PayPal
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">Cash on delivery</div>
                      </div>
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
                    <input type="checkbox" />
                    <p>
                      I have read and agree to the website terms and conditions{" "}
                      <span>*</span>
                    </p>
                  </div>
                  <div className="order-button">
                    <button type="submit">place order</button>
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
