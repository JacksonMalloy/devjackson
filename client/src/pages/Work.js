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
            Your <br />
            Personal <br />
            Developer.
          </h1>
          <h2>You've come to the right place.</h2>
          <Link to="/">
            <button>contact</button>
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
