import React from 'react';
import ProfessorCard from './ProfessorCard'; 

const professors = [
  {
    name: '양태천 교수',
    photo: 'https://kscms.ks.ac.kr/attach/IMAGE/ProfessorMgr/ProfessorUpload/2021/4/auRGThIiJUVEePwo.JPG',
    specialization: '알고리즘, 컴퓨터그래픽스',
    email: 'tcyang@ks.ac.kr',
    phone: '051-663-5141',
    degree: 'KAIST 전산학과(박사)',
  },
  {
    name: '성낙운 교수',
    photo: 'https://kscms.ks.ac.kr/attach/IMAGE/ProfessorMgr/ProfessorUpload/2021/4/pyzC0FR0KMIEqhIC.JPG',
    specialization: '운영체제',
    email: 'nuseong@ks.ac.kr',
    phone: '051-663-5142',
    degree: 'KAIST 전산학(박사)',
  },{
    name: '홍석희 교수',
    photo: 'https://kscms.ks.ac.kr/attach/IMAGE/ProfessorMgr/ProfessorUpload/2021/4/q1N3Pby4oRjhFVNq.JPG',
    specialization: '데이타베이스, 실시간 테이터베이스, 실시간 시스템, 트랜잭션 시스템, 소프트웨어 시험, 저장 장치',
    email: 'shong@ks.ac.kr',
    phone: '051-663-5145',
    degree: '한국과학기술원(KAIST) 전산학과 졸업 (박사)',
  },
  {
    name: '지상문 교수',
    photo: 'https://kscms.ks.ac.kr/attach/IMAGE/ProfessorMgr/ProfessorUpload/2021/4/RKnQWX4W3C7aUXy8.JPG',
    specialization: 'deep learning, bioinfomatics',
    email: 'smchiks@ks.ac.kr',
    phone: '051-663-5146',
    degree: 'KAIST 박사',
  },
  {
    name: '강인수 부교수',
    photo: 'https://kscms.ks.ac.kr/attach/IMAGE/ProfessorMgr/ProfessorUpload/2021/4/euoGbMBr3mkbzje4.JPG',
    specialization: '자연어처리, 정보검색, 시맨틱웹',
    email: 'dbaisk@ks.ac.kr',
    phone: '051-663-5147',
    degree: '포항공과대학교 박사',
  },
  
];

function IntroProfessor() {
  return (
    <div className="professor-list">
      <h2 style={{padding : "20px"}}>교수진 소개</h2>
      <hr></hr>
      {professors.map((professor, index) => (
        <ProfessorCard
          key={index}
          name={professor.name}
          photo={professor.photo}
          specialization={professor.specialization}
          email={professor.email}
          phone={professor.phone}
          degree={professor.degree}
        />
      ))}
    </div>
  );
}

export default IntroProfessor;
