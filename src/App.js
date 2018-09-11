import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Index from "./components/layout/Index";
import Lyrics from "./components/tracks/Lyrics";
import { Provider } from "./context";
class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <NavBar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/lyrics/track/:id" component={Lyrics} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
