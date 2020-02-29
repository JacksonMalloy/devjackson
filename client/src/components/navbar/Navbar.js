import React from "react";
import NavbarIcons from "./NavbarIcons";
import SVG from "../SVG/SVG";
import { useTheme } from "../../themeContext";
import { withTheme } from "styled-components";
import { StyledNavbarContainer, StyledNavbarLogo } from "./styles";

function Navbar() {
  const themeToggle = useTheme();

  return (
    <>
      <StyledNavbarContainer>
        <StyledNavbarLogo onClick={() => themeToggle.toggle()}>
          <SVG />
        </StyledNavbarLogo>

        <NavbarIcons />

        <ul>
          <a
            href="https://www.linkedin.com/in/jacksonmalloy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in" />
          </a>
          <a
            href="https://github.com/JacksonMalloy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" />
          </a>
        </ul>
      </StyledNavbarContainer>
    </>
  );
}

export default withTheme(Navbar);
