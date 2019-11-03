import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { v4 as uuid } from 'uuid';

import Message from './Message';

import {
  ChatContainer,
  ChatFooter,
  ChatMain,
  ChatHeader,
  ChatInput,
  ChatSubmit,
  CloseChat
} from './styles';

//Creating cookie for unique session for DialogFlow
const cookies = new Cookies();

class Chatbot extends Component {
  // Creating react references to elements
  messagesEnd;
  chatInput;

  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      value: '',
      showBot: false,
      welcomeSent: false,
      botName: ''
    };

    // Setting the cookie using uuid
    if (!cookies.get('userID')) {
      cookies.set('userID', uuid(), { path: '/' });
    }

    // Binding event listeners
    this.toggleBot = this.toggleBot.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Helper function to delay on component mount
  resolveAfterXSeconds(time) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(time);
      }, time * 1000);
    });
  }

  // Delays the welcome message and showBot
  async componentDidMount() {
    if (!this.state.welcomeSent) {
      await this.resolveAfterXSeconds(1.5);
      this.df_event_query('Welcome');
      this.setState({ welcomeSent: true, showBot: true });
    }
  }

  // Scrolls to latest message when the state is updated
  componentDidUpdate() {
    if (this.state.showBot) {
      this.messagesEnd.scrollIntoView({ behaviour: 'smooth' });
    }
    if (this.chatInput) {
      this.chatInput.focus();
    }
  }

  /****************************
  Sends TEXT query to server
  *****************************/
  async df_text_query(text) {
    let says = {
      speaks: 'me',
      message: {
        text: {
          text
        }
      }
    };

    this.setState({
      messages: [...this.state.messages, says]
    });

    const res = await axios.post('/api/df_text_query', {
      text,
      userID: cookies.get('userID')
    });

    // Handles fullfillment routes for dialogflow
    if (
      res.data.action === 'input.whoAreYou' &&
      res.data.allRequiredParamsPresent
    ) {
      this.setState({ botName: res.data.parameters.fields.name.stringValue });
    }

    res.data.fulfillmentMessages.forEach(message => {
      says = {
        speaks: 'bot',
        message
      };

      this.setState({
        messages: [...this.state.messages, says]
      });
    });
  }

  /****************************
  Sends EVENT query to server
  *****************************/
  async df_event_query(event) {
    const res = await axios.post('/api/df_event_query', {
      event,
      userID: cookies.get('userID')
    });

    // Iterate over responses in the request
    for (let msg of res.data.fulfillmentMessages) {
      let says = {
        speaks: 'bot',
        message: msg
      };

      this.setState({ messages: [...this.state.messages, says] });
    }
  }

  renderMessage(message, i) {
    return (
      <Message
        key={i}
        speaks={message.speaks}
        text={message.message.text.text}
      />
    );
  }

  // Renders all the messages
  renderMessages(stateMessages) {
    if (stateMessages) {
      return stateMessages.map((message, i) => {
        return this.renderMessage(message, i);
      });
    }
    return null;
  }

  toggleBot() {
    this.setState({ showBot: !this.state.showBot });
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.value !== '') {
      this.df_text_query(this.state.value.split());
    }
    this.setState({ value: '' });
  }

  handleToggle() {
    this.setState({ toggle: !this.state.toggle });
  }

  render() {
    const { showBot, botName } = this.state;

    if (showBot) {
      return (
        <>
          <div className='toggleNavButton' onClick={this.toggleBot}>
            <div className='navIconContainer'>
              <div className='navIconOpen'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <ChatContainer>
            <ChatHeader>
              <span>{botName}</span>
            </ChatHeader>
            <ChatMain className='scrollbar' id='style-4'>
              {this.renderMessages(this.state.messages)}
              <div
                ref={el => {
                  this.messagesEnd = el;
                }}
              />
            </ChatMain>
            <ChatFooter onSubmit={this.handleSubmit}>
              <ChatInput
                type='text'
                //Scrolls window to input
                ref={input => {
                  this.chatInput = input;
                }}
                placeholder='Type a message...'
                value={this.state.value}
                onChange={this.handleChange}
              />
              <ChatSubmit
                type='submit'
                value='submit'
                disabled={this.state.value.length < 1}
              >
                SEND
              </ChatSubmit>
            </ChatFooter>
          </ChatContainer>
        </>
      );
    } else {
      return (
        <>
          <div className='toggleNavButton' onClick={this.toggleBot}>
            <div className='navIconContainer'>
              <div className='navIcon'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}

export default Chatbot;
