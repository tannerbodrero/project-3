import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/home";
import Splash from "./pages/Splash";
import Garage from "./pages/Garage";
import Nav from "./components/Nav";
// import "bootstrap/dist/css/bootstrap.min.css"
// import various pages here

function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Splash} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/splash" component={Splash} />
                    <Route exact path="/garage" component={Garage} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;
