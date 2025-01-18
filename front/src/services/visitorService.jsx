import axios from 'axios';

// const API_URL = 'http://localhost:3000/visitors';
const API_URL = 'https://parking-eight-pearl.vercel.app/visitors';

const getVisitors = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const createVisitor = async (visitor) => {
  // console.log(visitor);
  const response = await axios.post(API_URL, visitor);
  return response.data;
};

const deleteVisitor = async () => {
  const response = await axios.get(`${API_URL}/delete`);
  return response.data;
};

export default { getVisitors, createVisitor, deleteVisitor };
