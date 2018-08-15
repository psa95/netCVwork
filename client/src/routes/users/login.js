import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { loginRequest } from '../../helpers/network';
import { Redirect } from 'react-router-dom'
class Login extends Component {
  state = {
    loginSuccess: false,
    error: false
  }
  updateVal = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  submitForm = async(e) => {
    e.preventDefault();
    try {
      const response = await loginRequest(this.state.email,this.state.password);
      console.log(response);
      this.setState ({
        loginSuccess: response.success,
        error: false
      });
      localStorage.setItem("token",response.token);
      localStorage.setItem("name",response.name);

    } catch(e) { 
      this.setState ({
        error: e.email
      });
      console.log(e);
    }
    console.log(this.state.email);
    console.log(this.state.password);
  }
  render(){
    return (<Layout>
      {this.state.error && <ErrorBox msg={this.state.error}/>}
      {this.state.loginSuccess && <Redirect to="/users/"/>}
      <form onSubmit={this.submitForm}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input name="email" type="email" onChange={this.updateVal} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input name="password" onChange={this.updateVal} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
      </div>
      <button type="submit" className="btn btn-primary">Login</button>
    </form>
    </Layout>)
  }
}
export default Login;

const ErrorBox = (props) => {
  return <div className="alert alert-danger" role="alert">
    {props.msg}
  </div>
}
