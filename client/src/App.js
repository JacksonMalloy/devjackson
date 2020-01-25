import React, { useState } from "react";
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

import { ChatbotContext } from "./context";

const App = () => {
  const [showBot, setShowBot] = useState(false);

  return (
    <ChatbotContext.Provider value={{ showBot, setShowBot }}>
      <Chatbot />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/work" component={Projects} />
        <Route component={Error} />
      </Switch>
    </ChatbotContext.Provider>
  );
};

export default App;
