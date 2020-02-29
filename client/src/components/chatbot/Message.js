import React from "react";

import {
  ConvLeftContainer,
  ConvLeftBubble,
  ConvRightContainer,
  ConvRightBubble
} from "./styles";

const Message = props => {
  return props.speaking === "me" ? (
    <ConvRightContainer>
      <ConvRightBubble>{props.text}</ConvRightBubble>
    </ConvRightContainer>
  ) : (
    <ConvLeftContainer>
      <ConvLeftBubble>{props.text}</ConvLeftBubble>
    </ConvLeftContainer>
  );
};

export default Message;
