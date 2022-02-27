import React from "react";
import "./search-button.css";
export default function ProductFilter({searchInput,buttonSerach,products_data}) {
  var length = products_data?.length;
  return (
    <>
    <div className="shop-top-bar position-relative">
      <div className="showing-result">
        <p> Showing all {length} results</p>
      </div>

      {/* <div className="input-group " style={{ width: "40%",marginLeft:"440px" }}>
          <input type="text" class="form-control" onChange={searchInput} placeholder="Search for..." />
          <span className="input-group-btn">
            <button class="btn btn-search" onClick={buttonSerach} type="button">
              <i className="fa fa-search fa-fw"></i> Search
            </button>
          </span>
        </div> */}
    </div>

   
    
    </>
  );
}
