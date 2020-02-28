import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", this.state.credentials)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/protected");
      })
      .catch(err => console.log("Error", err));
  };

  render() {
    return (
      // make a post request to retrieve a token from the api
      // when you have handled the token, navigate to the BubblePage route

      <div className="form-container">
        <div>
          <h1>Welcome to the Bubble App!</h1>
          <p>Build a login page here</p>
        </div>
        <h2>Login Form:</h2>
        <form className="login-form" onSubmit={this.login}>
          <label htmlFor="username ">Username:</label>
          <input
            type="text"
            name="username"
            placeholder="Type test"
            value={this.state.credentials.username}
            onChange={this.handleChange}
            required
          />
          <label htmlFor="password">Password:</label>

          <input
            type="password"
            name="password"
            placeholder="Type 1234"
            value={this.state.credentials.password}
            onChange={this.handleChange}
            required
          />
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;