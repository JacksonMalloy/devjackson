import styled from 'styled-components';
import { animated as anim } from 'react-spring';
import {
  tabletMax,
  mobileMax,
  backgroundcolor,
  subprimary,
  primary,
  highlightcolor
} from '../../../globals';

export const FilterContainer = styled.section`
  display: block;
`;

export const FilterForm = styled.form`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-row-gap: 1rem;
  grid-column-gap: 40px;

  @media (max-width: ${tabletMax}) {
    padding-top: 0px;
    width: 100vw;
    grid-template-columns: 0.9fr;
  }

  @media (max-width: ${mobileMax}) {
    margin: 0px;
    display: grid;
    width: 90%;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-row-gap: 0rem;
    grid-column-gap: 0px;
    grid-auto-flow: dense;

    label {
      display: inline-block;
      font-size: 0.95rem;
      margin-left: 0.8rem;
      font-weight: 300;
    }
  }
`;

export const FormGroup = styled.div`
  text-transform: uppercase;

  label {
    display: block;
    margin-bottom: 0.5rem;
  }

  @media (max-width: ${mobileMax}) {
    label {
      margin-top: 10px;
    }

    .checkbox {
      margin-top: 20px;
    }
  }
`;

export const CheckBox = styled.input`
  width: 20px;
  height: 20px;
  -webkit-appearance: none;
  background-color: ${backgroundcolor};
  border: 1px solid ${subprimary};

  &:focus {
    outline: 0px;
    border: 1px solid ${subprimary};
  }

  &:checked {
    background-color: ${highlightcolor};
  }
`;

export const EmptySearch = styled.div`
  width: 100%;
  height: 100%;

  h3 {
    text-align: center;
    padding: 35px;
    font-weight: 400;
    font-size: 1.5rem;
  }
`;

export const SkillGrid = styled.section`
  padding: 1.5rem;

  @media (max-width: ${mobileMax}) {
    padding-left: 20px;
    padding-top: 90px;
  }

  .skillslist-center {
    width: 45vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-row-gap: 2rem;
    grid-column-gap: 30px;

    @media (max-width: ${tabletMax}) {
      width: 90vw;
      margin-top: 320px;
    }

    @media (max-width: ${mobileMax}) {
      grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
      grid-row-gap: 1rem;
      grid-column-gap: 10px;
      width: 90vw;
      margin-top: 62vh;
      margin-top: 0px;
      padding-bottom: 100px;
    }
  }
`;

export const SkillCard = styled(anim.article)`
  box-shadow: 1px 4px 6px ${subprimary};
  transition: linear 0.5s;

  &:hover {
    box-shadow: 1px 4px 12px ${highlightcolor};
  }

  img {
    width: 100%;
    display: block;
    transition: linear 0.2s;
  }

  p {
    text-transform: capitalize;
    padding: 0.5rem 0;
    text-align: center;
    font-weight: 400;
    display: block;
    font-family: 'Permanent Marker', cursive;
    background-color: ${highlightcolor};
    color: ${primary};

    @media (max-width: ${mobileMax}) {
      display: none;
    }
  }
`;
