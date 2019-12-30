import React from "react";
import { useSpring } from "react-spring";

import { Page, PageSplit, InfoPanel, Opposite } from "./styles";
import { Link } from "react-router-dom";
import SVG from "../components/SVG/SVG";
import { Logo } from "./styles";

function Skills() {
  const fade = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  });

  return (
    <Page style={fade}>
      <InfoPanel className="skillsText about_margin" style={fade}>
        <h1>
          Using <br />
          Modern Tools <br />
          and Best Practices.
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
