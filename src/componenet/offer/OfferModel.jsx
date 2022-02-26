import React from "react";
import "./style.css";
import offer from "./offer1.PNG";
import { Link } from "react-router-dom";
export default function OfferModel({ closeModal,modalImage }) {
  return (
    <div>
      {/* popup area start */}
      <div className="section full-height">
        <input
          style={{display:"none"}}
          className="modal-btn"
          type="checkbox"
          id="modal-btn"
          name="modal-btn"
          checked
        />
        <label htmlFor="modal-btn"  onClick={()=>closeModal(false)}>
       
        </label>
        <div className="modal">
          <div className="modal-wrap">
            {/* <button onClick={()=>closeModal(false)}>X</button> */}
            <Link to="/products?offerProd=true">
              {modalImage.map((itm)=>(
                <img src={itm.image} alt="" />
              ))}
            
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
