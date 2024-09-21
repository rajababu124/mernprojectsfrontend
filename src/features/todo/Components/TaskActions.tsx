import { Tooltip, IconButton } from '@mui/material';
import { FaTrashAlt, FaRegEye, FaCheckCircle } from "react-icons/fa";
import Switch from '@mui/material/Switch';

import { ImPencil } from "react-icons/im";
import { useMutation, useQueryClient } from 'react-query';
import { deleteTaskAPI, updateTaskAPI } from '../api/todoAPI';

const TaskActions = ({ item, setEditTask, setEditId, setOpenEditModal, setReadItem, setReadModal }: any) => {
  const queryClient = useQueryClient();
  const deleteMutation = useMutation(deleteTaskAPI, {
    onSuccess: () => queryClient.invalidateQueries('tasks'),
  });

  const updateMutation = useMutation(updateTaskAPI, {
    onSuccess: () => queryClient.invalidateQueries('tasks'),
  });

  const handleDelete = (taskId: any) => deleteMutation.mutate(taskId);

  const handleComplete = (taskId: number, isCompleted: boolean) => updateMutation.mutate({ _id: taskId, isCompleted: !isCompleted });
  const handleVisibility = (taskId: number, isVisible: boolean) => updateMutation.mutate({ _id: taskId, isVisible: !isVisible });

  const handleEdit = (title : string, taskDescription: string, taskId: number) => {
    setEditTask({'title' : title, 'task' :taskDescription}); // Set the task description in state
    setEditId(taskId); // Set the task ID in state for updating
    setOpenEditModal(true); // Open the edit modal
  };
  

  const handleRead = (task: string) => {
    setReadItem(task);
    setReadModal(true);
  };

  return (
    <div className='flex'>
      <Tooltip title="Complete">
        <IconButton size='small' onClick={() => handleComplete(item._id, item.isCompleted)} className={`${item.isCompleted ? 'text-green-500' : 'text-gray-400'}`}>
          <FaCheckCircle />
        </IconButton>
      </Tooltip>

      <Tooltip title="Archived">
        <Switch checked={item?.isVisible}
           onClick={() => handleVisibility(item._id, item.isVisible)} />

      </Tooltip>

      <Tooltip title="Delete">
        <IconButton size='small' onClick={() => handleDelete(item._id)} className='text-red-600'>
          <FaTrashAlt />
        </IconButton>
      </Tooltip>

      <Tooltip title="Edit">
        <IconButton size='small' onClick={() => handleEdit( item.task_title, item.task_description, item._id)} className='text-orange-600'>
          <ImPencil />
        </IconButton>
      </Tooltip>

      <Tooltip title="View">
        <IconButton size='small' onClick={() => handleRead(item.task_description)} className='text-purple-600'>
          <FaRegEye />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default TaskActions;
