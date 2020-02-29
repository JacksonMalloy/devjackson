import React from "react";
import { ConvLeftBubble, ConvLeftContainer } from "./styles";

import { StyledButton } from "../../pages/styles";

//Custom JSON Payload Handle within Dialogflow Intent
const Buttons = props => {
  const { title } = props.payload.fields.cards.structValue.fields;

  return (
    <ConvLeftContainer buttons>
      <StyledButton chatbot onClick={props.onClick}>
        {title.stringValue}
      </StyledButton>
    </ConvLeftContainer>
  );
};

export default Buttons;
