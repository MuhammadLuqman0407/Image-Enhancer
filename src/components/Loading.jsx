import React from 'react'

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="relative">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-200 dark:border-gray-700"></div>
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-transparent border-t-blue-600 dark:border-t-blue-400 absolute top-0 left-0"></div>
      </div>
      <div className="text-center">
        <p className="text-gray-600 dark:text-gray-300 font-medium">Enhancing your image...</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">This may take a few moments</p>
      </div>
    </div>
  )
}

export default Loading