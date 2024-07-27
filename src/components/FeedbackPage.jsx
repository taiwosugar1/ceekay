// pages/FeedbackPage.js

import React, { useEffect, useState } from 'react';
import { getFeedbacks, submitFeedback } from '../api/api';
import FeedbackForm from '../components/FeedbackForm';
import FeedbackList from '../components/FeedbackList';

const FeedbackPage = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch feedbacks from the backend
  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const feedbackData = await getFeedbacks();
        setFeedbacks(feedbackData);
      } catch (err) {
        setError('Error fetching feedbacks');
      } finally {
        setLoading(false);
      }
    };

    fetchFeedbacks();
  }, []);

  // Handle feedback submission
  const handleFeedbackSubmit = async (feedback) => {
    try {
      await submitFeedback(feedback);
      // Fetch feedbacks again to include the new feedback
      const updatedFeedbacks = await getFeedbacks();
      setFeedbacks(updatedFeedbacks);
    } catch (err) {
      setError('Error submitting feedback');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Customer Feedback</h1>
      <FeedbackForm onSubmit={handleFeedbackSubmit} />
      <FeedbackList feedbacks={feedbacks} />
    </div>
  );
};

export default FeedbackPage;