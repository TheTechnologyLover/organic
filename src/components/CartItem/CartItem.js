import React, { useState, useEffect } from "react";
import { fetchProduct } from "./helper/productApi";
import { API } from "../../backend";
import "./CartItem.css";
const CartItem = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const imageurl = `${API}/product/getPhoto/${props.id}`;

  useEffect(() => {
    fetchProduct(props.id).then((data) => {
      setName(data.name);
      setPrice(data.price);
    });
  });
  return (
    <div className="card-outer">
      <div className="card">
        <img
          src={imageurl}
          className="card-img-top productImage mx-auto"
          alt="..."
        />
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <hr />
          <p className="card-title">{props.count} kg</p>
          <div className="bg-light">
            <h5 className="ml-2">Rs {price * props.count}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
