import React from "react";
import WorkGrid from "../components/projects/WorkGrid";
import { useSpring, animated as anim } from "react-spring";
import styled from "styled-components";

import SVG from "../components/SVG/SVG";
import { Page, InfoPanel, Opposite, PageSplit } from "./styles";
import { Logo } from "./styles";

import { useBlurInChildren } from "../useBlurInChildren";

export default function Projects() {
  const fade = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  });

  const StyledLetter = styled(anim.span)``;

  const strOne = "Looking";
  const strTwo = "to Hire?";

  const firstStringClass = strOne
    .split("")
    .map(letter => <StyledLetter>{letter}</StyledLetter>);

  const secondStringClass = strTwo.split("").map((letter, i) => (
    <StyledLetter key={i} className="delay">
      {letter}
    </StyledLetter>
  ));

  const lineOne = useBlurInChildren(firstStringClass);
  const lineTwo = useBlurInChildren(secondStringClass);

  return (
    <Page style={fade}>
      <InfoPanel className="about_margin" style={fade}>
        <h1>
          {lineOne} <br />
          {lineTwo}
        </h1>
        <h2>
          Please leave my personal <br /> assistant a message.
        </h2>

        <button>contact</button>
      </InfoPanel>
      <div className="RHS hideOnDesktop">
        <Logo className="removeClickEventMobile">
          <SVG />
        </Logo>
      </div>
      <PageSplit />
      <Opposite>
        <WorkGrid />
      </Opposite>
    </Page>
  );
}
