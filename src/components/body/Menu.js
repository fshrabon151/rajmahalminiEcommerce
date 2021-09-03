import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../loader/Loader";
import CartBox from "./CartBox";
import MenuItemContainer from "./MenuItemContainer";

const Menu = () => {
  const productData = useSelector((state) => state.productReducer.products);

  return (
    <div className="p-80">
      <div className="container">
        <h1>Menu</h1>
        <hr />
        <div className="row">
          <div className="col-lg-8 menu-items">
            {productData.map((product) => {
              return (
                <MenuItemContainer
                  key={product.id}
                  title={product.category}
                  productDetails={product.productDetails}
                />
              );
            })}
          </div>
          <div className="col-lg-4 menu-cart">
            <CartBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
