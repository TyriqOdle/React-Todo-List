import { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';
import TaskFilter from './TaskFilter';
function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [completedTodo, setCompletedTodo] = useState([]);
  const [filter, setFilter] = useState('');

  const handleRemoveToDo = (index) => {
    const itemToRemove =
      filter === 'all' ? todoList[index] : completedTodo[index];

    const newTodoList = todoList.filter((todo) => todo !== itemToRemove);
    const newCompletedList = completedTodo.filter(
      (todo) => todo !== itemToRemove
    );

    setTodoList(newTodoList);
    setCompletedTodo(newCompletedList);
  };

  /**
   * Handles marking a todo item as complete.
   * It takes the index of the item to be marked as complete and updates the todo list accordingly.
   * @param {number} index - Index of the item to be marked as complete.
   */
  const handleMarkComplete = (index) => {
    const updatedTodoList = todoList.map((todo, i) =>
      i === index ? { ...todo, isCompleted: true } : todo
    );
    setTodoList(updatedTodoList);
    setCompletedTodo(updatedTodoList.filter((todo) => todo.isCompleted));
  };

  useEffect(() => {
    if (localStorage.listItems) {
      const todoListString = localStorage.getItem('listItems');
      const todoOBject = JSON.parse(todoListString);
      setTodoList(todoOBject);
    }

    if (localStorage.completedItems) {
      const completedItemsString = localStorage.getItem('completedItems');
      const completedItemsObject = JSON.parse(completedItemsString);
      setCompletedTodo(completedItemsObject);
    }

    if (localStorage.filterStatus) {
      const currentStatus = localStorage.getItem('filterStatus');
      setFilter(currentStatus);
    }
  }, []);

  useEffect(() => {
    if (todoList.length > 0) {
      const todoListString = JSON.stringify(todoList);
      localStorage.setItem('listItems', todoListString);
    } else {
      localStorage.removeItem('listItems');
    }

    if (completedTodo.length > 0) {
      const completedItemsString = JSON.stringify(completedTodo);
      localStorage.setItem('completedItems', completedItemsString);
    } else {
      localStorage.removeItem('completedItems');
    }

    if (filter != '') {
      localStorage.setItem('filterStatus', filter);
    }
  }, [todoList, completedTodo, filter]);

  return (
    <>
      <TaskFilter setFilter={setFilter} filter={filter} />
      <div className="todo-list">
        <div className="input-area">
          <TodoInput setTodoList={setTodoList} />
        </div>
        <div className="todo-items">
          {filter == 'all'
            ? todoList.map((item, index) => (
                <TodoItem
                  key={index}
                  todo={item}
                  index={index}
                  handleRemoveToDo={handleRemoveToDo}
                  handleMarkComplete={handleMarkComplete}
                />
              ))
            : completedTodo.map((item, index) => (
                <TodoItem
                  key={index}
                  todo={item}
                  index={index}
                  handleRemoveToDo={handleRemoveToDo}
                  handleMarkComplete={handleMarkComplete}
                />
              ))}
        </div>
      </div>
    </>
  );
}

export default TodoList;
