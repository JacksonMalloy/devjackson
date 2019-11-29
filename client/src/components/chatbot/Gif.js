import React from "react";

//Custom JSON Payload Handle within Dialogflow Intent
const Gif = props => {
  const {
    link
  } = props.payload.fields.cards.structValue.fields;

  return (
    <div className="grid" style={{paddingTop: '10px'}}>
      <img src={link.stringValue} alt="this is a gif from DF" style={{height: "100%", borderRadius: '10px', borderTopLeftRadius: 0}}/>
    </div>
  );
};

export default Gif;
