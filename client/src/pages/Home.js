import React from "react";
import SVG from "../components/SVG/SVG";
import { Link } from "react-router-dom";
import { useTheme } from "../themeContext";
import { withTheme } from "styled-components";

import { Page, InfoPanel, PageSplit, Logo } from "./styles";
import styled from "styled-components";
import { animated as anim, useSpring } from "react-spring";

import { useBlurInChildren } from "../useBlurInChildren";

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

  const StyledLetter = styled(anim.span)``;

  const strOne = "Hi,";
  const strTwo = "I'm Jackson,";
  const strThree = "Web Developer";

  const firstStringClass = strOne
    .split("")
    .map(letter => <StyledLetter>{letter}</StyledLetter>);

  const secondStringClass = strTwo.split("").map((letter, i) => (
    <StyledLetter key={i} className="delay">
      {letter}
    </StyledLetter>
  ));

  const thirdStringClass = strThree.split("").map((letter, i) => (
    <StyledLetter key={i} className="delay">
      {letter}
    </StyledLetter>
  ));

  const lineOne = useBlurInChildren(firstStringClass);
  const lineTwo = useBlurInChildren(secondStringClass);
  const lineThree = useBlurInChildren(thirdStringClass);

  return (
    <>
      <Page style={fade}>
        <InfoPanel style={fade}>
          <h1>
            {lineOne}
            <br /> {lineTwo} <br />
            {lineThree}
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
