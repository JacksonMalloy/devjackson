import styled from 'styled-components';
import { animated as anim } from 'react-spring';

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 20%);
  grid-auto-rows: 100px;
  grid-auto-flow: dense;

  @media (max-width: ${props => props.theme.tabletMax}) {
    padding-top: 0;
    grid-template-columns: 100%;
    grid-auto-rows: 100px;
    grid-auto-flow: row;
    display: none;
  }

  @media (max-width: ${props => props.theme.mobileMax}) {
    display: none;
  }
`;

export const GridItem = styled(anim.div)`
  overflow: hidden;
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: 1;

  img {
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /*Rows*/
  &.v2 {
    grid-row: span 2;
  }

  &.v3 {
    grid-row: span 3;
  }

  &.v4 {
    grid-row: span 4;
  }

  /*Columns*/
  &.h2 {
    grid-column: span 2;
  }

  &.h3 {
    grid-column: span 3;
  }

  &.h4 {
    grid-column: span 4;
  }

  @media (max-width: ${props => props.theme.mobileMax}) {
    /*Rows*/
    &.v2 {
      grid-row: span 4;
    }

    &.v3 {
      grid-row: span 4;
    }

    &.v4 {
      grid-row: span 4;
    }

    /*Columns*/
    &.h2 {
      grid-column: span 4;
    }

    &.h3 {
      grid-column: span 4;
    }

    &.h4 {
      grid-column: span 4;
    }
  }
`;
