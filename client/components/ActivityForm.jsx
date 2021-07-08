import React, { useState } from 'react';
import axios from 'axios';

const ActivityForm = (props) => {
  const { email, getUserActivities } = props;
  let [activity, setActivity] = useState('');
  let [location, setLocation] = useState('');
  let [notes, setNotes] = useState('');
  let [photos, setPhotos] = useState([])

  const postActivity = () => {
    axios.post('/activities', {
      email,
      activity,
      location,
      notes,
      photos,
    })
  }

  const handleActivitySubmit = (event) => {
    event.preventDefault();
    postActivity();
    setActivity('');
    setLocation('');
    setNotes('');
    getUserActivities(email);
  }

  return (
    <div>
      <form className="form activity-input">
        <input value={activity} placeholder="Activity" onChange={(e) => setActivity(e.target.value)}>
        </input>
        <input value={location} placeholder="Location" onChange={(e) => setLocation(e.target.value)}>
        </input>
        <textarea value={notes} placeholder="Notes" onChange={(e) => setNotes(e.target.value)}>
        </textarea>
        {/* <input type="file" id="img" name="img" accept="image/*">
        </input> */}
      </form>
      <button type="button" onClick={handleActivitySubmit}>Submit Activity</button>
    </div>
  )
}

export default ActivityForm;