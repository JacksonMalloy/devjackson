import styled from 'styled-components';

import { highlightcolor, primary, subprimary } from '../../../globals';

export const ChatContainer = styled.section`
  right: 0;
  bottom: 0;
  z-index: 99;
  height: 100%;
  width: 50vw;
  position: fixed;
  box-shadow: 0 0 450px 100px ${primary};
  border-radius: 3px;
  padding: 20px;
  font-size: 22px;
  overflow: none;

  @media (max-width: 700px) {
    height: 100vh;
    max-height: 100vh;
    width: 100vw;
    position: absolute;
    top: auto;
    left: 0;
    bottom: 0;
    border-radius: 0px;
    background-color: white;
  }
`;

export const ChatHeader = styled.header`
  padding: 10px 0px 30px 0px;
  display: flex;
  justify-content: space-between;

  background-repeat: no-repeat;
  background-size: 6%;
  background-position: left;
  font-size: 3rem;
  font-weight: bold;
  color: ${subprimary};

  span {
    padding-left: 55px;
    padding-top: 10px;
  }

  @media (max-width: 700px) {
    span {
      padding-left: 45px;
    }
  }
`;

export const CloseChat = styled.span`
  cursor: pointer;
`;

export const ChatMain = styled.div`
  position: relative;
  height: calc(100% - 160px);
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;

  &#style-4::-webkit-scrollbar-track {
    background-color: ${primary};
  }

  &#style-4::-webkit-scrollbar {
    width: 5px;
    background-color: ${primary};
  }

  &#style-4::-webkit-scrollbar-thumb {
    background-color: #000000;
    border: 2px solid ${highlightcolor};
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const ChatFooter = styled.form`
  display: flex;
  position: absolute;
  bottom: 0;
  height: 80px;
  width: 48vw;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  margin-bottom: 0;
  border: none;

  &:focus {
    border: none;
    outline: none;
    -webkit-backdrop-filter: blur(80px);
    backdrop-filter: blur(80px);
  }

  @media (max-width: 700px) {
    width: 90vw;
    font-size: 1rem;
  }
`;

export const ChatInput = styled.input`
  margin-bottom: 0;
  border: none;
  height: 100%;
  width: 100%;
  color: ${subprimary};
  background-color: inherit;

  &:focus {
    border: none;
    outline: none;
    -webkit-backdrop-filter: blur(80px);
    backdrop-filter: blur(80px);
  }

  @media (max-width: 700px) {
    padding-right: 15px;
  }
`;

export const ChatSubmit = styled.button`
  height: 40px;
  width: 110px;
  cursor: pointer;
  background-color: ${highlightcolor};
  border: none;
  border-radius: 10px;
  color: ${primary};
  box-shadow: 0px 0px 5px 1px inherit;

  &:disabled {
    box-shadow: 0px 0px 10px 5px ${primary} inset;
    background-color: ${primary};
    color: ${subprimary};
    opacity: 0.5;
    cursor: auto;
  }

  &:focus {
    display: none;
  }
`;

export const ConvLeftContainer = styled.div`
  text-align: left;
`;

export const ConvRightContainer = styled.div`
  text-align: right;
  padding-right: 15px;
`;

export const ConvLeftBubble = styled.div`
  max-width: 350px;
  height: 100%;
  border-radius: 30px;
  margin: 10px 0px;
  width: inherit;
  overflow-wrap: break-word;
  padding: 7px 20px;
  display: inline-block;
  font-size: 15px;
  word-spacing: 0.3px;
  color: white;
  text-align: start;
  border-top-left-radius: 0;
  background-color: ${primary};
  color: #222;
`;

export const ConvRightBubble = styled.div`
  max-width: 350px;
  height: 100%;
  border-radius: 30px;
  margin: 10px 0px;
  width: inherit;
  overflow-wrap: break-word;
  padding: 7px 20px;
  display: inline-block;
  font-size: 15px;
  word-spacing: 0.3px;
  color: white;
  text-align: start;
  border-top-right-radius: 0;
  background-color: ${highlightcolor};
`;
