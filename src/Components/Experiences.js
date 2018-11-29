import React, { Component } from 'react';
import ExperienceItem from './ExperienceItem';
import '../css/timeline.css';

class Experiences extends Component {
  render() {
    let experienceItems;
    if(this.props.experiences){
        experienceItems = this.props.experiences.map(experience => {
            return (
                <ExperienceItem key={experience.id} experience={experience} />
            )
        })
    }

    return (
        <ul className="timeline">
            {experienceItems}
        </ul>
    );
  }
}

export default Experiences;
