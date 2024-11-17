import React from 'react'

const ProgressBar = ({percent}) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-4 mt-4">
        <div 
          className="bg-darkgreen h-4 rounded-full"
          style={{ width: `${percent}%` }}
        />
      </div>
  )
}

export default ProgressBar