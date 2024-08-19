
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Test from './components/Test';
import FinishTest from './components/FinishTest';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <a href="/">Home</a> | <a href="/test">Take Test</a>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/test" element={<Test />} />
            <Route path="/finish" element={<FinishTest />} />
          </Routes>
        </main>
        <footer>
          <p> MCQ Test Platform</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
