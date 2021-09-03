import React from "react";
import { Route } from "react-router-dom";
import Cart from "./body/Cart";
import Checkout from "./body/Checkout";
import Home from "./body/Home";
import Login from "./body/Login";
import Menu from "./body/Menu";
import Register from "./body/Register";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const MainComponent = () => {
  return (
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/menu" component={Menu} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/checkout" component={Checkout} />

      <Footer />
    </div>
  );
};

export default MainComponent;
