import styled from 'styled-components';
import {
  tabletMax,
  mobileMax,
  subprimary,
  highlightcolor,
  primary
} from '../../../globals';

export const NavbarContainer = styled.div`
  width: 80px;
  position: fixed;
  height: 100vh;
  display: block;
  z-index: 3;

  nav {
    display: block;
    text-align: center;
    position: absolute;
    height: 210px;
    top: 50%;
    margin-top: -150px;
    width: 100%;
  }

  li {
    list-style: none;
    color: ${subprimary};
    font-size: 22px;
    line-height: 51px;
    height: 51px;
    position: relative;
    text-decoration: none;
    cursor: pointer;

    &:hover span {
      display: inline-block;
      cursor: pointer;
    }

    i {
      color: ${subprimary};
    }

    &:hover i {
      display: none;
      cursor: pointer;
    }

    span {
      display: none;
      color: ${highlightcolor};
      text-decoration: none;
      text-transform: Uppercase;
      font-size: 12px;
    }
  }

  ul {
    position: absolute;
    bottom: 20px;
    width: 100%;
    display: block;
    padding: 0;
    list-style: none;
    text-align: center;
    margin: 0;

    i {
      color: ${subprimary};
      font-size: 22px;
      padding: 0 13px;
      line-height: 51px;
      height: 51px;
      position: relative;
      text-decoration: none;

      &:hover {
        color: ${highlightcolor};
        cursor: pointer;
      }
    }
  }

  @media (max-width: ${tabletMax}) {
    width: 100vw;
    height: 80px;
    position: fixed;
    bottom: 0;
    z-index: 99;
    background-color: ${primary};

    li {
      display: inline-block;
      line-height: 80px;
      width: 100%;
      height: 100%;
      z-index: 97;

      a {
        height: 100%;
        display: inline-block;
        width: 100%;
      }
    }

    ul {
      display: none;
      position: fixed;
      right: 50px;
      top: 50px;
      line-height: 80px;
      width: 100px;
      bottom: 0;
      z-index: 90;
      height: 70px;

      a {
        line-height: 80px;
        width: 50px;
        height: 100%;
      }

      li {
        line-height: 80px;
      }
    }

    nav {
      top: 0;
      height: 100%;
      z-index: 90;
      width: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: space-evenly;
    }

    .logo {
      bottom: 5px;
      display: none;
      z-index: 97;

      a {
        height: 100%;
        width: 100%;
        display: block;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;

export const NavbarLogo = styled.div`
  width: 46px;
  align-content: center;
  position: fixed;
  left: 14px;
  top: 20px;

  @media (max-width: ${mobileMax}) {
    left: 5px;
    display: none;
  }
`;
