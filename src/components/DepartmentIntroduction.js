import React, { useState, useEffect } from 'react';
import IntroProfessor from './IntroProfessor';
import Footer from './Footer';
import '../styles.css'

function DepartmentIntroduction() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    
    <div>
    
      <header className="masthead" style={{  backgroundImage: "url('https://kscms.ks.ac.kr/attach/IMAGE/UserMenu/SubVisauImg/2021/6/uQS3rvoAWpkjIUXz.JPG')" }}>
        <div className="container position-relative px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="page-heading" style={{textAlign:'center'}}>
                <h1>학과소개</h1>
                <span className="subheading" style={{ padding: "30px" }}>우리 학과를 소개합니다.</span>
                <div className="subheading">
                <div class="btnframe">
                <button class="custom-btn btn-15" onClick={() => scrollToSection('department-introduction')} style={{ padding: "30px" }}>학과소개</button>
                <button class="custom-btn btn-15" onClick={() => scrollToSection('faculty-introduction')} style={{ padding: "30px" }}>교수진 소개</button>
                <button class="custom-btn btn-15" onClick={() => scrollToSection('educational-goals')} style={{ padding: "30px" }}>교육목표</button>
                <button class="custom-btn btn-15" onClick={() => scrollToSection('department-history')} style={{ padding: "30px" }}>학과연혁</button>
                <button class="custom-btn btn-15" onClick={() => scrollToSection('major-competencies')} style={{ padding: "30px" }}>전공역량</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </header>

      <section className="page-section" id="department-introduction">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8 text-center">
            <h2 className="mt-0" style={{padding:"20px"}}>학과소개</h2>
            <hr style={{width:"100%"}} />
              <p className="text-muted mb-5"> <img 
          src="https://kscms.ks.ac.kr/attach/EDITOR/IMAGE/2021/4/93JhvObk5hH9HSqsS4g7.jpg" 
          alt="학과 이미지" /></p>
            </div>
          </div>
        </div>
      </section>


      <section className="page-section bg-light" id="faculty-introduction">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8 text-center">
              <IntroProfessor />
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" id="educational-goals">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="mt-0" style={{padding:"20px"}}>교육목표</h2>
              <hr style={{width:"100%"}} />
              <img src="https://kscms.ks.ac.kr/attach/EDITOR/IMAGE/2021/4/9MYngtikh4SDYzYPr0rK.jpg" alt="교육목표 이미지" style={{textAlign:'center'}}/>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section bg-light" id="department-history">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8 text-center">
            <h2 className="mt-0" style={{padding:"20px"}}>학과연혁</h2>
            <hr style={{width:"100%"}} />
              <p className="text-muted mb-5"> <h3>2017년</h3>
            <p>경성대학교 CKS 사업 선정 (소프트웨어인재양성사업단)</p>
        
      
            <h3>2015년</h3>
            <p>컴퓨터공학과로 명칭 변경</p>
      
      
            <h3>2012년</h3>
            <p>컴퓨터공학부로 명칭 변경</p>
      
      
            <h3>2011년</h3>
            <p>정보통신산업진흥원(미래창조과학부) 글로벌 IT인재 활용지원사업 수행 (2011~2013)</p>
      
      
            <h3>2010년</h3>
            <p>컴퓨터학부로 통합 (공과대학)<br/>중소기업청 앱 창작터 사업 참여 (2010~2012)</p>
      
      
            <h3>2006년</h3>
            <p>컴퓨터정보학부로 명칭 변경 (컴퓨터과학전공, 인터넷공학전공)</p>
      
      
            <h3>2005년</h3>
            <p>정보통신연구진흥원 대학IT전공역량강화사업(NEXT) 사업 선정</p>
      
      
            <h3>2003년</h3>
            <p>컴퓨터과학과로 명칭 변경</p>
      
            <h3>1999년</h3>
            <p>정보과학부 신설 (멀티미디어대학)</p>
      
            <h3>1998년</h3>
            <p>교육부 지방대학 멀티미디어특성화사업 참여<br/>전자계산학과 신설 (이과대학)</p>
      
            <h3>1984년</h3>
            <p>계산통계학과 (이과대학) 신설</p>
      </p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" id="major-competencies">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8 text-center">
            <h2 className="mt-0" style={{padding:"20px"}}>전공역량</h2>
            <hr style={{width:"100%"}} />
              <p className="text-muted mb-5"> <img 
          src="https://kscms.ks.ac.kr/attach/EDITOR/IMAGE/2021/4/pIvfuuOm6TQBlZKAM531.jpg" 
          alt="전공역량 이미지" 
        
        /></p>
            </div>
          </div>
        </div>
      </section>
       {showScrollButton && (
        <div
          className="scroll-to-top"
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            right: '20px',
            bottom: '20px',
            width: '50px',
            height: '50px',
            backgroundColor: '#007bff',
            borderRadius: '50%',
            color: 'white',
            textAlign: 'center',
            lineHeight: '50px',
            cursor: 'pointer',
            zIndex: '1000', // 다른 요소 위에 표시되도록 z-index 설정
          }}
        >
          &uarr;
        </div>
      )}
      
    </div>
  );
}

export default DepartmentIntroduction;