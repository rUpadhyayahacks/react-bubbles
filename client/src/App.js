import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage";

import Login from "./components/Login";
import "./styles.scss";

function App() {
  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <Router>
      <div className="App">
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <nav className="nav">
          <Link to="/login">Login</Link>
          <Link to="/protected">Protected Page</Link>
          <Link to="/login" onClick={handleLogout}>
            Logout
          </Link>
        </nav>
        <Switch>
          <PrivateRoute path="/protected" component={BubblePage} />
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;