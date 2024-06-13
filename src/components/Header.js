import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  useEffect(() => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    const handleScroll = () => {
      const currentTop = document.body.getBoundingClientRect().top * -1;
      if (currentTop < scrollPos) {
        if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
          mainNav.classList.add('is-visible');
        } else {
          mainNav.classList.remove('is-visible', 'is-fixed');
        }
      } else {
        mainNav.classList.remove('is-visible');
        if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
          mainNav.classList.add('is-fixed');
        }
      }
      scrollPos = currentTop;
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
      <div className="container px-4 px-lg-5">
        <Link className="navbar-brand" to="/">
          <img src="https://i.namu.wiki/i/I8ajv95X48pCEdECZHh0jhpal0uHBg8XIiGslmO-XKqY0LwVPcDGmZS7N61fbc8KCN3_WT81m66QloIUY26Thg.svg" alt="경성대학교 로고" style={{ width: "50px", height: "50px" }} />
          경성대학교 웹프로그래밍응용
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto py-4 py-lg-0">
            <li className="nav-item"><Link className="nav-link px-lg-3 py-3 py-lg-4" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link px-lg-3 py-3 py-lg-4" to="/about">학과소개</Link></li>
            <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="https://kscms.ks.ac.kr/ipsi/Main.do" target="_blank" rel="noopener noreferrer">입시안내</a></li>
            <li className="nav-item"><Link className="nav-link px-lg-3 py-3 py-lg-4" to="/Curriculum">교과과정</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
