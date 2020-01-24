import React, { lazy, Suspense } from "react";
import { useSpring } from "react-spring";
import { Page, InfoPanel, PageSplit, Opposite } from "./styles";
import { Link } from "react-router-dom";
import SVG from "../components/SVG/SVG";
import { Logo } from "./styles";
import styled from "styled-components";
import { animated as anim } from "react-spring";
import { useBlurInChildren } from "../useBlurInChildren";

const Gallery = lazy(() => import("../components/gallery/Gallery"));

export default function About() {
  const fade = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  });

  const StyledLetter = styled(anim.span)``;

  const strOne = "I Build";
  const strTwo = "Modern User";
  const strThree = "Experiences.";

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
    <Page className="page-mobile" style={fade}>
      <InfoPanel className="about_margin" style={fade}>
        <h1>
          {lineOne} <br />
          {lineTwo} <br />
          {lineThree}
        </h1>

        <h2>
          Performance matters.
          <br /> Accessibility matters. <br /> Simplicity matters.
        </h2>

        <Link to="/skills/">
          <button>skills</button>
        </Link>
      </InfoPanel>

      <div className="RHS hideOnDesktop">
        <Logo className="removeClickEventMobile">
          <SVG />
        </Logo>
      </div>

      <PageSplit />
      <Opposite>
        <Suspense fallback={<></>}>
          <Gallery />
        </Suspense>
      </Opposite>
    </Page>
  );
}
