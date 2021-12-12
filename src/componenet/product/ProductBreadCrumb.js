import React from "react";


export default function ProductBreadCrumb(){
    return (
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Shop</a></li>
            <li className="breadcrumb-item"><a href="#">Outerwears</a></li>
            <li className="breadcrumb-item"><a href="#">jackets</a></li>
            <li className="breadcrumb-item active" aria-current="page">Arsenal Home Jersey</li>
        </ol>
    </nav>
    )
} 