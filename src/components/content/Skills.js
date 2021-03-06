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

              <div className="skillset testimonials">

                {
                  this.state.skills.map((skill, i) => {
                    return (
                      <div className="item" key={skill._id}>
                        <h3 className="level-title">{skill.title}
                          <span className="level-label" data-toggle="tooltip" data-placement="left" data-animation="true"
                                title={skill.description}>
                          </span>
                        </h3>
                        <blockquote className="quote">
                          <p>{skill.description}</p>
                        </blockquote>
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
