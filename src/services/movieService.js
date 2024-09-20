import axios from 'axios';

const API_URL = 'https://dummyapi.online/api/movies';

export const fetchMovies = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;  // The response data contains the movie information
  } catch (error) {
    console.error("Error fetching movies", error);
    throw error;
  }
};
