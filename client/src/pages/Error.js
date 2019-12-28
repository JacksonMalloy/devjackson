import React from "react";
import SVG from "../components/SVG/SVG";
import { Logo } from "./styles";

export default function Error() {
  return (
    <div>
      <div className="RHS hideOnDesktop">
        <Logo className="removeClickEventMobile">
          <SVG />
        </Logo>
      </div>
    </div>
  );
}
