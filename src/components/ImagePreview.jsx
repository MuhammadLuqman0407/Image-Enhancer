import React from 'react'
import Loading from './Loading'

const ImagePreview = (props) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto'>
        {/* Original Image */}
        <div className='bg-white dark:bg-gray-800 shadow-xl rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl'>
            <div className='bg-gradient-to-r from-gray-700 to-gray-800 dark:from-gray-600 dark:to-gray-700 px-6 py-4'>
                <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h2 className='text-xl font-semibold text-white'>Original Image</h2>
                </div>
            </div>
            <div className='h-80 flex items-center justify-center bg-gray-50 dark:bg-gray-900'>
                {props.uploaded ? (
                    <img src={props.uploaded} alt="Original" className='w-full h-full object-contain p-4'/>
                ) : (
                    <div className='flex flex-col items-center justify-center p-8 text-gray-500 dark:text-gray-400'>
                        <svg className="w-16 h-16 mb-4 text-gray-300 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-center">No Image Selected</p>
                    </div>
                )}
            </div>
        </div>

        {/* Enhanced Image */}
        <div className='bg-white dark:bg-gray-800 shadow-xl rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl'>
            <div className='bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 px-6 py-4'>
                <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <h2 className='text-xl font-semibold text-white'>Enhanced Image</h2>
                </div>
            </div>
            <div className='h-80 flex items-center justify-center bg-gray-50 dark:bg-gray-900'>
                {props.enhanced ? (
                    <img src={props.enhanced} alt="Enhanced" className='w-full h-full object-contain p-4'/>
                ) : (
                    <div className='flex flex-col items-center justify-center p-8 text-gray-500 dark:text-gray-400'>
                        {props.loading ? (
                            <Loading />
                        ) : (
                            <>
                                <svg className="w-16 h-16 mb-4 text-gray-300 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                <p className="text-center">No Enhanced Image</p>
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default ImagePreview