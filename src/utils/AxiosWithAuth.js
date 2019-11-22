import axios from "axios";
import {baseURL, APIKey} from '../Config/index';

export const AxiosWithAuth = () => {
  return axios.create({
    // baseURL: baseURL,
    baseURL: 'https://jsonplaceholder.typicode.com',
    // headers: {
    //   Authorization: `Token ${APIKey}`
    // }
  });
};