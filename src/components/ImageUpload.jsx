import React from 'react'

const ImageUpload = (props) => {
    const showImageHandler = (e) => {
        const file = e.target.files[0];
        if(file){
            props.UploadImageHandler(file);
        }
        
        
    }
  return (
    <div className='bg-white dark:bg-gray-800 shadow-xl rounded-3xl p-8 max-w-4xl mx-auto border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl'>
        <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Upload Your Image</h3>
            <p className="text-gray-600 dark:text-gray-400">Choose an image to enhance with our AI technology</p>
        </div>
        
        <label htmlFor="fileInput"
            className='block w-full cursor-pointer border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-12 text-center hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300 group'
        >
            <input type="file" id="fileInput" className='hidden' onChange={showImageHandler} accept="image/*" />
            
            <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                </div>
                
                <div>
                    <p className='text-lg font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300'>
                        Click to upload or drag and drop
                    </p>
                    <p className='text-sm text-gray-500 dark:text-gray-400 mt-1'>
                        PNG, JPG, JPEG up to 10MB
                    </p>
                </div>
            </div>
        </label>
    </div>
  )
}
   
export default ImageUpload