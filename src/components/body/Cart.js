import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useCart } from "react-use-cart";
import CartTable from "./CartTable";
import FormatBDT from "./FormatBDT";

const Cart = () => {
  const {
    isEmpty,

    items,

    cartTotal,

    emptyCart,
  } = useCart();

  const history = useHistory();

  return (
    <div>
      <div className="container p-80">
        <h1>Cart</h1>
        <hr />
        <div className="row">
          {isEmpty ? (
            <div>{history.push("/menu")}</div>
          ) : (
            <>
              <div className="col-lg-7">
                <div className="cart-data">
                  {items.map((item) => {
                    return <CartTable key={item.id} {...item} />;
                  })}
                </div>
                <div className="mt-5">
                  <button
                    className="p-2 rounded btn-danger btn-sm "
                    onClick={() => emptyCart()}
                  >
                    Clear All
                  </button>

                  <button
                    className="btn btn-dark float-end"
                    onClick={() => history.push("/menu")}
                  >
                    Go back
                  </button>
                </div>
              </div>
              <div className="col-lg-4 offset-1">
                <div className="cart-total-info">
                  <h6>
                    Price: <FormatBDT bdt={cartTotal} />
                  </h6>
                  <h6>
                    VAT & SC: <FormatBDT bdt={cartTotal * 0.02} /> (rate: 2%)
                  </h6>
                  <h6>
                    Total Price:{" "}
                    <FormatBDT bdt={cartTotal + cartTotal * 0.02} />
                  </h6>
                </div>

                <button className="btn btn-dark w-100 mt-5">
                  <Link
                    to="/checkout"
                    className="text-decoration-none text-white"
                  >
                    Checkout
                  </Link>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
