"use client";
import React from 'react';
import Navbar from '../components/header';
import GaugeComponent from '../components/gauge';
import ProgressBar from '../components/progressbar';

const page = () => {
  const tooltips = {
    score: "An overall assesment of your building's sustainability based on your answers, evaluated by different categories",
    waterEfficiency: "Measures how effectively your building manages and conserves water resources",
    energyAtmosphere: "Evaluates energy usage and environmental impact of your building",
    materialsResources: "Assesses sustainable material choices and waste management practices",
    indoorQuality: "Measures the comfort and health conditions inside your building"
  };

  return (
    <div className="relative h-screen" id="home">
      <Navbar />
      <div className="flex h-full items-center justify-center px-6 lg:px-8">
        <div className="w-[60%] bg-white border-2 border-lightgreen rounded-lg shadow-lg p-8">
          <div className="flex flex-row w-full gap-8">
            <div className="w-[40%] flex flex-col">
              <div className="flex items-center gap-2 mb-2 group relative">
                    <p className="text-2xl font-bold">Overall Score</p>
                    <div className="cursor-help">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      <div className="invisible group-hover:visible absolute left-0 top-full mt-2 w-48 rounded-md bg-gray-900 text-white text-sm py-1 px-2 z-50">
                        {tooltips.score}
                      </div>
                    </div>
                  </div>
              <GaugeComponent
                score={50} 
                maxScore={100} 
                title="Score"
              />
              <p className='mr-8 mt-4'>You can do better! A score of 50 means that you're halfway there in attempting to make your building more sustainable - check the right panel to see where you can improve and save on money while reducing your carbon footprint!</p>
            </div>
            
            <div className="w-[60%] space-y-6">
              <h2 className="text-2xl font-bold mb-6">Category Breakdown</h2>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2 group relative">
                    <p className="text-lg font-semibold">Water Efficiency</p>
                    <div className="cursor-help">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      <div className="invisible group-hover:visible absolute left-0 top-full mt-2 w-48 rounded-md bg-gray-900 text-white text-sm py-1 px-2 z-50">
                        {tooltips.waterEfficiency}
                      </div>
                    </div>
                  </div>
                  <ProgressBar percent={20}/>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2 group relative">
                    <p className="text-lg font-semibold">Energy and Atmosphere</p>
                    <div className="cursor-help">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      <div className="invisible group-hover:visible absolute left-0 top-full mt-2 w-48 rounded-md bg-gray-900 text-white text-sm py-1 px-2 z-50">
                        {tooltips.energyAtmosphere}
                      </div>
                    </div>
                  </div>
                  <ProgressBar percent={60}/>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2 group relative">
                    <p className="text-lg font-semibold">Materials and Resources</p>
                    <div className="cursor-help">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      <div className="invisible group-hover:visible absolute left-0 top-full mt-2 w-48 rounded-md bg-gray-900 text-white text-sm py-1 px-2 z-50">
                        {tooltips.materialsResources}
                      </div>
                    </div>
                  </div>
                  <ProgressBar percent={40}/>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2 group relative">
                    <p className="text-lg font-semibold">Indoor Quality</p>
                    <div className="cursor-help">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      <div className="invisible group-hover:visible absolute left-0 top-full mt-2 w-48 rounded-md bg-gray-900 text-white text-sm py-1 px-2 z-50">
                        {tooltips.indoorQuality}
                      </div>
                    </div>
                  </div>
                  <ProgressBar percent={75}/>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;




/*
<div>
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-lg font-semibold">Materials and Resources</p>
                    <button 
                      className="text-gray-400 hover:text-blue-500 transition-colors"
                      title={categoryInfo.materialsResources}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                  <ProgressBar percent={50}/>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-lg font-semibold">Indoor Environmental Quality</p>
                    <button 
                      className="text-gray-400 hover:text-blue-500 transition-colors"
                      title={categoryInfo.indoorQuality}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                  <ProgressBar percent={50}/>
                </div> */