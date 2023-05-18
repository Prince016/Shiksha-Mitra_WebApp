import React from 'react';
import './ScheduleCard.css'; // Import custom CSS file

function ScheduleCard({ tutorName, topic, dateTime, classLink }) {
  return (
    <div className="schedule-card">
      <div className="card-header">
        <h3>{tutorName}</h3>
      </div>
      <div className="card-body">
        <h4>{topic}</h4>
        <p>Date & Time: {dateTime}</p>
        <a href={classLink} target="_blank" rel="noopener noreferrer">
          Join Class
        </a>
      </div>
    </div>
  );
}

export default ScheduleCard;
