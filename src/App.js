import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Home from "./components/Home/Home";
import Flix from "./components/Home/Flix";
import GenreCollection from "./components/Home/GenreCollection";
import NotAllowed from "./components/NotAllowed";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main id="mainWrapper">
          <Switch>
            <Route path="/signup" exact component={Signup} />
            <Route path="/login" exact component={Login} />
            <Route path="/flix/:flixId" component={Flix} />
            <Route path="/group/:genre" component={GenreCollection} />
            <Route path="/logout" exact component={Logout} />
            <Route path="/not-allowed" exact component={NotAllowed} />
            <Route path="/" exact component={Home} />
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
