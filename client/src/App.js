import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// components
import Login from './components/login/Login';
import Register from './components/register/Register';

import Games from './components/games/Games';
import EnglishMC from './components/games/englishmc/EnglishMC';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route exact path="/" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/games" component={Games} /> 
                    <Route exact path="/games/englishmc" component={EnglishMC} /> 
                </div>
            </Router>
        )
    }
}
export default App;

