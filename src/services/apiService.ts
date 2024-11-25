import axios from 'axios';

export const submitPollData = async (data: Record<number, string>) => {
  return axios.post('https://jsonplaceholder.typicode.com/posts', data);
};
