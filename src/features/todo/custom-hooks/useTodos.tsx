import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { fetchTasksAPI, updateTaskAPI } from '../api/todoAPI';
const useTodos = () => {
  const queryClient = useQueryClient();
  
  // Fetch tasks using React Query
  const { data: todos, isLoading: isFetchingTasks } = useQuery('tasks', fetchTasksAPI);

  // Mutation for updating tasks
  const updateTaskMutation = useMutation(updateTaskAPI, {
    onSuccess: () => {
      queryClient.invalidateQueries('tasks'); // Refetch tasks on success
    },
  });

  const [filteredTodos, setFilteredTodos] = useState(todos);

  const handleUpdateTask = (taskId: number, task: any) => {
    if (task.task_description?.trim() === '') return; // Prevent empty task updates
    updateTaskMutation.mutate({
      _id: taskId,
      task_description: task.task_description,
      task_title: task.task_title,
    });
  };

  return {
    todos,
    filteredTodos,
    setFilteredTodos,
    isFetchingTasks,
    handleUpdateTask,
  };
};

export default useTodos;
