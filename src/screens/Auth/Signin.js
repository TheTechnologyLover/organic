import React, { useState } from "react";
import { signin } from "./helper/AuthApi";

//Redux
import { connect } from "react-redux";

//Action
import { addUser } from "../../store/action/user";

import "./Auth.css";

const Signin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const loginUser = (e) => {
    e.preventDefault();
    signin(email, password).then((data) => {
      if (!data.err) {
        props.adduser(data);
        props.redirection("home");
      } else {
        setError(true);
      }
    });
  };

  const setValues = () => {
    setEmail("roshan@gmail.com");
    setPassword("roshan");
  };

  return (
    <div className="container">
      <br />
      <form onSubmit={loginUser}>
        <div className="row">
          <div className="col-6 offset-3">
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                required
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
          </div>
          <div className="col-6 offset-3">
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                required
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
          </div>
          <div className="col-6 offset-3">
            {props.message && (
              <p className="alert alert-danger">
                please login before accessing the cart
              </p>
            )}
            {error && (
              <p className="alert alert-danger">Please Check Email/Password</p>
            )}
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <span onClick={setValues} className="alert alert-warning ml-2 demo">
              Demo Credentials
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    adduser: (data) => dispatch(addUser(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
