import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Redirect,
  Prompt
} from "react-router-dom";
import Route from "react-router-dom/Route";
import "./App.css";
import About from "./components/about";
import Student from "./components/student";

class App extends Component {
  state = {
    loggedIn: false
  };
  handler = () => {
    this.setState(prevState => ({
      loggedIn: !prevState.loggedIn
    }));
  };
  render() {
    return (
      <Router>
        <div className="App">
          {/* Link and NavLink is exactly same purpose
        but NavLink has more stylish capabilities for styling  */}
          <ul>
            <li>
              <NavLink to="/" exact activeStyle={{ color: "green" }}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" exact activeStyle={{ color: "green" }}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/student/Tharusha"
                exact
                activeStyle={{ color: "green" }}
              >
                Student Tharusha
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/student/Lahiru"
                exact
                activeStyle={{ color: "green" }}
              >
                Student Lahiru
              </NavLink>
            </li>
          </ul>

          {/* Prompt is used to give warning message before login */}
          <Prompt
            when={!this.state.loggedIn}
            message={location => {
              return location.pathname.startsWith("/student")
                ? "Are you sure?"
                : true;
            }}
          />

          {/* login button to login */}
          <input
            type="button"
            value={this.state.loggedIn ? "logout" : "login"}
            onClick={this.handler.bind(this)}
          />

          {/* exact is used to help for path matching
          and strict is used for strict path matching  */}
          <Route
            path="/"
            exact
            strict
            render={() => {
              return <h1>Welcome to Home</h1>;
            }}
          />

          <Route path="/about" exact strict component={About} />

          {/* here we use render for because we check login status before route
          and if not login redirect it to home page */}
          <Route
            path="/student/:username"
            exact
            strict
            render={({ match }) =>
              this.state.loggedIn ? (
                <Student username={match.params.username} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
        </div>
      </Router>
    );
  }
}

export default App;
