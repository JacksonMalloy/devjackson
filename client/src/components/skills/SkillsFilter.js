import React from 'react';
import { useContext } from 'react';
import { SkillContext } from '../../context';

import { FilterContainer, FilterForm, FormGroup, CheckBox } from './styles';

//Get all unique values
//Set only accepts unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

export default function SkillsFilter({ skills }) {
  const context = useContext(SkillContext);
  const {
    handleChange,
    type,
    field,
    front_end_programming,
    back_end_programming
  } = context;
  //Getting unique types
  let types = getUnique(skills, 'type');
  //adding 'all'
  types = ['All', ...types];
  //map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  //Getting unique fields
  let fields = getUnique(skills, 'field');
  //adding 'all'
  fields = ['All', ...fields];
  //map to jsx
  fields = fields.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  return (
    <FilterContainer>
      <FilterForm>
        {/*select type */}
        <FormGroup>
          <label htmlFor='type'>Specifics</label>
          <select name='type' id='type' value={type} onChange={handleChange}>
            {types}
          </select>
        </FormGroup>

        {/*end of select type */}
        {/*select field */}
        <FormGroup>
          <label htmlFor='field'>Skills Field</label>
          <select name='field' id='field' value={field} onChange={handleChange}>
            {fields}
          </select>
        </FormGroup>

        {/*end of select field */}
        {/*front-end/back-end check */}
        <FormGroup>
          <CheckBox
            type='checkbox'
            name='front_end_programming'
            id='front_end_programming'
            checked={front_end_programming}
            onChange={handleChange}
          />
          <label htmlFor='front_end_programming'>Front - End</label>
        </FormGroup>
        <FormGroup>
          <CheckBox
            type='checkbox'
            name='back_end_programming'
            id='back_end_programming'
            checked={back_end_programming}
            onChange={handleChange}
          />
          <label htmlFor='back_end_programming'>Back - End</label>
        </FormGroup>
      </FilterForm>
    </FilterContainer>
  );
}
