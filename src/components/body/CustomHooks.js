import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchProducts } from "../../redux/actionCreators";

const CustomHooks = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return <></>;
};

export default CustomHooks;
