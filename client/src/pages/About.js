import React, { lazy, Suspense } from "react";
import { useSpring } from "react-spring";
import { Page, InfoPanel, PageSplit, Opposite } from "./styles";
import { Link } from "react-router-dom";
import SVG from "../components/SVG/SVG";
import { Logo } from "./styles";

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
    <Page className="page-mobile" style={fade}>
      <InfoPanel className="about_margin" style={fade}>
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
