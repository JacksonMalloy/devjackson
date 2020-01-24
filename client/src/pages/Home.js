import React from "react";
import SVG from "../components/SVG/SVG";
import { useSpring } from "react-spring";
import { Link } from "react-router-dom";
import { useTheme } from "../themeContext";
import { withTheme } from "styled-components";

import { Page, InfoPanel, PageSplit, Logo } from "./styles";
import styled from "styled-components";
import { animated as anim } from "react-spring";

const Home = props => {
  const themeToggle = useTheme();

  const fade = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  });

  const getRandomValues = () => {
    return Math.random();
  };

  const letterAnimation = useSpring({
    config: { duration: 1 },
    x: 0,
    from: { x: 1000 }
  });

  const StyledLetter = styled(anim.span)``;

  const strOne = "Hi,";
  const strTwo = "I'm Jackson,";

  const firstStringClass = strOne
    .split("")
    .map(letter => (
      <StyledLetter style={letterAnimation}>{letter}</StyledLetter>
    ));

  const secondStringClass = strTwo.split("").map((letter, i) => (
    <StyledLetter key={i} style={letterAnimation}>
      {letter}
    </StyledLetter>
  ));

  return (
    <>
      <Page style={fade}>
        <InfoPanel style={fade}>
          <h1>
            {firstStringClass}
            <br /> {secondStringClass} <br />
            Web Developer.
          </h1>
          <h2>
            For all sorts of stakeholders, <br />I build software that matters.
          </h2>

          <Link to="/about/">
            <button>about</button>
          </Link>
        </InfoPanel>

        <div className="RHS">
          <Logo
            onClick={() => themeToggle.toggle()}
            className="removeClickEventMobile"
          >
            <SVG />
          </Logo>
        </div>

        <PageSplit />
      </Page>
    </>
  );
};

export default withTheme(Home);
