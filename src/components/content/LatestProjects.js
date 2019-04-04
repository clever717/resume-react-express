import React, {Component} from 'react';
import allwinair from '../../assets/images/project/pj_allwinair.png';
import jautour from '../../assets/images/project/pj_jautour.png';
import krt from '../../assets/images/project/pj_krt.png';
import lotte from '../../assets/images/project/pj_lotte.png';
import naver from '../../assets/images/project/pj_naver.png';
import privia from '../../assets/images/project/pj_privia.png';
import ebay from '../../assets/images/project/pj_ebay.png';

class LatestProjects extends Component {
  render() {
    return (
        <section className="latest section">
          <div className="section-inner">
            <h2 className="heading">Latest Projects</h2>
            <div className="content">

              <div className="item featured text-center">
                <h3 className="title">
                  <a href="https://allwinair.com" target="_blank" rel="noopener noreferrer">ALLWIN AIR</a>
                </h3>
                <p className="summary">B2B Platform Service</p>
                <div className="featured-image has-ribbon">
                  <a href="https://allwinair.com" target="_blank" rel="noopener noreferrer">
                    <img className="img-fluid project-image" src={allwinair} alt="allwinair"/>
                  </a>
                  <div className="ribbon">
                    <div className="text">New</div>
                  </div>
                </div>

                <div className="desc text-left">
                  <p>
                    - ALLWINAIR 항공 B2B 서비스<br/>
                    - <a href="https://amadeus.com/en">아마데우스 GDS</a> 연동<br/>
                    - 항공 실시간 메타 서치 구축<br/>
                    - ALLWIN AIR 로그인 API 및 여행사 연동<br/>
                    - ADMIN 기능 구축
                  </p>
                </div>
                <a className="btn btn-cta-secondary"
                   href="https://allwinair.com"
                   target="_blank" rel="noopener noreferrer"><i className="fas fa-thumbs-up"></i> Back my project</a>
              </div>
              <hr className="divider"/>
              <div className="item row">
                <a className="col-md-4 col-12" href="https://www.jautour.com" target="_blank" rel="noopener noreferrer">
                  <img className="img-fluid project-image" src={jautour} alt="jautour"/>
                </a>
                <div className="desc col-md-8 col-12">
                  <h3 className="title">
                    <a href="https://www.jautour.com" target="_blank" rel="noopener noreferrer">자유투어 - 개발/유지보수</a>
                  </h3>
                  <p className="mb-2">
                    - B2C/B2B 항공 예약 시스템 구축<br/>
                    - 인벤토리 시스템 구축<br/>
                    - 반자동발권 시스템 구축<br/>
                    - 카드사별 할인 운임 시스템 적용<br/>
                    - 16.03 ~ 17.03
                  </p>
                </div>
              </div>

              <div className="item row">
                <a className="col-md-4 col-12" href="https://www.krt.co.kr" target="_blank" rel="noopener noreferrer">
                  <img className="img-fluid project-image" src={krt} alt="krt"/>
                </a>
                <div className="desc col-md-8 col-12">
                  <h3 className="title">
                    <a href="https://www.krt.co.kr" target="_blank" rel="noopener noreferrer">KRT - 개발/유지보수</a>
                  </h3>
                  <p className="mb-2">
                    - B2C/B2B 항공 예약 시스템 구축<br/>
                    - 인벤토리 시스템 구축<br/>
                    - 반자동발권 시스템 구축<br/>
                    - 카드사별 할인 운임 시스템 적용<br/>
                    - 15.06 ~ 17.03
                  </p>
                </div>
              </div>

              <div className="item row">
                <a className="col-md-4 col-12" href="https://www.lottetour.com" target="_blank" rel="noopener noreferrer">
                  <img className="img-fluid project-image" src={lotte} alt="lottetour"/>
                </a>
                <div className="desc col-md-8 col-12">
                  <h3 className="title">
                    <a href="https://www.lottetour.com" target="_blank" rel="noopener noreferrer">롯데투어 - 개발/유지보수</a>
                  </h3>
                  <p className="mb-2">
                    - B2C/B2B 항공 예약 시스템 구축<br/>
                    - 인벤토리 시스템 구축<br/>
                    - 반자동발권 시스템 구축<br/>
                    - 카드사별 할인 운임 시스템 적용<br/>
                    - 16.07 ~ 17.03
                  </p>
                </div>
              </div>

              <div className="item row">
                <a className="col-md-4 col-12" href="https://store.naver.com/flights/" target="_blank" rel="noopener noreferrer">
                  <img className="img-fluid project-image" src={naver} alt="naver"/>
                </a>
                <div className="desc col-md-8 col-12">
                  <h3 className="title">
                    <a href="https://store.naver.com/flights/" target="_blank" rel="noopener noreferrer">네이버 - 개발/유지보수</a>
                  </h3>
                  <p className="mb-2">
                    - 네이버 항공 운임 비교 시스템 연동(PRIVIA/KRT/하나투어)<br/>
                    - 네이버 결합 운임 비교 시스템 연동(PRIVIA/KRT/하나투어)<br/>
                    - 네이버 프로모션 연동(PRIVIA/KRT/하나투어)<br/>
                    - 15.06 ~ 17.03
                  </p>
                </div>
              </div>

              <div className="item row">
                <a className="col-md-4 col-12" href="https://m.priviatravel.com" target="_blank" rel="noopener noreferrer">
                  <img className="img-fluid project-image" src={privia} alt="privia"/>
                </a>
                <div className="desc col-md-8 col-12">
                  <h3 className="title">
                    <a href="https://m.priviatravel.com" target="_blank" rel="noopener noreferrer">현대카드 프리비아(모바일) - 개발/유지보수</a>
                  </h3>
                  <p className="mb-2">
                    - B2C 모바일 항공 예약 시스템 구축<br/>
                    - 모바일에 맞춘 항공 실시간 검색 속도 및 고도화 작업<br/>
                    - 현대카드 결제 시스템 연동(바우처/마일리지/쿠폰/M포인트)<br/>
                    - 14.04 ~ 14.08
                  </p>
                </div>
              </div>

              <div className="item row">
                <a className="col-md-4 col-12" href="http://air.auction.co.kr/au/init/lp/lpMain.do"
                   target="_blank" rel="noopener noreferrer">
                  <img className="img-fluid project-image" src={ebay} alt="ebay"/>
                </a>
                <div className="desc col-md-8 col-12">
                  <h3 className="title">
                    <a href="http://air.auction.co.kr/au/init/lp/lpMain.do" target="_blank" rel="noopener noreferrer">이베이(옥션/지마켓/G9)
                      - 개발/유지보수</a>
                  </h3>
                  <p className="mb-2">
                    - 항공권 요금 비교 시스템(메타서치) 연동<br/>
                    - PRIVIA/롯데관광/KRT/TOUR2000 제휴사 연동<br/>
                    - 이베이 API 연동 - 예약 및 발권 현황, 발권 데이터 전달<br/>
                    - 14.10 ~ 17.03
                  </p>
                </div>
              </div>

              <div className="item row">
                <a className="col-md-4 col-12" href="https://www.priviatravel.com" target="_blank" rel="noopener noreferrer">
                  <img className="img-fluid project-image" src={privia} alt="privia"/>
                </a>
                <div className="desc col-md-8 col-12">
                  <h3 className="title">
                    <a href="https://www.priviatravel.com" target="_blank" rel="noopener noreferrer">현대카드 프리비아 - 개발/유지보수</a>
                  </h3>
                  <p className="mb-2">
                    - B2C 항공 예약 시스템 구축<br/>
                    - 항공 실시간 검색 속도 및 고도화 작업<br/>
                    - 현대카드 결제 시스템 연동(바우처/마일리지/쿠폰/M포인트)<br/>
                    - 주요도시, 기획전<br/>
                    - 14.04 ~ 17.03
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
    );
  }
}

export default LatestProjects;
