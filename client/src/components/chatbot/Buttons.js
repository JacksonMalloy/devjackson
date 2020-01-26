import React from "react";
import { ConvLeftBubble, ConvLeftContainer } from "./styles";

//Custom JSON Payload Handle within Dialogflow Intent
const Buttons = props => {
  const { title } = props.payload.fields.cards.structValue.fields;

  return (
    <ConvLeftContainer primary onClick={props.onClick}>
      <ConvLeftBubble primary>{title.stringValue}</ConvLeftBubble>
      {console.log(props)}
    </ConvLeftContainer>
  );
};

export default Buttons;
