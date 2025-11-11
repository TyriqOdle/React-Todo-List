import { useState } from 'react';
function TodoInput({ setTodoList }) {
  const [newToDo, setNewToDo] = useState('');
  const handleAddToDo = () => {
    if (newToDo.trim().length > 0)
      setTodoList((t) => [...t, { text: newToDo, isCompleted: false }]);
    setNewToDo('');
  };

  const handleInputChange = (e) => {
    setNewToDo(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        name="New Todo"
        id="addToDo"
        placeholder="Add New Todo"
        value={newToDo}
        onChange={(e) => handleInputChange(e)}
        onKeyDown={(e) => {
          console.log(e.key);
          e.key === 'Enter' ? handleAddToDo() : null;
        }}
      />
      <button onClick={handleAddToDo}> Add To Do</button>
    </>
  );
}

export default TodoInput;
