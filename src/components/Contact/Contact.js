import React, { Component } from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
  nameError: "",
  emailError: "",
  passwordError: "",
};

export default class Contact extends Component {
  state = initialState;

  handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    let passwordError = "";

    if (!this.state.name) {
      nameError = "Name cannot be blank";
    }

    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }

    if (!this.state.password) {
      passwordError = "Password cannot be blank";
    }

    if (emailError || nameError || passwordError) {
      this.setState({ emailError, nameError, passwordError });
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear the form
      this.setState(initialState);
    }
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
              type='tel'
              className='contact--form--txt'
              placeholder='Your Phone number'
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
              name='textarea'
              id='textarea'
              className='contact--form--txt'
              placeholder='Comments'
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
