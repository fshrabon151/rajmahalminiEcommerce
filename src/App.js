import React from "react";

import MainComponent from "./components/MainComponent";

import { CartProvider } from "react-use-cart";
import Loader from "./components/loader/Loader";
import CustomHooks from "./components/body/CustomHooks";
import { useSelector } from "react-redux";

const App = (props) => {
  const isLoading = useSelector((state) => state.productReducer.isLoading);
  console.log(isLoading);
  return (
    <div>
      <CartProvider>
        <CustomHooks />
        {isLoading ? <Loader /> : <MainComponent />}
        {/* <MainComponent /> */}
      </CartProvider>
    </div>
  );
};

export default App;
