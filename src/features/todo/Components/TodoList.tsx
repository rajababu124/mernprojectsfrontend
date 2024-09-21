import { Badge } from '@mui/material';
import { formatDate } from '../utils/dateUtil';
import TaskActions from './TaskActions';
import NoDataFound from '../../../Layouts/NoDataFound';

// Helper function to group todos by date
const groupTodosByDate = (todos: any[]) => {
  return todos.reduce((groups, todo) => {
    const date = formatDate(todo.created_at);  // Group by formatted date (e.g., "26 Jun 2024")
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(todo);
    return groups;
  }, {} as Record<string, any[]>);
};

const TodoList = ({ todos, setEditTask, setEditId, setOpenEditModal, setReadItem, setReadModal }: any) => {
  // Sort todos by updated_at in descending order (most recent first)
  const sortedTodos = todos?.sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  // Group todos by date
  let groupedTodos = groupTodosByDate(sortedTodos);
  const handleBadge = () => {
    console.log('hello i am clicked ', groupedTodos)
  }

  return (
    <ul className="max-h-96 overflow-y-auto  rounded-md shadow-md  scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-500">
      {todos?.length > 0 ? (
        Object.keys(groupedTodos).map((date) => (
          <div key={date} className='mr-4 mb-4'>
            <div className="mr-10">
              <Badge onClick={() => handleBadge()} badgeContent={date} className='w-full cursor-pointer' color="primary" />
            </div>

            {groupedTodos[date].map((item: any, index: number) => (
              <li
                key={index}
                className={`${item.isCompleted ? 'bg-green-100' : 'bg-gray-50'} rounded-lg flex justify-between items-center px-4 py-2 mt-1 shadow-sm`}
              >
                <div className='flex'>{index + 1}. {item.task_title}</div>
                <TaskActions
                  item={item}
                  setEditTask={setEditTask}
                  setEditId={setEditId}
                  setOpenEditModal={setOpenEditModal}
                  setReadItem={setReadItem}
                  setReadModal={setReadModal}
                />
              </li>
            ))}
          </div>
        ))
      ) : (
        <NoDataFound />
      )}
    </ul>

  );
};

export default TodoList;
