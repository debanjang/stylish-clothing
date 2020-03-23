import React, { Component } from "react";

import "./sign-in.styles.scss";
import CustomInput from "../custom-input/custom-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";
import Error from "../error/error.component";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMessage: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      this.setState({
        errorMessage: "Error while signing in: " + error.message
      });
    }
    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <div className="sign-in">
        <div className="title">
          <h1> I already have an account! </h1>
          <span> Please sign in with your email and password. </span>
        </div>
        <form onSubmit={this.handleSubmit}>
          <CustomInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />

          <CustomInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />

          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>

            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
        {this.state.errorMessage ? (
          <Error errorMessage={this.state.errorMessage} />
        ) : null}
      </div>
    );
  }
}

export default SignIn;
