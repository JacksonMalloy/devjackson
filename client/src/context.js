import React, { Component } from "react";

const GlobalContext = React.createContext();

class GlobalProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBot: false
    };

    // Binding event listeners
    this.toggleBot = this.toggleBot.bind(this);
  }

  toggleBot() {
    this.setState({ showBot: !this.state.showBot });
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
