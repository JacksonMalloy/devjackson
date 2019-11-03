import React, { Component } from 'react';
import items from './data';

const SkillContext = React.createContext();
// <SkillContext.Provider value={'hello'}
//Provider is responsible for all components in component tree to access it
//Consumer is a way to access that information

class SkillProvider extends Component {
  state = {
    skills: [],
    sortedSkills: [],
    loading: true,
    type: 'All',
    field: 'All',
    front_end_programming: false,
    back_end_programming: false
  };

  // getData
  componentDidMount() {
    let skills = this.formatData(items);
    this.setState({
      skills,
      sortedSkills: skills,
      loading: false
    });
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);

      let skill = { ...item.fields, images, id };
      return skill;
    });
    return tempItems;
  }

  handleChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = event.target.name;
    this.setState(
      {
        [name]: value
      },
      this.filterSkills
    );
  };

  filterSkills = () => {
    let {
      skills,
      type,
      field,
      front_end_programming,
      back_end_programming
    } = this.state;

    let tempSkills = [...skills];

    //filter by type
    if (type !== 'All') {
      tempSkills = tempSkills.filter(skill => skill.type === type);
    }

    //filter by field
    if (field !== 'All') {
      tempSkills = tempSkills.filter(skill => skill.field === field);
    }

    //filter by front-end skills
    if (front_end_programming) {
      tempSkills = tempSkills.filter(
        skill => skill.front_end_programming === true
      );
    }

    //filter by back-end skills
    if (back_end_programming) {
      tempSkills = tempSkills.filter(
        skill => skill.back_end_programming === true
      );
    }

    //CHANGE STATE
    this.setState({
      sortedSkills: tempSkills
    });
  };

  render() {
    return (
      <SkillContext.Provider
        value={{ ...this.state, handleChange: this.handleChange }}
      >
        {this.props.children}
      </SkillContext.Provider>
    );
  }
}

const SkillConsumer = SkillContext.Consumer;

//higher-order component
//can wrap component within the higher order component then you'll be returned with the props
export function withSkillConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <SkillConsumer>
        {value => <Component {...props} context={value} />}
      </SkillConsumer>
    );
  };
}

export { SkillProvider, SkillConsumer, SkillContext };
