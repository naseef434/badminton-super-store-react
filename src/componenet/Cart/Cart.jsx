import React from 'react'
import BreadCrumb from '../product/BreadCrumb'

function Cart() {
    return (
        <div>
              <BreadCrumb name={["Home","Cart"]} />
              <div className="f_cart_area pt-110 mb-100">
  <div className="container">
    <div className="row">
      <div className="col-xl-8 col-lg-8 col-md-12">
        <div className="cart_table">
          <table>
            <tbody><tr> 
                <td>Product</td>
                <td />
                <td>price</td>
                <td>Quantity</td>
                <td>Total</td>
              </tr>
            </tbody><tbody>
              <tr className="max-width-set">
                <td>
                  <img src="./assets/img/desc/3-500x500.jpg" alt="" />
                </td>
                <td>Detail V-Neck Sweater</td>
                <td>$18.00   
                </td>
                <td><div className="viewcontent__action single_action pt-30">
                    <span><input type="number" placeholder={1} /></span>
                  </div></td>
                <td>
                  $451.00
                </td>
                <td className="width-set">
                  <a href="javascript:void(0)"><i className="fal fa-times-circle" /></a>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="design-footer">
                <td>
                  <input type="text" placeholder="Coupon Code" />
                </td>
                <td><button type="submit">Apply Coupon</button></td>
                <td colSpan={3}><a href="#">update cart</a></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <div className="col-xl-4 col-lg-4 col-md-12">
        <div className="cart__acount">
          <h5>Cart totals</h5>
          <table>
            <tbody><tr className="first-child">
                <td>Subtotal</td>
                <td>$18.00</td>
              </tr>
              <tr className="first-child lastchild">
                <td>Shipping</td>
                <td>Enter your address to view shipping options <br />
                  Calculate shipping</td>
              </tr>
              <tr className="first-child">
                <td>Total</td>
                <td>$47.00</td>
              </tr>
              <tr>   
                <td colSpan={2}>
                  <a href="checkout.html"><input type="submit" defaultValue="procced to checkout" /></a>
                </td>
              </tr>
            </tbody></table>
        </div>
      </div>
    </div>
  </div>
</div>


        </div>
    )
}

export default Cart
