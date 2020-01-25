import React from "react";
import { useSpring } from "react-spring";
import { Link } from "react-router-dom";
import SVG from "../components/SVG/SVG";
import { useTheme } from "../themeContext";
import { withTheme } from "styled-components";
import { Page, InfoPanel, PageSplit, Logo } from "./styles";

const Home = () => {
  const themeToggle = useTheme();

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
        <InfoPanel style={fade}>
          <h1>
            Hi,
            <br /> I'm Jackson, <br />
            Web Developer
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
