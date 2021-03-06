import React, { Component } from "react";
import axios from "axios";

const initialState = {
  name: "",
  email: "",
  password: "",
  phonenumber: "",
  comment: "",
  nameError: "",
  emailError: "",
  passwordError: "",
};

export default class Contact extends Component {
  state = initialState;

  // function that allows for the changes of the inputs
  // updates the state
  handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      // if it is a checkbox get checked otherwise get valued event
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    let passwordError = "";

    // Checking if name has been filled if not add this string to name error
    if (!this.state.name) {
      nameError = "Name cannot be blank";
    }

    // Checking if email form input include and @ if not add this string to name error
    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }

    // Checking if password has been filled if not add this string to name error
    if (!this.state.password) {
      passwordError = "Password cannot be blank";
    }

    // returns false if there is a value for these objects and changes the state to the variables
    if (emailError || nameError || passwordError) {
      this.setState({ emailError, nameError, passwordError });
      return false;
    }

    // if all this is fine continue
    return true;
  };

  // prevents form from being submitted or refreshed
  handleSubmit = (event) => {
    event.preventDefault();
    // on submit checks if there are any errors
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear the form
      // sets back to the initial state when user gets all input correct
      this.setState(initialState);
    }
    // contains the data I want to send to my server
    const payload = {
      name: this.state.name,
      email: this.state.email,
      phonenumber: this.state.phonenumber,
      password: this.state.password,
      comment: this.state.comment,
    };

    axios({
      url: "/api/user/register", // Sends the data to this endpoint to process the data needed to
      //   create a proxy to get both servers on the same origin
      method: "POST",
      data: payload,
    })
      .then(() => {
        console.log("Data has been sent to the server"); // Server was able to process the data
      })
      .catch((error) => {
        console.log("Internal server error", error); // The data was not able to reach the server log error message
      });
  };

  render() {
    return (
      <div>
        <section className='contact--section'>
          <h1 className='contact--section--h1'>Sign Up</h1>
          <div className='border'></div>
          <form className='contact--form' onSubmit={this.handleSubmit}>
            <input
              name='name'
              className='contact--form--txt'
              placeholder='Your Name'
              value={this.state.name}
              onChange={this.handleChange}
            />
            {/* displaying error message */}
            <div className='error'>{this.state.nameError}</div>
            <input
              name='email'
              className='contact--form--txt'
              placeholder='Your Email'
              value={this.state.email}
              onChange={this.handleChange}
            />
            <div className='error'>{this.state.emailError}</div>
            <input
              name='phonenumber'
              type='tel'
              className='contact--form--txt'
              placeholder='Your Phone number'
              value={this.state.phonenumber}
              onChange={this.handleChange}
            />
            <input
              name='password'
              className='contact--form--txt'
              placeholder='Your Password'
              value={this.state.password}
              onChange={this.handleChange}
            />
            <div className='error'>{this.state.passwordError}</div>
            <textarea
              name='comment'
              id='textarea'
              className='contact--form--txt'
              placeholder='Comments'
              value={this.state.comment}
              onChange={this.handleChange}
            ></textarea>
            <button type='submit' className='contact--form--btn'>
              submit
            </button>
          </form>
        </section>
      </div>
    );
  }
}
