import ImageUpload from "./ImageUpload"
import ImagePreview from "./ImagePreview"
import { useState } from "react";
import enhancedImageAPI from '../utils/enhancedImageAPI'

const Home = () => {
    const [uploadedImage,setUploadedImage] = useState(null);
    const [enhancedImage, setEnhancedImage] = useState(null);
    const [loading,setLoading] = useState(false);

    const UploadImageHandler = async (file) =>{
        const imageUrl = URL.createObjectURL(file);
        console.log(imageUrl);
        setUploadedImage(imageUrl);
        setLoading(true);
        // call the api to enhance the image
        try{
            const enhancedURL = await enhancedImageAPI(file);
            setEnhancedImage(enhancedURL.image);
            setLoading(false);   
            
        }
        catch(error){
            console.log(error);
            setLoading(false);
            alert('Error,Try again');
        }
    }
    return(
        <div className='max-w-6xl mx-auto px-4 py-12'>
            {/* Hero Section */}
            <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-6 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>
                <h1 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-4'>
                    AI Image Enhancer
                </h1>
                <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed'>
                    Transform your images with cutting-edge AI technology. Enhance quality, upscale resolution, and perfect your photos with our advanced algorithms.
                </p>
            </div>

            {/* Upload Section */}
            <div className="mb-16">
                <ImageUpload UploadImageHandler = {UploadImageHandler}/>
            </div>

            {/* Image Preview Section - Centered */}
            <div className="flex justify-center">
                <ImagePreview
                    loading={loading}
                    uploaded = {uploadedImage}
                    enhanced = {enhancedImage}
                />
            </div>
        </div>
    )
}
export default Home