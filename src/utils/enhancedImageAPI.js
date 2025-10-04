import React from 'react'
import axios from 'axios'

// Environment variables
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;
const MAXIMUM_RETRIES = parseInt(import.meta.env.VITE_MAXIMUM_RETRIES) || 10;

// Helper function to validate environment variables
const validateEnvVars = () => {
  if (!API_KEY) {
    throw new Error('VITE_API_KEY is not defined in environment variables');
  }
  if (!BASE_URL) {
    throw new Error('VITE_BASE_URL is not defined in environment variables');
  }
};
const enhancedImageAPI = async (file) => {
  // Validate environment variables before proceeding
  validateEnvVars();
  
  try {
    const taskId = await uploadImage(file);
    console.log("Image Upload Successfully, Task Id:",taskId);
    

    const enhancedImageData = await PollForEnhancedImage(taskId);
    console.log("Enhanced Image Data:",enhancedImageData);
    return enhancedImageData

  } catch (error) {
    console.log("Error Enhanced Image ", error.message);
    throw error; // Re-throw the error so the caller can handle it
  }
}

const uploadImage = async (file) => {
    // upload image
    const formData = new FormData();
    formData.append("image_file",file);

    const {data}= await axios.post(
        `${BASE_URL}/api/tasks/visual/scale`,
        formData,
        {
            headers: {
                'Content-Type':"multipart/form-data",
                "X-API-KEY":API_KEY,
            },
        }
    )
    if(!data?.data?.task_id){
        throw new Error("Failed to upload image!");
    }
    return data.data.task_id;
// /api/tasks/visual/scale
}

const PollForEnhancedImage = async (taskId,retries = 0) => {
    const result = await fetchEnhancedImage(taskId);
    if(result.state === 4){
        console.log(`Processing...(${retries}/${MAXIMUM_RETRIES})`);
        if(retries >= MAXIMUM_RETRIES){
            throw new Error("Max retries. Please Try again later.");
        }

        await new Promise((resolve)=> setTimeout(resolve,2000));

        return PollForEnhancedImage(taskId,retries + 1);
    }
    console.log("Enhanced Image URL:",result);
    return result;
}

const fetchEnhancedImage = async(taskId) => {
      
    const {data}= await axios.get(
        `${BASE_URL}/api/tasks/visual/scale/${taskId}`,
        {
            headers: {
                // 'Content-Type':"multipart/form-data",
                "X-API-KEY":API_KEY,
            },
        }
    )
    if(!data?.data){
        throw new Error("Failed to fetch enhanced Image!");
    }
    return data.data;
// /api/tasks/visual/scale/{task_id}
}
export default enhancedImageAPI