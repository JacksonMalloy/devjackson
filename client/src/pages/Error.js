import React from "react";
import SVG from "../components/SVG/SVG";
import { StyledLogo } from "./styles";

export default function Error() {
  return (
    <div>
      <div className="RHS hideOnDesktop">
        <StyledLogo className="removeClickEventMobile">
          <SVG />
        </StyledLogo>
      </div>
    </div>
  );
}
