import React, { useState , useEffect} from "react";
import "./Card.css";
import { API } from "../../backend";
import { RiShoppingBasketLine } from "react-icons/ri";

//Redux
import { connect } from "react-redux";

//Action
import { addItemsToCart , removeItemFromCart } from "../../store/action/cart";


const Card = (props) => {
  const [count, setCount] = useState(1);
  const [addItem, setAddItem] = useState(false);

  const imageurl = `${API}/product/getPhoto/${props.id}`;

  useEffect(()=>{
    props.cart.forEach(item => {
      if(item[0] === props.id){
        setCount(item[1]);
        setAddItem(true);
      }
    })
  });

  const addItemToCart = () => {
    setAddItem(true);
    props.additemToCart([props.id,count,props.price]);
  };

  const removeItem = () => {
    setAddItem(false);
    props.removeitemFromCart(props.id);
    setCount(1);
  }

  return (
    <div className="card-outer">
      <div className="card">
        <img
          src={imageurl}
          className="card-img-top productImage mx-auto"
          alt="..."
        />
        <div className="card-body">
          <h3 className="card-title">{props.name}</h3>
          <hr />
          <p className="card-title">1 kg</p>
          <div className="bg-light">
            <h5 className="ml-2">Rs {props.price}</h5>
            <div className="row">
              <div className="col-sm-3 px-0 bg-gray">
                <p className="label text-center mt-1 ml-3">Qty</p>
              </div>
              <div className="col-sm-3 px-0">
                <input
                  className="form-control text-center"
                  type="number"
                  value={count}
                  onChange={(e) => {
                    if (e.target.value > 0) {
                      if(addItem){
                        props.removeitemFromCart(props.id);
                        setAddItem(false);
                      }
                      setCount(e.target.value);
                    }
                  }}
                />
              </div>
              <div className="col-sm-6 px-2">
                {!addItem ? (
                  <button className="btn btn-secondary" onClick={addItemToCart}>
                    <span className="mr-2">ADD</span>
                    <RiShoppingBasketLine />
                  </button>
                ) : (
                  <button className="btn btn-danger" onClick={removeItem}>
                    <span className="mr-2">REMOVE</span>
                    <RiShoppingBasketLine />
                  </button>
                )}
              </div>
            </div>
          </div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    additemToCart: (data) => dispatch(addItemsToCart(data)),
    removeitemFromCart: (data) => dispatch(removeItemFromCart(data))  
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);

