import React from "react";

const CartEmpty = () => {
  return (
    <div className="d-flex justify-content-center align-items-center card p-4 mt-4">
      <div className="text-center py-5">
        <h1>
          <i className="fas fa-cart-arrow-down"></i>
        </h1>
        <div>Cart is empty</div>
      </div>
    </div>
  );
};

export default CartEmpty;
