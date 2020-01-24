import React from "react";
import { useTrail, config } from "react-spring";

export function useBlurInChildren(children) {
  const trail = useTrail(React.Children.count(children), {
    config: config.stiff,
    from: { filter: `blur(0.5rem)` },
    filter: `blur(0)`
  });
  return trail.map((props, index) => {
    const child = Array.isArray(children) ? children[index] : children;
    const style = child.props ? child.props.style : {};
    return React.cloneElement(child, {
      style: { ...style, ...props },
      key: index
    });
  });
}

export function BlurIn({ children }) {
  return useBlurInChildren(children);
}
