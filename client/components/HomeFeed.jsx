import React from 'react';
import Activity from './Activity'

const HomeFeed = (props) => {
  const { activities } = props;
  return (
    <div className="home-feed-container">
      {activities.map((activity) => (
        <Activity activity={activity} key={activity._id}/>
      ))}
    </div>
  )
}

export default HomeFeed;