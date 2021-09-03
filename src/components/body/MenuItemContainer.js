import React from "react";
import MenuItems from "./MenuItems";

const MenuItemContainer = ({ title, productDetails }) => {
  return (
    <div className="mb-5">
      <div className="menu-header  my-5">
        <h2 className="menu-header-title">{title}</h2>
        <div className="menu-header-line"></div>
      </div>
      <div className="row g-4">
        {productDetails.map((product) => {
          return <MenuItems key={product.id} item={product} {...product} />;
        })}
      </div>
    </div>
  );
};

export default MenuItemContainer;
