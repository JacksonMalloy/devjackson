import React from 'react';

import SkillsList from './SkillsList';
import { withSkillConsumer } from '../../context';
import Loading from '../Loading';

function SkillContainer({ context }) {
  const { loading, sortedSkills } = context;
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <SkillsList skills={sortedSkills} />
    </>
  );
}

export default withSkillConsumer(SkillContainer);
