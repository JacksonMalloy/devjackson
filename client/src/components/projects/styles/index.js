import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10em, 60em));
  grid-template-rows: repeat(3, 200px);
  grid-gap: 1rem;
  position: relative;
  justify-content: center;
  grid-auto-flow: dense;
  margin: 25px;

  @media (max-width: ${props => props.theme.tabletMax}) {
    margin: 55px 10px;
    position: absolute;
    top: -58%;
  }

  @media (max-width: ${props => props.theme.mobileMax}) {
    margin: 10px 10px;
    top: 0;
  }
`;

export const ProjectCard = styled.div`
  overflow: hidden;
  position: relative;
  box-shadow: 1px 4px 6px ${props => props.theme.subprimary};
  transition: linear 0.3s;
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: 1;

  &:hover {
    box-shadow: 1px 4px 6px #e74c3c;
  }

  .grid_overlay_myWork {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: none;
    justify-content: center;
    background: ${props => props.theme.primary};
    filter: grayscale(0%);
    vertical-align: middle;
  }

  .text-align-work {
    text-align: center;
    margin-top: 57px;
  }

  .text-align-work p {
    text-decoration: none;
    color: ${props => props.theme.subprimary};
    text-align: center;
  }
`;
