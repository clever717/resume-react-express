import React, {Component} from 'react';

class Education extends Component {
  render() {
    return (
        <aside className="education aside section">
          <div className="section-inner">
            <h2 className="heading">Education</h2>
            <div className="content">
              <div className="item">
                <h3 className="title"><i className="fas fa-graduation-cap"></i> Department of Computer and
                  sInformation Communications Engineering</h3>
                <h4 className="university">Hongik Univ. <span className="year">(2008-2016)</span>
                </h4>
              </div>
              <div className="item">
                <h3 className="title"><i className="fas fa-graduation-cap"></i> KyungBok High School</h3>
                <h4 className="university">KyungBok High School <span className="year">(2005-2008)</span>
                </h4>
              </div>
            </div>
          </div>
        </aside>
    );
  }
}

export default Education;
