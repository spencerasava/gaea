import React from 'react';

const Activity = (props) => {
  const { activity } = props;
  return (
    <div className="activity">
      <h3>Activity Name: {activity.activity}</h3>
      <h5>Activity location: {activity.location}</h5>
      <div>Notes:</div>
      <div>{activity.notes}</div>
      <h6>From: {activity.email}</h6>
    </div>
  )
}

export default Activity;