import React from 'react';
import Skill from './Skill';

import { EmptySearch, SkillGrid } from './styles';

export default function SkillsList({ skills }) {
  if (skills.length === 0) {
    return (
      <EmptySearch>
        <h3>Sorry about that! The choices don't match</h3>
      </EmptySearch>
    );
  }

  return (
    <SkillGrid>
      <div className='skillslist-center'>
        {skills.map(item => {
          return <Skill key={item.id} skill={item} />;
        })}
      </div>
    </SkillGrid>
  );
}
