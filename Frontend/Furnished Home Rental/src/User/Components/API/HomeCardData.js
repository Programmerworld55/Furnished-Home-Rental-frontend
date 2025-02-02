import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/photos?_limit=3";

export const fetchProperties = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching properties:", error);
    return [];
  }
};