import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import './Login.css';
import * as action from './../../constants/ActionTypes';
export default class Login extends Component {
    constructor() {
        super();
        let loggedIn = false;

        const token = localStorage.getItem('user');
        console.log(token);
        if (token) loggedIn = true;
        this.state = {
            username: '',
            password: '',
            errors: '',
            loggedIn
        }
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    onClick = async (e) => {
        e.preventDefault();
        let { username, password } = this.state;
        try {
            const token = await axios.post(`${action.URL}/users/login`, { username, password });

            localStorage.setItem('user', token.data);
            this.setState({
                loggedIn: true
            })
        } catch (err) {
            this.setState({
                errors: 'Login failed'
            })
        }

    }
    render() {
        if (this.state.loggedIn) {
            return <Redirect to="/games" />
        }
        let { username, password, errors } = this.state;
        return (
            <div className="initial">
                <div className="sidenav">
                    <div className="login-main-text">
                        <h1>Game App</h1>
                        <p>Code by #Chimsedimua</p>
                    </div>
                </div>
                <div className="main">
                    <div className="login-form">
                        <div className="login">
                            <div className="login-form-title text-center"><del>Login</del></div>
                            {
                                errors ? 
                                    <div class="alert alert-danger">
                                        {errors}
                                    </div>
                                : ''
                            }
                            <form>
                                <div className="form-group">
                                    <label className="form-name">Username:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="username"
                                        value={username}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-name">Password:</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        value={password}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <button type="submit" className="btn btn-black w-100 p-2" onClick={this.onClick}>Login</button>
                                <div>if you don't have account? <Link to="/register">Register</Link></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
} 
