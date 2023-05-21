import React from 'react';
import './ScheduleCard.css'; // Import custom CSS file

function ScheduleCard({ tutorName, subject,topic, dateTime, classLink }) {
  return (
    <div className="schedule-card">
      <div className="card-header">
       
      </div>
      <div className="card-body">
      <p><b>Mentor</b>: {tutorName}</p>
        <p><b>Subject</b> :{subject}</p>
        <p><b>Topic</b> :{topic}</p>
        <p><b>Date & Time</b>: {dateTime}</p>
        <a href={classLink} target="_blank" rel="noopener noreferrer">
          Room No.22
        </a>
      </div>
    </div>
  );
}

export default ScheduleCard;
