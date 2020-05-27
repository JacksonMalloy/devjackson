import React, { useContext } from 'react'
import { useSpring } from 'react-spring'

import WorkGrid from '../components/projects/WorkGrid'
import SVG from '../components/SVG/SVG'
import { StyledPage, StyledInfoPanel, StyledOpposite, StyledPageSplit, StyledLogo, StyledButton } from './styles'

import { ChatbotContext } from '../context'

export default function Projects() {
  const { showBot, setShowBot } = useContext(ChatbotContext)

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
      <StyledInfoPanel className="about_margin" style={fade}>
        <h1>
          Looking <br />
          to Hire?
        </h1>
        <h2>
          Leave a message with Tim, <br /> he doesn't bite.
        </h2>

        <StyledButton onClick={() => setShowBot(!showBot)}>contact</StyledButton>
      </StyledInfoPanel>
      <div className="RHS hideOnDesktop">
        <StyledLogo className="removeClickEventMobile">
          <SVG />
        </StyledLogo>
      </div>
      <StyledPageSplit />
      <StyledOpposite>
        <WorkGrid />
      </StyledOpposite>
    </StyledPage>
  )
}
