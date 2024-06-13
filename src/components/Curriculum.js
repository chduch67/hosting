import React from "react";

  const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/files/Curriculum.pdf";
  link.download = "Curriculum.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  };

function Curriculum() {
  return (
    <div>
      <header
        className="masthead"
        style={{
          backgroundImage:
            "url('https://kscms.ks.ac.kr/attach/IMAGE/UserMenu/SubVisauImg/2021/6/uQS3rvoAWpkjIUXz.JPG')",
        }}
      >
        <div className="container position-relative px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="page-heading">
                <h1>교과과정</h1>
                <span className="subheading">
                  Have questions? I have answers.
                </span>
                <div class="btnframe">
                  <button class="custom-btn btn-15" style={{ padding: "30px" }}  onClick={handleDownload} >
                    교육과정표
                  </button>
            
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
              <h2 className="mt-0" style={{ padding: "20px" }}>
                이수체계도
              </h2>
              <hr style={{ width: "100%" }} />
              <p className="text-muted mb-5">
                {" "}
                <img
                  src="./Curriculum.png"
                  style={{ width: "70%", height: "90%" }}
                  alt="학과 이미지"
                />
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Curriculum;
