import React, { useState, useEffect } from 'react';
import { APIUrls } from '../helpers/urls';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function CourseDetail(props) {
  const [course, setCourse] = useState({ topics: [] });

  useEffect(() => {
    const url = APIUrls.getCourseDetail(props.match.params.course_id);
    fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'text/plain',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCourse(data.data.course);
      });
  }, []);

  console.log(course);
  return (
    <div className="course-detail-container">
      <div className="detail-container">
        <div className="detail-group">
          <div className="detail-heading">Title :</div>
          <div>{course.title}</div>
        </div>
        <div className="detail-group">
          <div className="detail-heading">Description :</div>
          <div>{course.description}</div>
        </div>
        <div className="detail-group">
          <div className="detail-heading">Duration :</div>
          <div>{course.duration}</div>
        </div>
      </div>
      <ul className="course-list">
        <div className="course-heading">Topics</div>
        {course.topics.map((topic) => {
          return (
            <li key={topic._id}>
              <Link to={'/topic/' + topic._id}>{topic.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CourseDetail;
