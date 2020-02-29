import React, { lazy, Suspense } from "react";
import { useSpring } from "react-spring";
import { Link } from "react-router-dom";

import {
  StyledPage,
  StyledInfoPanel,
  StyledPageSplit,
  StyledOpposite,
  StyledButton,
  StyledLogo
} from "./styles";
import SVG from "../components/SVG/SVG";

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

  return (
    <StyledPage className="page-mobile" style={fade}>
      <StyledInfoPanel className="about_margin" style={fade}>
        <h1>
          I Build <br />
          Modern User <br />
          Experiences.
        </h1>

        <h2>
          Performance matters.
          <br /> Accessibility matters. <br /> Simplicity matters.
        </h2>

        <Link to="/skills/">
          <StyledButton>skills</StyledButton>
        </Link>
      </StyledInfoPanel>

      <div className="RHS hideOnDesktop">
        <StyledLogo className="removeClickEventMobile">
          <SVG />
        </StyledLogo>
      </div>

      <StyledPageSplit />
      <StyledOpposite>
        <Suspense fallback={<></>}>
          <Gallery />
        </Suspense>
      </StyledOpposite>
    </StyledPage>
  );
}
