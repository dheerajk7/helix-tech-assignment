import React, { useState, useEffect } from 'react';
import { APIUrls } from '../helpers/urls';
import { showAlert } from '../helpers/alert';
import { getFormBody } from '../helpers/utils';

function AddTopic(props) {
  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    const url = APIUrls.getCourses();
    fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'text/plain',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCourseList(data.data.courses);
      });
  }, []);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [course_id, setCourseId] = useState(null);

  const checkValidation = () => {
    if (title === undefined || title.length === 0) {
      showAlert('Invalid', 'Title is Required', 'warning');
      return false;
    } else if (description === undefined || description.length === 0) {
      showAlert('Invalid', 'Description is Required', 'warning');
      return false;
    } else if (course_id === null) {
      showAlert('Invalid', 'Select Course', 'warning');
      return false;
    }
    return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let status = checkValidation();
    if (status) {
      let body = getFormBody({ title, description, course_id });
      const url = APIUrls.createTopic();
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
            setDescription('');
            setCourseId(null);
          } else {
            showAlert('Error', data.message, 'warning');
          }
        });
    }
  };

  return (
    <div className="form-container">
      <div className="heading">Add Topic</div>
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
          <label>Course :</label>{' '}
          <select
            required
            onChange={(e) => {
              setCourseId(e.target.value);
            }}
          >
            <option disabled selected value>
              -- select an option --
            </option>
            {courseList.map((course) => {
              return (
                <option key={course._id} value={course._id}>
                  {course.title}
                </option>
              );
            })}
          </select>
        </div>

        <button className="btn" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddTopic;
