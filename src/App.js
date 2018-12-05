import React, { Component } from 'react';
import Mobile from './Components/Mobile';
import VCard from './Components/VCard';
import Navigation from './Components/Navigation';
import Sections from './Components/Sections';
import Modals from './Components/Modals';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far, faSmileBeam, faKeyboard, faComments } from '@fortawesome/free-regular-svg-icons';
import './App.css';
import './css/mobile.css';

require('./js/mobile.js');
require('./js/timeline.js');

library.add(far, faSmileBeam, faKeyboard, faComments);

class App extends Component {
  constructor() {
    super();
    this.state = {
      experiences: [],
      navigation: [],
      modals: {
        hire: false,
        thanks: false
      }
    }

    this.changeHireState = this.changeHireState.bind(this);
    this.changeThanksState = this.changeThanksState.bind(this);
  }

  componentWillMount(){
    this.setState({
      experiences: [
        {
          id: 1,
          date: 'Jul 2016 - Present',
          company: 'Marvin Yan Web Consulting',
          title: 'Web Consultant and Developer',
          description: [
            "Provide web and programming consultation services from frontend design and UI/UX components to backend design and database architecture. Develop and code based off of consultation. Implement and translate PSD comps to web code. Apply any responsive and adaptive design principles. Work with backend CMS systems including Drupal and WordPress."
          ]
        },
        {
          id: 2,
          date: 'May 2015 - Jul 2016',
          company: 'SpiritClips by Hallmark',
          title: 'Senior Front End Developer',
          description: [
            "Implemented and translated PSD comps and wireframes into semantically correct web templates. Applied responsive and adaptive design principles. Coded necessary middle and sometimes backend requirements necessary for frontend."
          ]
        },
        {
          id: 3,
          date: 'Oct 2014 - Dec 2014',
          company: 'Starkey Hearing Foundation',
          title: 'Frontend Web Developer',
          description: [
            "Short-term contract to help launch their website ListenCarefully.org. Helped with implementing frontend design and development on a WordPress CMS system. Aided with searching, installing and customizing WordPress plugins. Helped with bug discovery and fixing."
          ]
        },
        {
          id: 4,
          date: 'Jul 2008 – Jul 2014',
          company: 'Oversee.net',
          title: 'Full Stack Developer',
          description: [
            "Short-term contract to help launch their website ListenCarefully.org. Helped with implementing frontend design and development on a WordPress CMS system. Aided with searching, installing and customizing WordPress plugins. Helped with bug discovery and fixing."
          ]
        },
        {
          id: 5,
          date: 'Sep 2007 – Jan 2008',
          company: 'Griffith Park Media',
          title: '',
          description: [
            "Responsibilities: Developed/designed internal administration scripts, frontend scripts, and database. Maintained/updated working integrity of current scripts and programs.",
            "Languages/Software: PHP, HTML, CSS, jQuery, JavaScript, PEAR, MySQL, SMARTY"
          ]
        },
        {
          id: 6,
          date: 'Nov 2006 – Mar 2007',
          company: 'Fitnessblowout.com',
          title: 'Web Developer',
          description: [
            "Responsibilities: Developed and maintained internal administration scripts. Maintained and updated products listed on website.",
            "Languages/Software: PHP, HTML, CSS, jQuery, JavaScript, MySQL, Xcart"
          ]
        },
        {
          id: 7,
          date: 'Aug 2006 – Oct 2006',
          company: 'NBC Universal',
          title: 'Web Developer',
          description: [
            "Responsibilities: Maintained and designed administration tools according to Web Producer’s needs. Database upkeep and management. Produced web pages from templates and content from the database.",
            "Accomplishments: Reorganized database for Saturday Night Live. Designed and created voting module and video/photo upload module.",
            "Languages/Software: Zend, PHP, HTML, CSS, JavaScript, PEAR, MySQL, SMARTY"
          ]
        },
        {
          id: 8,
          date: 'Aug 2005 – Aug 2006',
          company: 'WPT Enterprises',
          title: 'Systems Engineer',
          description: [
            "Responsibilities: Uptime management, equipment and software maintenance, email delivery continuance, domain name management, networking administrative duties, security design and upkeep.",
            "Accomplishments: Designed and programmed major features on ChipLeaders.com including database structure, search functionality and image uploading tool. Created web-based image tagging/organizing administrative tool. Designed networking topology.",
            "Languages/Software: Zend, PHP, HTML, CSS, JavaScript, PEAR, MySQL, SMARTY, mod_rewrite, Photoshop, Dreamweaver, Fireworks, BASH"
          ]
        },
        {
          id: 9,
          date: 'Jul 2005 – Jul 2006',
          company: 'ValueClick',
          title: 'Programmer and Network Administrator',
          description: [
            "Responsibilities: Uptime management, equipment and software maintenance, email delivery continuance, domain name management, suppression file administration, networking administrative duties, security design and upkeep.",
            "Accomplishments: Designed and implemented B2B and B2C email management system, developed chargeback and refund system for E-Commerce division, designed and implemented email tracking and data relay systems.",
            "Languages/Software: PHP, HTML, CSS, JavaScript, PEAR, MySQL, SMARTY, PERL, mod_rewrite, mod_perl, mod_ssl, memcached, BASH"
          ]
        }
      ],
      navigation: [
        {
          id: 1,
          title: 'About',
          icon: 'smile-beam'
        },
        {
          id: 2,
          title: 'Resume',
          icon: 'keyboard'
        },
        {
          id: 3,
          title: 'Let\'s Talk',
          icon: 'comments'
        }
      ]
    });
  }

  changeHireState() {
    this.setState({modals: {...this.state.modals, hire: !this.state.modals.hire}});
  }

  changeThanksState() {
    this.setState({modals: {...this.state.modals, thanks: !this.state.modals.thanks}});
  }

  render() {
    return (
      <div className="App">
        <div id="background"></div>
        <Mobile navigation={this.state.navigation} />
        <VCard changeHire={this.changeHireState} />
        <div className="col-right">
          <div className="container" id="collapseContent">
            <Navigation navigation={this.state.navigation} />

            <Sections sections={this.state.navigation} experiences={this.state.experiences} />
          </div>
        </div>

        <Modals modals={this.state.modals} changeHire={this.changeHireState} changeThanks={this.changeThanksState} />
      </div>
    );
  }
}

export default App;
