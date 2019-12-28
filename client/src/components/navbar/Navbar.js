import React from "react";
import NavbarIcons from "./NavbarIcons";
import SVG from "../SVG/SVG";
import { useTheme } from "../../themeContext";
import { withTheme } from "styled-components";
import { NavbarContainer, NavbarLogo } from "./styles";

function Navbar() {
  const themeToggle = useTheme();

  return (
    <>
      <NavbarContainer>
        <NavbarLogo onClick={() => themeToggle.toggle()}>
          <SVG />
        </NavbarLogo>

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
      </NavbarContainer>
    </>
  );
}

export default withTheme(Navbar);
