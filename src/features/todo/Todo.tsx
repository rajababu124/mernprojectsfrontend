import { useState } from 'react';
import { CircularProgress } from '@mui/material';
import AddTodoForm from './Components/AddTodoForm';
import TodoList from './Components/TodoList';
import EditModal from './Components/EditModal';
import ReadModal from './Components/ReadModal';
import TodoFilter from './Components/TodoFilter'; // Import the new filter component
import useTodos from './custom-hooks/useTodos';

const Todo = () => {
  const { todos, filteredTodos, setFilteredTodos, isFetchingTasks, handleUpdateTask, } = useTodos()
  const [openReadModal, setReadModal] = useState(false);
  const [readItem, setReadItem] = useState('');
  const closeReadModal = () => setReadModal(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editTask, setEditTask] = useState("");
  const [editId, setEditId] = useState(0);
  const closeEditModal = () => setOpenEditModal(false);



  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-5 w-full bg-gray-50 p-4 rounded-lg shadow-lg'>
      <div className="grid col-span-5 p-4 rounded bg-white shadow">
        <AddTodoForm />
        <TodoFilter
          todos={todos}
          onFilterChange={(filteredTodo: any) => setFilteredTodos(filteredTodo)}
        />

        {isFetchingTasks ? (
          <div className="flex justify-center flex-col items-center h-96">
            <CircularProgress color="inherit" /><br />
            Loading...
          </div>
        ) : (
          <div className="max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-500">
            <TodoList
              todos={filteredTodos}
              setEditTask={setEditTask}
              setEditId={setEditId}
              setOpenEditModal={setOpenEditModal}
              setReadItem={setReadItem}
              setReadModal={setReadModal}
            />
          </div>
        )}

        {/* Edit and Read Modals */}
        <EditModal
          open={openEditModal}
          task={editTask}
          onClose={closeEditModal}
          onChange={(value: any) => setEditTask(value)}
          onUpdate={(task: any) => handleUpdateTask(editId, task)}
        />
        <ReadModal open={openReadModal} task={readItem} onClose={closeReadModal} />
      </div>
    </div>

  );
};

export default Todo;
