import React from 'react'
import styled from 'styled-components'

const GifContainer = styled.div`
  width: 100%;
  max-width: 320px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin: 5px 30px 5px 2px;
    border-radius: 15px;
    border-top-left-radius: 0px;
    width: 100%;
  }
`

//Custom JSON Payload Handle within Dialogflow Intent
const Gif = (props) => {
  const { link } = props.payload.fields.cards.structValue.fields

  return (
    <GifContainer>
      <img src={link.stringValue} alt="this is a gif from DF" />
    </GifContainer>
  )
}

export default Gif
