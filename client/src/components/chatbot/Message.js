import React from 'react'

import { ConvLeftContainer, ConvLeftBubble, ConvRightContainer, ConvRightBubble } from './styles'

const Message = ({ speaking, text }) => {
  return speaking === 'me' ? (
    <ConvRightContainer>
      <ConvRightBubble>{text}</ConvRightBubble>
    </ConvRightContainer>
  ) : (
    <ConvLeftContainer>
      <ConvLeftBubble>{text}</ConvLeftBubble>
    </ConvLeftContainer>
  )
}

export default Message
