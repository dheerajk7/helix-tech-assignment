import React, { useState } from 'react';
import { showAlert } from '../helpers/alert';
import { getFormBody } from '../helpers/utils';
import { APIUrls } from '../helpers/urls';

function AddCourse(props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');

  const checkValidation = () => {
    if (title === undefined || title.length === 0) {
      showAlert('Invalid', 'Title is Required', 'warning');
      return false;
    } else if (description === undefined || description.length === 0) {
      showAlert('Invalid', 'Description is Required', 'warning');
      return false;
    } else if (duration === undefined || duration.length === 0) {
      showAlert('Invalid', 'Duration is Required', 'warning');
      return false;
    }
    return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let status = checkValidation();
    if (status) {
      const formData = {
        title: title,
        description: description,
        duration: duration,
      };
      let body = getFormBody(formData);
      const url = APIUrls.createCourse();
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        body: body,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            showAlert('successful', data.message, 'success');
            setTitle('');
            setDuration('');
            setDescription('');
          } else {
            showAlert('Error', data.message, 'warning');
          }
        });
    }
  };

  return (
    <div className="form-container">
      <div className="heading">Add Course</div>
      <form className="form">
        <div className="form-item">
          <label>Title :</label>
          <input
            type="text"
            placeholder="Title"
            required
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="form-item">
          <label>Description :</label>
          <input
            type="text"
            placeholder="Description"
            required
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div className="form-item">
          <label>Duration in Days :</label>
          <input
            type="number"
            placeholder="Duration"
            required
            value={duration}
            onChange={(e) => {
              setDuration(e.target.value);
            }}
          />
        </div>

        <button className="btn" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddCourse;
