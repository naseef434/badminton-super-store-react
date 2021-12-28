import React from "react";


// import Products from '../src/componenet/product/ProductList'
import { BrowserRouter as Router } from 'react-router-dom'

import Auth from "../src/routes/Auth"
function App() {
  return (
    <Router>
      <Auth />
    </Router>
  );
}

export default App;
