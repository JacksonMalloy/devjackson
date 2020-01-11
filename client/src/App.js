import React from "react";
import "./normalize.scss";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Skills from "./pages/Skills";
import Error from "./pages/Error";
import { Route, Switch } from "react-router-dom";
import Chatbot from "./components/chatbot";

export default function App() {
  return (
    <div className="masterContainer">
      <Navbar />
      <Chatbot />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/work" component={Work} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}
