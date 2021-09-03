import React from "react";
import Currency from "react-currency-formatter";

const FormatBDT = ({ bdt }) => {
  return (
    <span>
      <Currency quantity={bdt} currency="USD" />
    </span>
  );
};

export default FormatBDT;
