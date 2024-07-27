import React, { useState } from 'react';
import { submitFeedback } from '../api/api';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitFeedback({ feedback });
      alert('Feedback submitted');
    } catch (err) {
      alert('Error submitting feedback');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        name="feedback"
        placeholder="Enter your feedback"
        onChange={(e) => setFeedback(e.target.value)}
        required
      />
      <button type="submit">Submit Feedback</button>
    </form>
  );
};

export default FeedbackForm;