import React from 'react';
import PropTypes from 'prop-types';
import { useSpring } from 'react-spring';
import { SkillCard } from './styles';

export default function Skill({ skill }) {
  const { name, images } = skill;
  const fade = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  });

  return (
    <SkillCard style={fade}>
      <img src={images[0]} alt='portfolio skill' />
      <p>{name}</p>
    </SkillCard>
  );
}

Skill.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired
  })
};
