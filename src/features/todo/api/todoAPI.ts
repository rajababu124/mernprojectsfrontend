import interceptor from '../../../auth/interceptor'; // Import the axios instance

export const fetchTasksAPI = async () => {
  const response = await interceptor.get('/tasks'); // Token will automatically be attached
  return response.data.data;
};

export const addTaskAPI = async (taskData: any) => {
  const response = await interceptor.post('/tasks', taskData);
  return response.data;
};

export const deleteTaskAPI = async (taskId: any) => {
  const response = await interceptor.delete(`/tasks/${taskId}`);
  return response.data;
};

export const updateTaskAPI = async (taskData: any) => {
  const response = await interceptor.patch(`/tasks/${taskData._id}`, taskData);
  return response.data;
};


export const loginAPI = async (loginData: any) => {
  const response = await interceptor.post(`/auth/login`, loginData);
  return response.data;
};

export const registerAPI = async (registerData: any) => {
  const response = await interceptor.post(`/auth/register`, registerData);
  return response.data;
};

// export const fetchTasksAPI = async () => {
//   const response = await axios.get(baseURL);
//   return response.data.data;
// };