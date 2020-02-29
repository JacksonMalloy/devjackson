import React from "react";
import { useSpring } from "react-spring";
import { Link } from "react-router-dom";
import SVG from "../components/SVG/SVG";
import { useTheme } from "../themeContext";
import { withTheme } from "styled-components";
import {
  StyledPage,
  StyledInfoPanel,
  StyledPageSplit,
  StyledLogo,
  StyledButton
} from "./styles";

const Home = () => {
  const themeToggle = useTheme();

  const fade = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  });

  return (
    <>
      <StyledPage style={fade}>
        <StyledInfoPanel style={fade}>
          <h1>
            Hi,
            <br /> I'm Jackson, <br />
            Web Developer
          </h1>
          <h2>
            For all sorts of stakeholders, <br />I build software that matters.
          </h2>

          <Link to="/about/">
            <StyledButton>about</StyledButton>
          </Link>
        </StyledInfoPanel>

        <div className="RHS">
          <StyledLogo
            onClick={() => themeToggle.toggle()}
            className="removeClickEventMobile"
          >
            <SVG />
          </StyledLogo>
        </div>

        <StyledPageSplit />
      </StyledPage>
    </>
  );
};

export default withTheme(Home);
