import React from 'react';
function ProfessorCard({ name, photo, specialization, email, phone, degree }) {
  return (
    <div className="professor-card">
      <div className="professor-content">
      <img src={photo} alt={`${name} 사진`} className="professor-photo" style={{float:'left', width:"25%"}}/>
        <h3>{name}</h3>
        <p><strong>세부전공:</strong> {specialization}</p>
        <p><strong>이메일:</strong> <a href={`mailto:${email}`}>{email}</a></p>
        <p><strong>전화번호:</strong> {phone}</p>
        <p><strong>최종학력:</strong> {degree}</p>
     
      </div>
      
      <hr />
    </div> 
  );
}



export default ProfessorCard;
