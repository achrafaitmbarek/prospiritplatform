import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/LOGOPNGPOLYTECH.png";
import { auth } from "../firebase/firebase.utils";
import "./header.styles.scss";

const Header = ({curentUser}) => (
  <div className="home-header">
      <Link className="logo-container" to="/">
        <div className="logo">
          <img src={logo} id="website-logo" alt="website logo" />
        </div>
      </Link>
      <div className="options">
        <Link className="option" to="/CoursesCardItem">
          Nos Formations
        </Link>
        {curentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Se deconnecter
          </div>
        ) : (
          <Link className="option" to="/Signin">
            S'identifier / S'inscrire
          </Link>
        )}
      </div>
    </div>
);
export default Header;
