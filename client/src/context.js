import React, { Component } from "react";

export const GlobalContext = React.createContext();

class GlobalProvider extends Component {
  constructor(context) {
    super(context);
    this.currentContext = context;
    this.value = { ...context };
    this.state = {
      showBot: false
    };

    // Binding event listeners
    this.toggleBot = this.toggleBot.bind(this);
  }

  toggleBot() {
    this.setState({ showBot: !this.state.showBot });
  }

  update() {
    this.value = { ...this.currentContext };
  }

  isOutdated() {
    return JSON.stringify(this.value) !== JSON.stringify(this.currentContext);
  }

  render() {
    return (
      <GlobalContext.Provider
        value={{ ...this.state, toggleBot: this.toggleBot }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

// Creating the context to consume data
const GlobalConsumer = GlobalContext.Consumer;

export { GlobalProvider, GlobalConsumer };
