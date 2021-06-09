import React from "react";
import "./sign-up.styles.scss";
import { auth, createUserProfileDocument } from "../firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { Link } from "react-router-dom";
class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event,props) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("les deux mot de passe ne sont pas identiques !");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      alert('vous estes eng avec succes');
    } catch (error) {
        if(error.code === "auth/email-already-in-use"){
            alert("cet email est deja identifié");
            return;
        }
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">j'ai pas un compte</h2>
        <span>Inscrivez-vous avec votre email et votre mot de passe</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="votre nom complet"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Mot de passe"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirmez votre mot de passe "
            required
          />
          {/* <CustomButton type="submit">S'identifier</CustomButton> */}
          <Link to='/LostPage'>
          <CustomButton >S'identifier</CustomButton>
          </Link>
          
        </form>
      </div>
    );
  }
}

export default SignUp;
