
export const sportsEndpoints = {
  getSports :"/sport",
  getNavbarItems: "/sport?homepage=true"
  
}
 export const homePageEndpoints = {
  getShoweCase : "/homeimages",
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
  deleteCartItem: "cart/delete_cart_item/",
  updateCart:"/cart/update_cart/"
};

export const productSearch = {
  psearch : "product/search/",
}

export const blogsEndpoints = {
  blogs : "/blog"
}

export const offerBanner = {
  offerBanner : "/offer_banner"
}