import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const succes = ()=> {
    return toast.success("Added to cart!");
}
const error = ()=> {
    return toast.error("something went wrong");
}

export {succes, error}