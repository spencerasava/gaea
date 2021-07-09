import React, { useState } from 'react';
import axios from 'axios';

const ActivityForm = (props) => {
  const { email, getUserActivities, toggleModal, darkMode } = props;
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
    toggleModal();
    getUserActivities(email);
  }

  return (
    <div className={darkMode ? "dark-modal" : "activity-form-modal"}>
      <form className="form activity-input">
          <input className="activity-input" value={activity} placeholder="Activity" onChange={(e) => setActivity(e.target.value)} required>
          </input>
          <input className="location-input" value={location} placeholder="Location" onChange={(e) => setLocation(e.target.value)} required>
          </input>
          <textarea className="notes-input" value={notes} placeholder="Notes" onChange={(e) => setNotes(e.target.value)} required>
          </textarea>
      </form>
      <div>
        <button className="submit-activity-button" type="button" onClick={handleActivitySubmit}>Submit Activity</button>
      </div>
      <div>
        <button className="close-modal-button" type="button" onClick={toggleModal}>Close</button>
      </div>
    </div>
  )
}

export default ActivityForm;