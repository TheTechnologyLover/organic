import React from "react";
import { RiShoppingBasketLine } from "react-icons/ri";
import "./Basket.css";

//Redux
import { connect } from "react-redux";

const Basket = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-2 col-md-6 pr-0">
          <span className="float-right Cart" onClick={()=>props.showCart("cart")}>
            <RiShoppingBasketLine className="basket" color="#FE8D75" />
          </span>
        </div>
        <div className="col-sm-10 col-md-6 pr-0 pl-0">
          <p className="mb-0 Cart" onClick={()=>props.showCart("cart")}>Basket</p>
          <p className="mb-0 Cart" onClick={()=>props.showCart("cart")}>Items {props.cart.length}</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(Basket);
