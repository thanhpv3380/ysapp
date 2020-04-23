import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import './Register.css';
import * as action from './../../constants/ActionTypes';
export default class Register extends Component {
    constructor() {
        super();
        let loggedIn = false;
       
        const token =  localStorage.getItem('user');
        if (token) loggedIn = true;
        this.state = {
            name: '',
            username: '',
            password: '',
            errors: '',
            loggedIn
        }
    }
    onChange = async (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        if (e.target.name === 'username'){
            let username = e.target.value;
            const res = await axios.post(`${action.URL}/users/checkUsername`, { username });
            //console.log(res);
            if (!res.data.success){
                this.setState({
                    errors: 'Username is exist'
                })
            } else {
                this.setState({
                    errors: ''
                });
            }
        }
        
    }
    onClick = async (e) => {
        e.preventDefault();
        let { username, password, name } = this.state;
        try {
            const res = await axios.post(`${action.URL}/users/register`, { username, password, name });
            alert('register success');
            this.props.history.push('/');
        } catch(err){
            console.log(err);
        }
    }
    render() {
        if (this.state.loggedIn){
            return <Redirect to="/games" />
        }
        let { username, password, name, errors } = this.state;
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
                            <div className="login-form-title text-center"><del>Register</del></div>
                            {
                                errors ? 
                                    <div class="alert alert-danger">
                                        {errors}
                                    </div>
                                : ''
                            }
                            <form>
                                <div className="form-group">
                                    <label className="form-name">Name:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        value={name}
                                        onChange={this.onChange}
                                    />
                                </div>
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
                                <button type="submit" className="btn btn-black w-100 p-2" disabled={errors ? 'disable' : ''} onClick={this.onClick}>Register</button>
                                <div>if you have account? <Link to="/">Login</Link></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
} 
