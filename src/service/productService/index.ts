import axios from 'axios';
import { Product } from '../../interface';

const API_URL = 'https://mocki.io/v1/df2b86f9-beed-4e8b-a017-3dbbc7c8c121';

export const getProducts = () => {
  return axios.get<Product[]>(API_URL).catch((error) => {
    console.error('Error fetching data:', error);
    throw error;
  });
};
