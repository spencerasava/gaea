import React, { useState } from 'react';

const Activity = (props) => {
  const { activity } = props;
  let [showInfo, setShowInfo] = useState(false)

  const toggleInfo = () => {
    setShowInfo(!showInfo)
  }

  return (
    <div className="activity">
      <h3>Activity Name: {activity.activity}</h3>
      <h5>Location: {activity.location}</h5>
      <div>Notes:</div>
      <div>{activity.notes}</div>
      <h6>From: {activity.email}</h6>
      {showInfo
      ? (
        <div>
          <div>Weather: </div>
          <div>Conditions: </div>
          <div>Date: {activity.createdAt}</div>
          <div>Duration: </div>
          <div className="info-toggle" type="button" onClick={toggleInfo}>show less details</div>
        </div>
      )
      : <div className="info-toggle" type="button" onClick={toggleInfo}>show more details</div>}
    </div>
  )
}

export default Activity;