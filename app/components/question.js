"use client";
import React, { useState } from 'react';
import axios from "axios";

const Question = ({ question }) => {
  // Initialize answer based on question type
  const [answer, setAnswer] = useState(() => {
    switch (question.type) {
      case 'multiselect':
        return []; // Initialize as an empty array for multiselect
      case 'boolean':
        return null; // Initialize as null for boolean
      case 'number':
        return 0; // Initialize as 0 for number
      default:
        return ''; // Default to empty string for text or other types
    }
  });

  const handleInputChange = (value) => {
    if (question.type === 'multiselect') {
      const updatedAnswer = answer.includes(value)
      setAnswer(updatedAnswer
      );
      updateAnswer(question.id, updatedAnswer);
    } else {
      setAnswer(value);
      updateAnswer(question.id, value);
    }
  };

  const renderInput = () => {
    switch (question.type) {
      case 'number':
        return (
          <div className="flex items-center">
            <input
              type="number"
              value={answer}
              onChange={(e) => setAnswer(Number(e.target.value))}
              className="w-full p-2 border rounded"
            />
            {question.unit && <span className="ml-2 text-gray-500">{question.unit}</span>}
          </div>
        );
      case 'boolean':
        return (
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="true"
                checked={answer === true}
                onChange={() => setAnswer(true)}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="false"
                checked={answer === false}
                onChange={() => setAnswer(false)}
                className="mr-2"
              />
              No
            </label>
          </div>
        );
      case 'select':
        return (
          <select 
            value={answer} 
            onChange={(e) => setAnswer(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Select an option</option>
            {question.options?.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      case 'multiselect':
        return (
          <div className="space-y-2">
            {question.options?.map((option, index) => (
              <label key={index} className="flex items-center">
                <input
                  type="checkbox"
                  value={option}
                  checked={Array.isArray(answer) && answer.includes(option)}
                  onChange={() => handleInputChange(option)}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
        );
      default:
        return (
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-full p-2 border rounded"
          />
        );
    }
  };

  if (!question) {
    return <div>Loading question...</div>; // Handle undefined question gracefully
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto my-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">{question.question}</h2>
      {renderInput()}
    </div>
  );
};

export default Question;