import React from 'react';
import { ConvLeftContainer, ConvLeftBubble } from './styles';

//Custom JSON Payload Handle within Dialogflow Intent
const Prizes = props => {
  const { source, title } = props.payload.fields.cards.structValue.fields;

  return (
    <ConvLeftContainer>
      <ConvLeftBubble>
        <a href={source.stringValue} target='_blank' rel='noopener noreferrer'>
          {title.stringValue}
        </a>
      </ConvLeftBubble>
    </ConvLeftContainer>
  );
};

export default Prizes;
