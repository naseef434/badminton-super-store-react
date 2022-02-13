import React from "react";
import "./style.css";
import offer from "./offer1.PNG";
export default function OfferModel({ closeModal }) {
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
        <label htmlFor="modal-btn">
          <i  className="uil uil-expand-arrows" />
        </label>
        <div className="modal">
          <div className="modal-wrap">
            <button onClick={()=>closeModal(false)}>X</button>
            <img src={offer} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
