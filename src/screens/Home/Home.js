import React, { useState, useEffect } from "react";
import { fetchProducts } from "./helper/productApiCalls";
import Card from "../../components/Card/Card";
import NavBar from "../../components/NavBar/NavBar";
import "./Home.css";
import Signin from "../Auth/Signin";
import Signup from "../Auth/Signup";
import Cart from "../Cart/Cart";

//Redux
import { connect } from "react-redux";

const Home = (props) => {
  const [products, setProducts] = useState([]);
  const [login, setLogin] = useState(false);
  const [home, setHome] = useState(true);
  const [signup, setSignup] = useState(false);
  const [cart, setCart] = useState(false);
  const [auth,setAuth] = useState(false);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data.products);
    });
  }, []);

  const redirect = (data) => {
    if (data === "login") {
      setLogin(true);
      setSignup(false);
      setHome(false);
      setCart(false);
      setAuth(false);

    } else if (data === "signup") {
      setLogin(false);
      setSignup(true);
      setHome(false);
      setCart(false);
      setAuth(false);

    } else if (data === "home") {
      setLogin(false);
      setSignup(false);
      setHome(true);
      setCart(false);
      setAuth(false);

    } else if (data === "cart") {
      if(props.user.token){
        setLogin(false);
        setSignup(false);
        setHome(false);
        setCart(true);
        setAuth(false);
      }
      else{
        setLogin(false);
        setSignup(false);
        setHome(false);
        setCart(false);
        setAuth(true);
      }
    }
    else{
      setLogin(false);
      setSignup(false);
      setHome(true);
      setCart(false);
      setAuth(false);
    }
  };

  return (
    <div className="nav-bar">
      <NavBar redirection={redirect} />
      {login && <Signin redirection={redirect} />}

      {signup && <Signup redirection={redirect} />}

      {home && (

        <div className="container">
          <div className="row">
            {products.map((item) => {
              return (
                <div key={item._id} className="col-xs-6 col-md-4 col-lg-3">
                  <Card name={item.name} id={item._id} price={item.price} />
                </div>
              );
            })}
          </div>
        </div>
      )}
      {cart && ( 
        <Cart />
      )}

      {auth && <Signin redirection={redirect} message="login"/>}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Home);