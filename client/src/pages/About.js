import React, { lazy, Suspense } from 'react';
import { useSpring } from 'react-spring';
import { Page, InfoPanel, PageSplit, Opposite } from './styles';
import { Link } from 'react-router-dom';

const Gallery = lazy(() => import('../components/gallery/Gallery'));

export default function About() {
  const fade = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  });

  return (
    <Page className='page-mobile' style={fade}>
      <InfoPanel className='about_margin' style={fade}>
        <h1>
          I Develop <br />
          Applications
          <br /> that Innovate
        </h1>

        <h2>Front-End / Back-End / Full-Stack</h2>

        <Link to='/work'>
          <button>LinkedIn</button>
        </Link>
      </InfoPanel>

      <PageSplit />
      <Opposite>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Gallery />
        </Suspense>
      </Opposite>
    </Page>
  );
}
