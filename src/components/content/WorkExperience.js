import React, {Component} from 'react';

class WorkExperience extends Component {
  render() {
    return (
        <section className="experience section">
          <div className="section-inner">
            <h2 className="heading">Work Experience</h2>
            <div className="content">
              <div className="item">
                <h3 className="title">Software Engineer - <span className="place"><a
                    href="http://allwinair.com">(주)올윈웨어 </a></span>
                  <span className="year">(2017.03.27 - now)</span></h3>
                <p>Technical Dev. Team - 대리</p>
              </div>

              <div className="item">
                <h3 className="title">Software Engineer - <span className="place"><a
                    href="http://www.etoursoft.co.kr/">(주)투어소프트 </a></span>
                  <span className="year">(2013.01.15 - 2017.03.25)</span></h3>
                <p>IBE팀 - 대리</p>
              </div>

            </div>
          </div>
        </section>
    );
  }
}

export default WorkExperience;
