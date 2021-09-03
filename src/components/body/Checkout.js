import React from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router";

const Checkout = () => {
  const history = useHistory();

  const backToCart = () => {
    history.push("/cart");
  };
  return (
    <div>
      <div className="container p-80">
        <h1>Checkout</h1>
        <hr />

        <div className="menu-header  my-5">
          <h2 className="menu-header-title">Location</h2>
          <div className="menu-header-line"></div>
        </div>

        <Form className="checkout-data">
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Address</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <div className="menu-header  my-5">
            <h2 className="menu-header-title">Mode of Payment</h2>
            <div className="menu-header-line"></div>
          </div>

          <Form.Check type={`radio`} label={`Cash on Delivery`} />
          <Form.Check disabled type={`radio`} label={`Credit / Debit Card`} />
          <Form.Check disabled type={`radio`} label={`Net Banking`} />

          <Button className="btn-dark mt-4" type="submit">
            Place Order
          </Button>
          <Button
            className="btn-custom btn border-0 mt-4 text-dark ms-2"
            onClick={backToCart}
          >
            Back to cart
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Checkout;
