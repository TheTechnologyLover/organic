import React, { useState , useEffect } from "react";
import CartItem from "../../components/CartItem/CartItem";
import StripeCheckout from "../../StripeCheckout";

//Redux
import { connect } from "react-redux";

const Cart = (props) => {
  const [total, setTotal] = useState(0);

  useEffect(()=>{
    computeTotal();
  });

  const computeTotal = () => {
    let totalAmount = 0;
    props.cart.forEach((item) => {
      totalAmount += (parseInt(item[1]) * item[2]);
    });
    setTotal(totalAmount);
  };

  

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="row">
            {props.cart.map((item) => {
              return (
                <div key={item[0]} className="col-xs-12 col-md-6 col-lg-6">
                  <CartItem id={item[0]} count={item[1]} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-6">
          <div className="container">
            <h1 className="text-center">Bill : Rs {total}</h1>
            <StripeCheckout token={props.user.user} total={( total / 60 ) * 100}/>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    user : state.user
  };
};

export default connect(mapStateToProps)(Cart);
