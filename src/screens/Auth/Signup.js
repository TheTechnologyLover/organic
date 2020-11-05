import React, { useState } from "react";
import { signup } from "./helper/AuthApi";

const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [error,setError] = useState(false);

  const SignupUser = (e) => {
    e.preventDefault();
    signup(firstname, lastname, email, password).then((data) => {
      if (!data.err) {
        props.redirection("login");
      } else {
        setError(true);
      }
    });
  };

  return (
    <div className="container">
      <br />
      <form onSubmit={SignupUser}>
        <div className="row">
          <div className="col-3 offset-3">
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                className="form-control"
                required
                placeholder="Enter First Name"
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
          </div>
          <div className="col-3">
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                className="form-control"
                required
                placeholder="Enter LastName"
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
          </div>
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
            {error && (
              <p className="alert alert-danger">Unable To Signup / use different email id</p>
            )}
            <button type="submit" className="btn btn-primary">
              Signup
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
