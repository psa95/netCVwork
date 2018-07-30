import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Signup extends Component {
    render() {
        return(
            <div>
                <h1 align="center">SIGNUP PAGE</h1>
                <br/>
                <br/>
                <div align="center">
                    <form method="POST" action="/add-user">
                        <label>Name : </label>
                        <input type="text" name="name"/><br/>
                        <label>Username : </label>
                        <input type="text" name="username"/><br/>
                        <label>Password : </label>
                        <input type="password" name="password"/><br/>
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Signup
