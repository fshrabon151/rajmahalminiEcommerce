import React from "react";
import { Card } from "react-bootstrap";
import { useCart } from "react-use-cart";
import FormatBDT from "./FormatBDT";

const CartTable = ({ title, price, image, description, quantity, id }) => {
  const { updateItemQuantity, removeItem } = useCart();
  return (
    <>
      <div className="p-3 border-top-0 border border-light menu-card-body mb-2">
        <div className="d-flex justify-content-around">
          <div className="cart-table-img me-3">
            <img src={`../../assets/products/${image}`} alt="" />
          </div>
          <div className="div">
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>

            <div className="menu-card-footer mt-3">
              <div className="menu-price">
                <h5>
                  <FormatBDT bdt={price * quantity} />
                </h5>
              </div>
              <div className="menu-cart-btn">
                <button
                  className="btn btn-custom shadow-sm border"
                  onClick={() => {
                    updateItemQuantity(id, quantity - 1);
                  }}
                >
                  -
                </button>
                <span className="menu-cart-count btn">{quantity}</span>
                <button
                  className="btn btn-custom shadow-sm border"
                  onClick={() => {
                    updateItemQuantity(id, quantity + 1);
                  }}
                >
                  +
                </button>

                <hr />
                <button
                  className="btn btn-danger shadow-sm border float-end"
                  onClick={() => {
                    removeItem(id);
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartTable;
