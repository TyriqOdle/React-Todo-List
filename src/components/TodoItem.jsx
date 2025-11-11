function TodoItem({ todo, index, handleRemoveToDo, handleMarkComplete }) {
  return (
    <div
      className={`todo-item ${todo.isCompleted ? 'Completed' : 'Active'}`}
      key={index}
    >
      <span>{todo.text}</span>
      <button onClick={() => handleRemoveToDo(index)}>Remove To DO</button>
      <button onClick={() => handleMarkComplete(index)}>Mark Complete</button>
    </div>
  );
}

export default TodoItem;
