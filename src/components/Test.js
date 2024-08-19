
import React, { useState , useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Webcam from 'react-webcam'; 

const questions = [
  { id: 1, question: 'What is the capital of France?', options: ['Berlin', 'Madrid', 'Paris', 'Rome'], correctAnswer: 'Paris' },
  { id: 2, question: 'Who wrote "Hamlet"?', options: ['Charles Dickens', 'J.K. Rowling', 'William Shakespeare', 'Mark Twain'], correctAnswer: 'William Shakespeare' },
  { id: 3, question: 'Which planet is known as the Red Planet?', options: ['Earth', 'Mars', 'Jupiter', 'Saturn'], correctAnswer: 'Mars' },
  { id: 4, question: 'What is the boiling point of water?', options: ['90°C', '100°C', '110°C', '120°C'], correctAnswer: '100°C' },
  { id: 5, question: 'Who discovered penicillin?', options: ['Marie Curie', 'Alexander Fleming', 'Isaac Newton', 'Albert Einstein'], correctAnswer: 'Alexander Fleming' },
  { id: 6, question: 'What is the largest ocean on Earth?', options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'], correctAnswer: 'Pacific Ocean' },
  { id: 7, question: 'Which element has the chemical symbol O?', options: ['Oxygen', 'Gold', 'Silver', 'Iron'], correctAnswer: 'Oxygen' },
  { id: 8, question: 'Who painted the Mona Lisa?', options: ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Claude Monet'], correctAnswer: 'Leonardo da Vinci' },
  { id: 9, question: 'What is the largest mammal in the world?', options: ['Elephant', 'Blue Whale', 'Giraffe', 'Polar Bear'], correctAnswer: 'Blue Whale' },
  { id: 10, question: 'What is the hardest natural substance on Earth?', options: ['Gold', 'Iron', 'Diamond', 'Graphite'], correctAnswer: 'Diamond' }
];

const Test = () => {
  const [answers, setAnswers] = useState({});
  const [webcamEnabled, setWebcamEnabled] = useState(false);
  const webcamRef = useRef(null);
  const navigate = useNavigate();

  const handleAnswerChange = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const handleSubmit = () => {
    let score = 0;

    questions.forEach((question) => {
      if (answers[question.id] === question.correctAnswer) {
        score += 1;
      }
    });

    localStorage.setItem('testScore', score);
    localStorage.setItem('totalQuestions', questions.length);
    navigate('/finish');
  };

  const handleWebcamStart = () => {
    setWebcamEnabled(true);
  };

  return (
    <div className="container">
      <h2>Test</h2>
      {webcamEnabled ? (
        <Webcam 
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          className="webcam"
        />
      ) : (
        <button className="start-webcam-btn" onClick={handleWebcamStart}>
          Start Webcam
        </button>
      )}
      {questions.map((q) => (
        <div key={q.id} className="question">
          <p>{q.question}</p>
          <div className="options">
            {q.options.map((option, index) => (
              <div key={index}>
                <label>
                  <input
                    type="radio"
                    name={`question-${q.id}`}
                    value={option}
                    checked={answers[q.id] === option}
                    onChange={() => handleAnswerChange(q.id, option)}
                  />
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}
      <button className="submit-btn" onClick={handleSubmit}>Submit Test</button>
    </div>
  );
};

export default Test;