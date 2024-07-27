import React from 'react';
import FeedbackForm from '../components/FeedbackForm';
import FeedbackList from '../components/FeedbackList';

const FeedbackPage = () => {
  return (
    <div>
      <h1>Customer Feedback</h1>
      <FeedbackForm />
      <FeedbackList />
    </div>
  );
};

export default FeedbackPage;