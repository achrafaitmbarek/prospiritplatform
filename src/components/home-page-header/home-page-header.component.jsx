import React from "react";
import "./home-page-header.styles.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/LOGOPNGPOLYTECH.png";
import { auth } from "../firebase/firebase.utils";
const HomePageHeader = ({ curentUser }) => (
  <div className="header-container">
    <div className="home-page-header">
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
    <span className="home-page-infos">
      <div className="title">
        <h1>institut de formation PROFESSIONNEL polytech privee</h1>
      </div>
      <Link className="option-home-page-header" to="/ContactUs"> 
        s'inscrire 
      </Link>
      <Link className="option-home-page-header" to="/CoursesCardItem">
      Nos Formations
      </Link>
    </span>
  </div>
);
export default HomePageHeader;
