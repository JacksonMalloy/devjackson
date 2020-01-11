import styled from "styled-components";

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
    color: ${props => props.theme.subprimary};
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
      color: ${props => props.theme.subprimary};
    }

    &:hover i {
      display: none;
      cursor: pointer;
    }

    span {
      display: none;
      color: ${props => props.theme.highlightcolor};
      text-decoration: none;
      text-transform: Uppercase;
      font-size: 12px;
    }
  }

  .activeNavIcon {
    & span {
      display: inline-block;
      cursor: pointer;
    }

    & i {
      display: none;
      cursor: pointer;
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
      color: ${props => props.theme.subprimary};
      font-size: 22px;
      padding: 0 13px;
      line-height: 51px;
      height: 51px;
      position: relative;
      text-decoration: none;
    }
  }

  @media (max-width: ${props => props.theme.tabletMax}) {
    width: 100vw;
    height: 80px;
    position: fixed;
    bottom: 0;
    z-index: 99;
    background-color: ${props => props.theme.primary};

    a {
      display: inline-block;
      line-height: 80px;
      width: 100%;
      height: 100%;
      z-index: 97;
      color: ${props => props.theme.highlightcolor};

      li {
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
  cursor: pointer;

  @media (max-width: ${props => props.theme.mobileMax}) {
    left: 5px;
    display: none;

    &.mobileNavLogo {
      height: 100%;
      width: 100%;
      position: relative;
      display: flex;
      justify-items: center;
      align-items: center;
      z-index: 97;
      top: 0px;

      div {
        svg {
          width: 40%;
        }
      }
    }
  }

  @media (min-width: ${props => props.theme.mobileMax}) {
    &.mobileNavLogo {
      display: none;
    }
  }
`;
