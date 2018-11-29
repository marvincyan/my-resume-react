import React, { Component } from 'react';

class ExperienceItem extends Component {
  render() {
    var direction = this.props.experience.id%2 ? "dr" : "dl";
    let descItems;
    descItems = this.props.experience.description.map(desc => {
      return(
        <p key={desc}>{desc}</p>
      )
    });

    return (
      <li className={direction}>
        <svg>
          <circle cx="10" cy="11" r="5" fill="#004165" />
        </svg>
        <div className="time-wrapper">
          <div className="time">{this.props.experience.date}</div>
        </div>
        <div className="flag-wrapper">
          <div className="arrow-box d-none d-sm-block"></div>
          <p>
            <span className="flag">{this.props.experience.company}</span>
          </p>
          <div className="clearfix"></div>
        </div>
        <div className="desc">
          <div className="jobTitle">{this.props.experience.title}</div>
          {descItems}
        </div>
      </li>
    );
  }
}

export default ExperienceItem;