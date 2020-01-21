import React from "react";
import "./normalize.scss";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Error from "./pages/Error";
import { Route, Switch } from "react-router-dom";
import Chatbot from "./components/chatbot";

import { GlobalProvider } from "./context";

class App extends React.Component {
  render() {
    return (
      <GlobalProvider>
        <Chatbot />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/work" component={Projects} />
          <Route component={Error} />
        </Switch>
      </GlobalProvider>
    );
  }
}

export default App;
