import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { v4 as uuid } from "uuid";
import composeRefs from "../../composeRefs";

import { ChatbotContext } from "../../context";
import {
  isNormalMessage,
  isButtonCard,
  isGifCard,
  isLinkCard,
  renderGif,
  renderLink
} from "./utils";

import {
  ChatContainer,
  ChatFooter,
  ChatMain,
  ChatHeader,
  ChatInput,
  ChatSubmit
} from "./styles";

import Buttons from "./Buttons";
import Message from "./Message";

//Creating cookie for unique session for DialogFlow
const cookies = new Cookies();

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");
  const [welcomeSent, setWelcomeSent] = useState(false);

  const { showBot, setShowBot } = useContext(ChatbotContext);

  // Creating react references to elements
  let messagesEnd;
  let chatInput;

  // Setting the cookie using uuid
  if (!cookies.get("userID")) {
    cookies.set("userID", uuid(), { path: "/" });
  }

  let inputRef = React.createRef();

  // Helper function to delay on component mount
  const resolveAfterXSeconds = time => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(time);
      }, time * 500);
    });
  };

  useEffect(() => {
    if (showBot) {
      messagesEnd.scrollIntoView({ behaviour: "smooth" });
    }
    if (chatInput) {
      chatInput.focus();
    }
  });

  /****************************
  Sends TEXT query to server
  *****************************/

  async function df_text_query(text) {
    let says = {
      speaks: "me",
      message: {
        text: {
          text
        }
      }
    };

    const res = await axios.post("/api/df_text_query", {
      text,
      userID: cookies.get("userID")
    });

    // Handles fullfillment routes for dialogflow

    let saysBatch = [
      says,
      ...res.data.fulfillmentMessages.map(message => ({
        speaks: "bot",
        message
      }))
    ];

    setMessages([...messages, ...saysBatch]);
  }

  /****************************
  Sends EVENT query to server
  *****************************/

  async function df_event_query(event) {
    const res = await axios.post("/api/df_event_query", {
      event,
      userID: cookies.get("userID")
    });

    // Iterate over responses in the request
    for (let msg of res.data.fulfillmentMessages) {
      let says = {
        speaks: "bot",
        message: msg
      };

      setMessages([...messages, says]);
    }
  }

  if (!welcomeSent) {
    resolveAfterXSeconds(1.5);
    df_event_query("Welcome");
    setWelcomeSent(true);
  }

  const renderButtons = fields => {
    return fields.map((button, i) => (
      <Buttons
        key={i}
        payload={button.structValue}
        onClick={handleButtonSend}
      />
    ));
  };

  const renderMessage = (message, i) => {
    if (isNormalMessage(message)) {
      return (
        <Message
          key={i}
          speaks={message.speaks}
          text={message.message.text.text}
        />
      );
    } else if (isButtonCard(message)) {
      return (
        <div>
          {renderButtons(
            message.message.payload.fields.buttons.listValue.values
          )}
        </div>
      );
    } else if (isGifCard(message)) {
      return (
        <div>
          {renderGif(message.message.payload.fields.gifs.listValue.values)}
        </div>
      );
    } else if (isLinkCard(message)) {
      return (
        <div>
          {renderLink(message.message.payload.fields.links.listValue.values)}
        </div>
      );
    }
  };

  // Renders all the messages
  const renderMessages = stateMessages => {
    if (stateMessages) {
      return stateMessages.map((message, i) => {
        return renderMessage(message, i);
      });
    }
    return null;
  };

  const toggleBot = () => {
    setShowBot(!showBot);
  };

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (value !== "") {
      const message = value.split();
      df_text_query(message);
    }
    setValue("");
  };

  const handleButtonSend = async event => {
    const eventText = event.target.innerText;

    await setValue(eventText);
    const message = value.split();
    await df_text_query(message);
    await setValue("");
  };

  // Check for if iOS for mobile switch fix
  // const checkIos = () => {
  //   return (
  //     navigator.appVersion.indexOf("Mac") !== -1 && window.innerWidth < 1000
  //   );
  // };

  // console.log(checkIos());

  if (showBot) {
    return (
      <>
        <div className="toggleNavButton" onClick={toggleBot}>
          <div className="navIconContainer">
            <div className="navIconOpen">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <ChatContainer>
          <ChatHeader>
            <span></span>
          </ChatHeader>
          <ChatMain className="scrollbar" id="style-4">
            {renderMessages(messages)}
            <div
              ref={el => {
                messagesEnd = el;
              }}
            />
          </ChatMain>
          <ChatFooter onSubmit={handleSubmit}>
            <ChatInput
              type="text"
              //Scrolls window to input
              ref={composeRefs(inputRef, input => {
                chatInput = input;
              })}
              placeholder="Type a message..."
              value={value}
              onChange={handleChange}
              onMouseEnter={() => {
                inputRef.current.focus();
              }}
            />
            <ChatSubmit
              type="submit"
              value="Submit"
              disabled={value.length < 1}
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
        <div className="toggleNavButton" onClick={toggleBot}>
          <div className="navIconContainer">
            <div className="navIcon">
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
};

export default Chatbot;
