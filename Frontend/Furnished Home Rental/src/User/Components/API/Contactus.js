import axios from 'axios';

export const submitContactForm = async (formData) => {
  try {
    // Replace with your API endpoint
    await axios.post('/api/contact', formData);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
