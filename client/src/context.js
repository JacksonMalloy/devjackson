import React, { Component } from "react";

const GlobalContext = React.createContext();

class GlobalProvider extends Component {
  state = {
    showBot: false
  };

  toggleBot() {
    this.setState({ showBot: !this.state.showBot });
  }

  render() {
    return (
      <GlobalContext.Provider value={{ ...this.state, showBot: this.showBot }}>
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

// Creating the context to consume data
const GlobalConsumer = GlobalContext.Consumer;

export { GlobalProvider, GlobalConsumer };
