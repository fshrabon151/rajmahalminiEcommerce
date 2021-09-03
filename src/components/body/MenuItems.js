import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

import { Card } from "react-bootstrap";
import { useCart } from "react-use-cart";
import Swal from "sweetalert2";
import FormatBDT from "./FormatBDT";

import "react-toastify/dist/ReactToastify.css";

const MenuItems = ({ image, title, description, price, item }) => {
  const { addItem } = useCart();

  const addItemNotification = (item) => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Item added successfully",
      showConfirmButton: false,
      timer: 1500,
    });
    addItem(item);
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="col-lg-4">
      <div data-aos="fade-right" data-aos-duration="1000">
        <div className="menu-card rounded">
          <div className="menu-img">
            <img
              src={`../../assets/products/${image}`}
              className="img-fluid"
              alt={image}
              style={{ maxHeight: "178px", width: "100%" }}
            />
          </div>
          <div className="p-3 border-top-0 border border-light menu-card-body">
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>

            <div className="menu-card-footer mt-3">
              <div className="menu-price">
                <h5>
                  <FormatBDT bdt={price} />
                </h5>
              </div>
              <div className="menu-cart-btn">
                {/* <button
                  className="btn btn-custom shadow-sm border"
                  // onClick={removeItem(props.productData.id)}
                >
                  -
                </button>
                <span className="menu-cart-count btn">{"f"}</span> */}
                <button
                  className="btn btn-custom shadow-sm btn-sm fw-bold border"
                  onClick={() => addItemNotification(item)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
