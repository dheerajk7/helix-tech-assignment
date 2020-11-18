import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import { APIUrls } from '../helpers/urls';

function Home(props) {
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

  console.log(courseList, 'courese');
  return (
    <div>
      <ul className="course-list">
        <div className="course-heading">Courses</div>
        {courseList.map((course) => {
          return (
            <li key={course._id}>
              <Link to={'/course/' + course._id}>{course.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Home;
