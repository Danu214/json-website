import axios from 'axios';
import { Area } from '../../interface';

const API_URL = 'https://mocki.io/v1/0f2b86db-3075-4b1a-b15b-5739ccfa3e28';

export const getAreas = () => {
  return axios.get<Area[]>(API_URL).catch((error) => {
    console.error('Error fetching data:', error);
    throw error;
  });
};
