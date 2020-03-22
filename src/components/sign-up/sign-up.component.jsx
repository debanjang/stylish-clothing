import React, { Component } from "react";

import "./sign-up.styles.scss";
import CustomInput from "../custom-input/custom-input.component";
import CustomButton from "../custom-button/custom-button.component";
import Error from "../error/error.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
      errorMessage: ""
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      this.setState({ errorMessage: "Passwords do not match" });
      return;
    }
    //Creates a new user account in firebase auth with the specified email address and password
    //On successful creation of user account, this user will also be logged in to the application
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
      //Create the user for firebase with email and password
      //Save the auth user in the firestore db
      await createUserProfileDocument(user, { displayName: displayName });
    } catch (error) {
      console.log(error.message);
      this.setState({ errorMessage: error.message });
    }

    this.setState({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
  };

  render() {
    return (
      <div className="sign-up">
        <div className="title">
          <h1>I do not have an account!</h1>
          <span>Sign up with your email and password</span>
        </div>
        <form onSubmit={this.handleSubmit}>
          <CustomInput
            name="displayName"
            type="text"
            value={this.state.displayName}
            handleChange={this.handleChange}
            label="DisplayName"
            required
          />
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
          <CustomInput
            name="confirmPassword"
            type="password"
            value={this.state.confirmPassword}
            handleChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>

        {this.state.errorMessage ? (
          <Error errorMessage={this.state.errorMessage} />
        ) : null}
      </div>
    );
  }
}

export default SignUp;
