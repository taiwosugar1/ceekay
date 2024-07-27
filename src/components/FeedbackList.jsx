import React, { useEffect, useState } from 'react';
import { getFeedbacks } from '../api/api';

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const data = await getFeedbacks();
      setFeedbacks(data);
    };
    fetchFeedbacks();
  }, []);

  return (
    <div>
      <h1>Customer Feedback</h1>
      {feedbacks.map(feedback => (
        <div key={feedback._id}>
          <p>{feedback.feedback}</p>
        </div>
      ))}
    </div>
  );
};

export default FeedbackList;