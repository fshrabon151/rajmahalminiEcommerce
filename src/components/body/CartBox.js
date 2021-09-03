import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useCart } from "react-use-cart";
import CartTable from "./CartTable";
import { Link } from "react-router-dom";
import CartEmpty from "./CartEmpty";
import FormatBDT from "./FormatBDT";

const CartBox = () => {
  const {
    isEmpty,

    items,

    cartTotal,

    emptyCart,
  } = useCart();
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div className="cart-title">
          <h1>Cart</h1>
        </div>
        <div className="cart-cls-btn">
          <button
            className="p-2 rounded btn-dark btn-sm"
            onClick={() => emptyCart()}
          >
            Clear All
          </button>
        </div>
      </div>
      {isEmpty ? (
        <CartEmpty />
      ) : (
        <div className="card p-4 mt-4">
          <div className="cart-table ">
            {items.map((item) => {
              return <CartTable key={item.id} {...item} />;
            })}
          </div>

          <div className="cart-total mt-3">
            <h6>
              Total: <FormatBDT bdt={cartTotal} />
            </h6>

            <div className="btn-dark btn w-100 btn-block">
              <Link to="/cart" className="text-white text-decoration-none">
                Go to cart
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartBox;
