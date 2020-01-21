import React from "react";
import WorkGrid from "../components/projects/WorkGrid";
import { useSpring } from "react-spring";
import { Link } from "react-router-dom";

import SVG from "../components/SVG/SVG";
import { Page, InfoPanel, Opposite, PageSplit } from "./styles";
import { Logo } from "./styles";
import { GlobalConsumer } from "../context";

export default function Projects() {
  const fade = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  });

  return (
    <GlobalConsumer>
      {value => {
        const { showBot, toggleBot } = value;

        return (
          <Page style={fade}>
            <InfoPanel className="about_margin" style={fade}>
              <h1>
                Looking <br />
                to Hire?
              </h1>
              <h2>
                Please leave my personal <br /> assistant a message.
              </h2>

              <button onClick={() => toggleBot()}>contact</button>
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
      }}
    </GlobalConsumer>
  );
}
