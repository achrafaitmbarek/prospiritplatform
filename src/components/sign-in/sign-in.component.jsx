import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-in.styles.scss";

import { auth,signInWithGoogle } from "../firebase/firebase.utils";
import { Link } from "react-router-dom";

class SignIn extends React.Component {
  constructor(props) {
    super(props)
    if (props.user) {
      alert("You can't login if you are logged in!")
      props.history.push('/ticket-list')
    }
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event,props) => {
    event.preventDefault();
    const {email,password}=this.state;
    try {
      await auth.signInWithEmailAndPassword(email,password);
      this.setState({ email: "", password: "" });
      alert('Bienvenue');
    } catch(error) {
      console.log(error);
    }
  };

  handleChange =  (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>J'ai déjà un compte</h2>
        <span>Connectez-vous avec votre email et votre mot de passe</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Mot de passe"
            required
          />
          <Link to='/LostPage'>
          <div className="buttons">
            {/* <CustomButton type="submit">S'identifier</CustomButton> */}
            {/* <CustomButton onClick={signInWithGoogle} IsGoogleSignIn>
              {" "}
              connectez-vous avec google{" "}
            </CustomButton> */}
            <CustomButton >S'identifier</CustomButton>
            <CustomButton  IsGoogleSignIn>
              {" "}
              connectez-vous avec google{" "}
            </CustomButton>
          </div>
          </Link>
        </form>
      </div>
    );
  }
}

export default SignIn;
