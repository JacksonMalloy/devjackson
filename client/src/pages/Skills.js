import React from 'react';
import { useSpring } from 'react-spring';

import { Page, PageSplit, InfoPanel, Opposite } from './styles';
import { Link } from 'react-router-dom';

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
      <InfoPanel className='skillsText about_margin' style={fade}>
        <h1>
          Creativity,
          <br /> Collaboration, <br />
          Communication
        </h1>
        <h2>My Structural Foundation</h2>

        <Link to='/work'>
          <button>GitHub</button>
        </Link>
      </InfoPanel>

      <PageSplit />
      <Opposite className='mobile__change'></Opposite>
    </Page>
  );
}

export default Skills;
