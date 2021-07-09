import React,{ useEffect } from 'react';
import Activity from './Activity';

const UserFeed = (props) => {
  const { getUserActivities, email, userActivities } = props;


  useEffect(() => {
   getUserActivities(email);
  }, [email])

  return (
    <div className="user-feed-container">
      {userActivities.map((activity => (
        <Activity activity={activity} key={activity._id}/>
      )))}
    </div>
  )
}

export default UserFeed;