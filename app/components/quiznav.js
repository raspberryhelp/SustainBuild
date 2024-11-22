"use client";
import React, { useState } from 'react';
import Question from './Question'; // Assuming you have a Question component
import { useRouter } from 'next/navigation';
import axios from "axios";



const flattenQuestions = (questionsDict) => {
  return Object.values(questionsDict).flat();
};

const QuizNavigation = ({ questions }) => {
  const router = useRouter();
  const [answers, setAnswers] = useState({});


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

  const handleSubmit = async () => {
    // Log the answers to verify data before submission
    console.log("Submitting answers:", answers);
    try {
      const response = await axios.post("http://localhost:3000/submit", { answers });
      console.log("Quiz submitted successfully:", response.data);
      console.log("Submitting these answers:", answers);

    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 200 range
        console.error("Response error:", error.response.data);
        alert(`Server Error: ${error.response.data.message || "Unknown error occurred."}`);
      } else if (error.request) {
        // Request was made but no response received
        console.error("Request error:", error.request);
        alert("No response from the server. Please check the server is running.");
      } else {
        // Something else caused the error
        console.error("Error in submission:", error.message);
        alert(`Unexpected Error: ${error.message}`);
        console.log("Submitting these answers:", answers);

      }
    }
    
  };
  

  return (
    <div className="flex flex-col items-center">
      <Question question={flattenedQuestions[currentQuestionIndex]}
      updateAnswer={(id, value) => setAnswers((prev) => ({ ...prev, [id]: value }))} />
      
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