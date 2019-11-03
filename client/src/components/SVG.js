import React from 'react';
import { useSpring, animated as anim } from 'react-spring';

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.2
];

const trans = (x, y, s) =>
  `
  perspective(600px) 
  scale(${s})
  rotate(3deg)
  `;

function JSVG() {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 0.7],
    config: { mass: 1, tension: 350, friction: 20 }
  }));

  return (
    <anim.svg
      viewBox='0 0 400 610'
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 0.9] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      <path
        fill='#333333'
        d='M233.76,5.27H306V379.54c0,148.54-73,194.18-169.29,194.18-26.56,0-58.92-5.8-77.18-13.27l10.79-58.92c14.94,5.81,36.51,10.79,60.58,10.79,64.73,0,102.9-29.05,102.9-138.59Z'
      />
      <path
        d='M267.36,38.87h72.2V413.13c0,148.55-73,194.19-169.29,194.19-26.56,0-58.92-5.81-77.18-13.27l10.79-58.92c14.94,5.8,36.51,10.78,60.58,10.78,64.73,0,102.9-29,102.9-138.58Z'
        fill='#1b61a9'
      />
      <polyline fill='#333333' points='59.52 560.49 92.72 593.69 97.44 570.3' />
      <polyline
        fill='#333333'
        points='305.5 5 339.48 39.3 305.17 38.87 305.17 5.53 305.5 5 305.5 5 305.5 5 305.5 5'
      />
    </anim.svg>
  );
}

export default JSVG;
