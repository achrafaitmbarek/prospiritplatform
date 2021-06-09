import React from "react";
import "./sign-in-and-sign-up.styles.scss";
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from "../../components/Sign-Up/sign-up.component";

const SignInAndSignUpPage = () => (
  <div className="SignContainer">
      <div className="sign-in-and-sign-up">
      <SignIn/>
      <SignUp/>
  </div>
  </div>

);
export default SignInAndSignUpPage;