import styled from "styled-components";
import { animated as anim } from "react-spring";

export const Page = styled(anim.section)`
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

export const InfoPanel = styled(anim.div)`
  position: fixed;
  left: 10%;
  top: 50%;
  transform: translateY(-50%);
  width: 35%;
  max-height: 90%;
  z-index: 2;

  button {
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
    text-transform: uppercase;

    &:hover {
      border: 5px solid ${props => props.theme.subprimary};
      background: white;
      transition: ease 0.5s;
      color: ${props => props.theme.subprimary};
      background-color: ${props => props.theme.primary};
    }
  }

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
`;

export const PageSplit = styled.div`
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

export const Logo = styled.div`
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
`;

export const Opposite = styled.div`
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

export const Blob = styled.div`
  & > div {
    position: absolute;
    will-change: transform;
    border-radius: 50%;
    background: ${props => props.theme.highlightcolor};
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    opacity: 0.6;
  }

  & > div:nth-child(1) {
    width: 150px;
    height: 150px;
  }

  & > div:nth-child(2) {
    width: 50px;
    height: 50px;
  }

  & > div:nth-child(3) {
    width: 120px;
    height: 120px;
  }

  & > div::after {
    content: "";
    position: absolute;
    top: 20px;
    left: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  & > div:nth-child(2)::after {
    top: 70px;
    left: 70px;
    width: 70px;
    height: 70px;
  }

  & > div:nth-child(3)::after {
    top: 50px;
    left: 50px;
    width: 50px;
    height: 50px;
  }

  & {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`;
