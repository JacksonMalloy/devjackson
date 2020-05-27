import React from 'react'
import { useSpring } from 'react-spring'
import { StyledPage, StyledPageSplit, StyledInfoPanel, StyledOpposite, StyledLogo, StyledButton } from './styles'
import { Link } from 'react-router-dom'
import SVG from '../components/SVG/SVG'

function Skills() {
  const fade = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  })

  return (
    <StyledPage style={fade}>
      <StyledInfoPanel className="skillsText about_margin" style={fade}>
        <h1>
          Web <br />
          Development
        </h1>
        <h2>
          I could list my skills here, <br />
          but I would rather show you.
        </h2>

        <Link to="/contact/">
          <StyledButton>projects</StyledButton>
        </Link>
      </StyledInfoPanel>
      <div className="RHS hideOnDesktop">
        <StyledLogo className="removeClickEventMobile">
          <SVG />
        </StyledLogo>
      </div>
      <StyledPageSplit></StyledPageSplit>
      <StyledOpposite className="mobile__change"></StyledOpposite>
    </StyledPage>
  )
}

export default Skills
