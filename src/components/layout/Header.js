import React, {Component} from 'react';
import profile from '../../assets/images/profile.png';
import html2canvas from "html2canvas";
import jsPDF from 'jspdf'

class Header extends Component {
  download(e) {
    e.preventDefault();
    html2canvas(document.getElementById('root'))
    .then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save("download.pdf");
    });
    ;

  }
  render() {
    return (
        <header className="header">
          <div className="container clearfix">
            <img className="profile-image img-fluid float-left" src={profile} alt="Hans Lee"/>
            <div className="profile-content float-left">
              <h1 className="name">Hans Lee</h1>
              <h2 className="desc">Web App Developer</h2>
              <ul className="social list-inline">
                <li className="list-inline-item"><a href="https://www.linkedin.com/in/hans89/"><i className="fab fa-linkedin-in"></i></a>
                </li>
                <li className="list-inline-item"><a href="https://github.com/clever717/"><i className="fab fa-github"></i></a></li>
                <li className="list-inline-item"><a href="https://www.instagram.com/lxxhans/"><i className="fab fa-instagram"></i></a>
                </li>
              </ul>
            </div>
            <a className="btn btn-cta-primary float-right" href="#"
               onClick={this.download}>
              <i className="fas fa-download"></i> Download PDF</a>
          </div>
        </header>
    );
  }
}

export default Header;
