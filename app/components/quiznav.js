"use client";
import React, { useState } from 'react';
import Question from './Question'; // Assuming you have a Question component
import { useRouter } from 'next/navigation';

const flattenQuestions = (questionsDict) => {
  return Object.values(questionsDict).flat();
};

const QuizNavigation = ({ questions }) => {
  const router = useRouter();

  const flattenedQuestions = flattenQuestions(questions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const goToPreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => 
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  const goToNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => 
      prevIndex < flattenedQuestions.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const handleSubmit = () => {
    // Handle submission logic here
    alert("Quiz submitted!");
    router.push('/results');
  };

  return (
    <div className="flex flex-col items-center">
      <Question question={flattenedQuestions[currentQuestionIndex]} />
      
      {/* Progress Bar */}
      <div className="w-[30%] bg-gray-200 rounded-full h-2 mt-4">
        <div 
          className="bg-darkgreen h-2 rounded-full"
          style={{ width: `${((currentQuestionIndex + 1) / flattenedQuestions.length) * 100}%` }}
        />
      </div>

      <div className="flex justify-between w-[30%] mt-4">
        <button 
          onClick={goToPreviousQuestion} 
          disabled={currentQuestionIndex === 0}
          className="bg-green-200 text-black px-4 py-2 rounded-full disabled:bg-gray-300"
        >
          ←
        </button>
        
        <span>{currentQuestionIndex + 1} / {flattenedQuestions.length}</span>
        
        {currentQuestionIndex === flattenedQuestions.length - 1 ? (
          <button 
            onClick={handleSubmit}
            className="bg-green-200 text-black px-4 py-2 rounded-full"
          >
            Submit
          </button>
        ) : (
          <button 
            onClick={goToNextQuestion} 
            disabled={currentQuestionIndex === flattenedQuestions.length - 1}
            className="bg-green-200 text-black px-4 py-2 rounded-full disabled:bg-gray-300"
          >
            →
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizNavigation;