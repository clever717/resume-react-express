import React, {Component} from 'react';
import axios from 'axios';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: []
    };
  }

  componentDidMount() {
    axios.get('/api/data/skill')
    .then(response => {
      console.log(response)
      this.setState({skills: response.data});
    }) // SUCCESS
    .catch(error => {
      console.log(error);
    }); // ERROR
  }
  render() {
    return (
        <aside className="skills aside section">
          <div className="section-inner">
            <h2 className="heading">Skills</h2>
            <div className="content">
              <p className="intro">
                Intro about your skills goes here. Keep the list lean and only show your primary skillset.
                You can
                always provide a link to your Linkedin or Coderwall profile so people can get more info
                there.
              </p>

              <div className="skillset">

                {
                  this.state.skills.map((skill, i) => {
                    return (
                      <div className="item" key={skill._id}>
                        <h3 className="level-title">{skill.title}
                          <span className="level-label" data-toggle="tooltip" data-placement="left" data-animation="true"
                                title={skill.description}>
                        <i className="fas fa-info-circle"/>{skill.level}
                      </span>
                        </h3>
                        <div className="level-bar">
                          <div className="level-bar-inner" data-level={skill.graph + '%'}/>
                        </div>
                      </div>
                    );
                  })
                }
              </div>
            </div>
          </div>
        </aside>
    );
  }
}

export default Skills;
