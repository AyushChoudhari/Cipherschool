
import React from 'react';

const FinishTest = () => {
  const score = localStorage.getItem('testScore');
  const totalQuestions = localStorage.getItem('totalQuestions');

  return (
    <div className="container">
      <h2>Test Completed</h2>
      <p>Thank you for completing the test!</p>
      <p>Your Score: {score} / {totalQuestions}</p>
    </div>
  );
};

export default FinishTest;
