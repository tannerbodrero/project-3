import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
// import varios pages here

function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route />
                    <Route />
                    <Route />
                </Switch>
            </div>
        </Router>
    )
}

export default App;