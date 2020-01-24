import React from "react";
import { useSpring, animated as anim } from "react-spring";

import { Page, PageSplit, InfoPanel, Opposite } from "./styles";
import { Link } from "react-router-dom";
import SVG from "../components/SVG/SVG";
import { Logo } from "./styles";

import { useBlurInChildren } from "../useBlurInChildren";
import styled from "styled-components";

function Skills() {
  const fade = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  });

  const StyledLetter = styled(anim.span)``;

  const strOne = "Using ";
  const strTwo = "Modern Tools";
  const strThree = "and Best Practices.";

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
    <Page style={fade}>
      <InfoPanel className="skillsText about_margin" style={fade}>
        <h1>
          {lineOne} <br />
          {lineTwo} <br />
          {lineThree}
        </h1>
        <h2>
          This app is built with <br />
          React, Node + Dialogflow
        </h2>

        <Link to="/work/">
          <button>projects</button>
        </Link>
      </InfoPanel>
      <div className="RHS hideOnDesktop">
        <Logo className="removeClickEventMobile">
          <SVG />
        </Logo>
      </div>
      <PageSplit />
      <Opposite className="mobile__change"></Opposite>
    </Page>
  );
}

export default Skills;
