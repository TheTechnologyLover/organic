import React from "react";
import Basket from "../basket/Basket";
import { GiFruitTree } from "react-icons/gi";
import "./NavBar.css";

//Redux
import { connect } from "react-redux";

//Action
import { logoutUser } from "../../store/action/user";

const NavBar = (props) => {
  return (
    <div className="nav-bar">
      <div className="container-fluid bg-light pt-3 pb-2">
        <div className="row">
          <div className="col-sm-6">
            <GiFruitTree
              color="green"
              className="logo home"
              onClick={() => props.redirection("home")}
            />
            <span
              className="CompanyName home"
              onClick={() => props.redirection("home")}
            >
              Organic Vegetables Store
            </span>
          </div>
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-6 col-xs-6 col-lg-7">
                <Basket showCart={(data) => props.redirection(data)} />
              </div>
              <div className="col-sm-6 col-xs-6 col-lg-5">
                {props.user.token ? (
                  <div>
                    <span>{props.user.user.firstname}</span>
                    <button
                      type="button"
                      className="btn btn-info  ml-1"
                      onClick={() => {
                        props.redirection("logout");
                        props.logoutuser();
                      }}
                    >
                      logout
                    </button>
                  </div>
                ) : (
                  <div>
                    <button
                      type="button"
                      className="btn btn-info  ml-1"
                      onClick={() => props.redirection("login")}
                    >
                      login
                    </button>
                    <button
                      type="button"
                      className="btn btn-info ml-1"
                      onClick={() => props.redirection("signup")}
                    >
                      sign up
                    </button>
                  </div>
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
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutuser: () => dispatch(logoutUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
