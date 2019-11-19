import React from 'react';

import { GridContainer, ProjectCard } from './styles';

export default function WorkGrid() {
  return (
    <GridContainer>
      <ProjectCard style={{ display: 'none' }}>
        <a
          href='https://brandedmovement.netlify.com/#/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='grid_overlay_myWork'>
            <div className='text-align-work'>
              <h1>
                Branded <br />
                Movement
              </h1>
            </div>
          </div>
        </a>
      </ProjectCard>
    </GridContainer>
  );
}
