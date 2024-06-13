import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

function Navbar() {
  const mainNav = useRef(null);

  useEffect(() => {
    let scrollPos = 0;
    const headerHeight = mainNav.current.clientHeight;

    const handleScroll = () => {
      const currentTop = document.body.getBoundingClientRect().top * -1;
      if (currentTop < scrollPos) {
    
        if (currentTop > 0 && mainNav.current.classList.contains('is-fixed')) {
          mainNav.current.classList.add('is-visible');
        } else {
          mainNav.current.classList.remove('is-visible', 'is-fixed');
        }
      } else {
       
        mainNav.current.classList.remove('is-visible');
        if (currentTop > headerHeight && !mainNav.current.classList.contains('is-fixed')) {
          mainNav.current.classList.add('is-fixed');
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
    <nav className="navbar navbar-expand-lg navbar-light" id="mainNav" ref={mainNav}>
      <div className="container px-4 px-lg-5">
        <Link className="navbar-brand" to="/">Start Bootstrap</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto py-4 py-lg-0">
            <li className="nav-item"><Link className="nav-link px-lg-3 py-3 py-lg-4" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link px-lg-3 py-3 py-lg-4" to="/about">About</Link></li>
          
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
