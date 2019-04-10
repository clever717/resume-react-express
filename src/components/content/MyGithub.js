import React, {Component} from 'react';
import GitHubWidget from "react-github-widget";

class MyGithub extends Component {
  render() {
    return (
        <section className="github section">
          <div className="section-inner">
            <h2 className="heading">My GitHub</h2>
            <GitHubWidget repository="clever717/resume-react-express"/>
            <br/>
            <GitHubWidget repository="clever717/my-jira-integration-plugin"/>
          </div>
        </section>
    );
  }
}

export default MyGithub;
