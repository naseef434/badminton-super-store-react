export const sportsEndpoints = {
  getSports :"/sport"
}


export const productsEndpoints = {
  getCategory: "/category",
  getProducts: "/product",
  getBrands : "/brand",
  
  // getProductCategoryWise : "/product/"
};
export const userLogin = {
  requestingOtp: "/customer/get_otp/",
  validateOtp: "/customer/login/",
  updatePersonalInfo: "/customer/update_info/",
};
export const cart = {
  getAccessToken:"/customer/get_token/",
  addToCart: "/cart/add_to_cart/",
  getCart: "/cart/get_cart/", 
  
};

export const productSearch = {
  psearch : "product/search/",
}