import axios, { AxiosResponse } from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';
axios.defaults.headers.common['Authorization'] =
  'Client-ID jhQcplBUoglEL_QTQ7BQ096tyd_nHu5rVCFrZ0UPCbM';

export interface Picture {
  id: string;
  user: {
    username: string;
  };
  likes: number;
  urls: {
    regular: string;
  };
  alt_description: string;
}

export const fetchPictures = async (
  topic: string,
  currentPage: number
): Promise<Picture[]> => {
  try {
    const response: AxiosResponse = await axios.get('/search/photos', {
      params: {
        query: topic,
        page: currentPage,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching pictures:', error);
    throw error;
  }
};