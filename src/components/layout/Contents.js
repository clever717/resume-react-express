import React, {Component} from 'react';
import AboutMe from '../content/AboutMe'
import LatestProjects from "../content/LatestProjects";
import WorkExperience from "../content/WorkExperience";
import MyGithub from "../content/MyGithub";
import BasicInformation from "../content/BasicInformation";
import Skills from "../content/Skills";
import Education from "../content/Education";

class Contents extends Component {
  render() {
    return (
        <div className="container sections-wrapper">
          <div className="row">
            <div className="primary col-lg-8 col-12">
              <AboutMe/>

              <LatestProjects/>

              <WorkExperience/>

              <MyGithub/>
            </div>
            <div className="secondary col-lg-4 col-12">
              <BasicInformation/>

              <Skills/>

              <Education/>
            </div>
          </div>
        </div>
    );
  }
}

export default Contents;
