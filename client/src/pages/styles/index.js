import styled from "styled-components";
import { animated as anim } from "react-spring";

export const StyledPage = styled(anim.section)`
  height: 100vw;
  width: 100vw;

  .RHS {
    position: absolute;
    width: 50vw;
    height: 100%;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.backgroundcolor};
  }

  @media (max-width: ${props => props.theme.tabletMax}) {
    display: flex;
    flex-direction: column;
    height: auto;

    .RHS {
      display: block;
      width: 100%;
      margin-top: 20px;
      pointer-events: none;
      overflow: hidden;
    }

    &.removeClickEventMobile {
      pointer-events: none;
      overflow: hidden;

      svg {
        pointer-events: none;
        overflow: hidden;
      }
    }

    svg {
      padding-left: 70px;
      overflow: hidden;
    }
  }

  @media (min-width: ${props => props.theme.tabletMax}) {
    &.hideOnDesktop {
      display: none;
    }
  }
`;

export const StyledInfoPanel = styled(anim.div)`
  position: fixed;
  left: 10%;
  top: 50%;
  transform: translateY(-50%);
  width: 35%;
  max-height: 90%;
  z-index: 2;

  @media (max-width: ${props => props.theme.mobileMax}) {
    width: 100%;
    top: 25%;
    text-align: left;
    transform: translateY(0%);
    left: 5.5% !important;

    button {
      background-color: ${props => props.theme.highlightcolor};
      font-size: 11px;
      padding: 7px 12px;
      font-weight: 800;
      letter-spacing: 2px;
      bottom: 20px;
    }
  }

  @media (max-width: ${props => props.theme.tabletMax}) {
    width: 100%;
    top: 25%;
    text-align: left;
    transform: translateY(0%);
    left: 15%;
  }

  @media (max-height: 400px) {
    top: 8%;

    button {
      display: none;
    }
  }
`;

export const StyledButton = styled.button`
  background-color: ${props => props.theme.highlightcolor};
  font-size: 15px;
  padding: 10px 15px;
  margin-bottom: 0;
  font-weight: 800;
  border: solid 5px transparent;
  line-height: 100%;
  letter-spacing: 2px;
  text-decoration: none;
  color: ${props => props.theme.primary};
  position: relative;
  cursor: pointer;
  transition: ease 0.5s;
  text-transform: ${props => (props.chatbot ? "Capitalize" : "Uppercase")};
  margin-top: ${props => (props.chatbot ? "0.4rem" : 0)};

  &:hover {
    border: 5px solid ${props => props.theme.subprimary};
    background: white;
    transition: ease 0.5s;
    color: ${props => props.theme.subprimary};
    background-color: ${props => props.theme.primary};
  }

  @media (max-width: ${props => props.theme.mobileMax}) {
    background-color: ${props => props.theme.highlightcolor};
    font-size: 11px;
    padding: 7px 12px;
    font-weight: 800;
    letter-spacing: 2px;
  }
`;

export const StyledPageSplit = styled.div`
  position: fixed;
  height: 110%;
  top: 50%;
  transform: translateY(-50%);
  width: 50vw;
  background-image: linear-gradient(
    to right,
    ${props => props.theme.backgroundcolor},
    ${props => props.theme.primary}
  );
  z-index: 1;
  box-shadow: 0px 0px 10px ${props => props.theme.subprimary};

  @media (max-width: ${props => props.theme.tabletMax}) {
    display: none;
  }
`;

export const StyledLogo = styled.div`
  width: 400px;
  height: 600px;
  position: absolute;
  top: 0;
  cursor: pointer;
  bottom: 0;
  left: auto;
  margin: auto;

  @media (max-width: ${props => props.theme.tabletMax}) {
    display: block;
    height: 100%;
    width: 100%;
    opacity: 0.1;
  }

  @media (max-height: 400px) {
    width: 240px;
    right: 8rem;
    top: -4rem;
  }
`;

export const StyledOpposite = styled.div`
  position: absolute;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translateY(-50%);
  width: 50vw;
  z-index: 0;
  overflow-x: hidden;

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: ${props => props.theme.tabletMax}) {
    position: relative;
    bottom: 0px;
    top: auto;
    left: 0%;
    transform: translate(0%);
  }

  @media (max-width: ${props => props.theme.mobileMax}) {
    overflow-x: visible;
    position: relative;
    height: 100%;
    top: 0;
    left: 0;
    transform: translateY(0%);
    width: 100%;
    z-index: 0;
    overflow-x: hidden;
  }
`;
