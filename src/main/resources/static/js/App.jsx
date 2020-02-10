import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppNavbar from "./AppNavbar.jsx";
import AppFooter from "./AppFooter.jsx";
import Contact from "./Contact.jsx";
import Home from "./Home.jsx";
import BookEdit from "./BookEdit.jsx";
import RegisterPage from "./RegisterPage.jsx";
import LoginPage from "./LoginPage.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <Router>
    <AppNavbar />
    <main role="main" className="flex-shrink-0">
      <div>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/contact" exact={true} component={Contact} />
          <Route path="/books/:id" exact={true} component={BookEdit} />
          <Route path="/register" exact={true} component={RegisterPage} />
          <Route path="/login" exact={true} component={LoginPage} />
        </Switch>
      </div>
    </main>
    <AppFooter />
  </Router>,
  document.getElementById("root")
);
