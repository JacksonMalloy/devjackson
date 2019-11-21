import React from 'react';
import SVG from '../components/SVG/SVG';
import { useSpring } from 'react-spring';
import { Link } from 'react-router-dom';
import { useTheme } from '../themeContext';
import { withTheme } from 'styled-components';

import { Page, InfoPanel, PageSplit, Logo } from './styles';
import Chatbot from '../components/chatbot';

const Home = props => {
  const themeToggle = useTheme();

  const fade = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  });

  return (
    <>
      <Page style={fade}>
        <InfoPanel style={fade}>
          <h1>
            Hi,
            <br /> I'm Jackson, <br />
            Web Developer.
          </h1>
          <h2>JavaScript / React.js / Node.js</h2>

          <Link to='/work/'>
            <button>projects</button>
          </Link>
        </InfoPanel>

        <div className='RHS'>
          <Logo onClick={() => themeToggle.toggle()}>
            <SVG />
          </Logo>
        </div>

        <PageSplit />
        <Chatbot />
      </Page>
    </>
  );
};

export default withTheme(Home);
