import React from "react";
import WorkGrid from "../components/projects/WorkGrid";
import { useSpring } from "react-spring";

import { Page, InfoPanel, Opposite, PageSplit } from "./styles";
import { Link } from "react-router-dom";
import SVG from "../components/SVG/SVG";
import { Logo } from "./styles";

export default function Work() {
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
      <Page style={fade}>
        <InfoPanel className="about_margin" style={fade}>
          <h1>
            Seeking <br />
            Innovation
            <br /> for your Business?
          </h1>
          <h2>I'm looking for side projects</h2>
          <Link to="/skills/">
            <button>Skills</button>
          </Link>
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
    </>
  );
}
