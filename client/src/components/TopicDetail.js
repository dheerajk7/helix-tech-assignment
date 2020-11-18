import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import { APIUrls } from '../helpers/urls';

function TopicDetail(props) {
  const [topic, setTopic] = useState({});

  useEffect(() => {
    const url = APIUrls.getTopicDetail(props.match.params.topic_id);
    fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'text/plain',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTopic(data.data.topic);
      });
  }, []);

  return (
    <div className="course-detail-container">
      <div className="detail-container">
        <div className="detail-group">
          <div className="detail-heading">Title :</div>
          <div>{topic.title}</div>
        </div>
        <div className="detail-group">
          <div className="detail-heading">Description :</div>
          <div>{topic.description}</div>
        </div>
      </div>
    </div>
  );
}

export default TopicDetail;
