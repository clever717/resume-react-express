import React, {Component} from 'react';
import profile from '../../assets/images/profile.png';

class Header extends Component {
  render() {
    return (
        <header className="header">
          <div className="container clearfix">
            <img className="profile-image img-fluid float-left" src={profile} alt="Hans Lee"/>
            <div className="profile-content float-left">
              <h1 className="name">Hans Lee</h1>
              <h2 className="desc">Web App Developer</h2>
              <ul className="social list-inline">
                <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li className="list-inline-item"><a href="#"><i className="fab fa-google-plus-g"></i></a>
                </li>
                <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                <li className="list-inline-item"><a href="#"><i className="fab fa-github-alt"></i></a></li>
                <li className="list-inline-item"><a href="#"><i className="fab fa-stack-overflow"></i></a>
                </li>
                <li className="list-inline-item last-item"><a href="#"><i
                    className="fab fa-codepen"></i></a></li>
              </ul>
            </div>
            <a className="btn btn-cta-primary float-right" href="https://themes.3rdwavemedia.com/"
               target="_blank" rel="noopener noreferrer"><i
                className="fas fa-paper-plane"></i> Contact Me</a>
          </div>
        </header>
    );
  }
}

export default Header;
