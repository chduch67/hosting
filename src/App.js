import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Curriculum from './components/Curriculum';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Curriculum" element={<Curriculum />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <header className="masthead" style={{ backgroundImage: "url('https://kscms.ks.ac.kr/attach/IMAGE/PopupMgr/PopupZoneUpload/2021/6/i5YZT4Ls1OKPtyai.JPG')" }}>
      <div className="container position-relative px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            <div className="site-heading">
            
              <span className="subheading"></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default App;
