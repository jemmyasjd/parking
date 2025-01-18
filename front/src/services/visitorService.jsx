import axios from 'axios';

const API_URL = 'http://localhost:3000/visitors';

const getVisitors = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const createVisitor = async (visitor) => {
  // console.log(visitor);
  const response = await axios.post(API_URL, visitor);
  return response.data;
};

const deleteVisitor = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

export default { getVisitors, createVisitor, deleteVisitor };
