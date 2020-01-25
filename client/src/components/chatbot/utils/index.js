import React from "react";
import Gif from "../Gif";
import Links from "../Links";

export const isNormalMessage = message => {
  return message.message && message.message.text && message.message.text.text;
};

export const isButtonCard = message => {
  return (
    message.message &&
    message.message.payload &&
    message.message.payload.fields &&
    message.message.payload.fields.buttons
  );
};

export const isGifCard = message => {
  return (
    message.message &&
    message.message.payload &&
    message.message.payload.fields &&
    message.message.payload.fields.gifs
  );
};

export const isLinkCard = message => {
  return (
    message.message &&
    message.message.payload &&
    message.message.payload.fields &&
    message.message.payload.fields.links
  );
};

//Render Functions
export const renderGif = fields => {
  return fields.map((gif, i) => <Gif key={i} payload={gif.structValue} />);
};

export const renderLink = fields => {
  return fields.map((link, i) => <Links key={i} payload={link.structValue} />);
};
