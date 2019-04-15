import React, {Component} from 'react';

class AboutMe extends Component {
  render() {
    return (
        <section className="about section">
          <div className="section-inner">
            <h2 className="heading">About Me</h2>
            <div className="content">
              <p>
                안녕하세요. Full-Stack 개발자를 지향하는 웹 개발자입니다.<br/>
                새로운 것을 공부하고 도전하는 것을 좋아하는 7년차 개발자입니다.<br/>
                사람들과 어울리는 것을 좋아하며 특히 같은 관심사를 나누고 이야기할 때가 가장 행복합니다.<br/>
                주로 여행/항공 솔루션을 개발해왔으며 BSP여행사 개발 경험 다수, GDS API에 지식이 있습니다.<br/>
                백엔드만 담당해온 것이 아니라 프론트엔드단부터 DevOps 설정까지 모두 가능합니다.<br/>
              </p>

            </div>
          </div>
        </section>
    );
  }
}

export default AboutMe;
