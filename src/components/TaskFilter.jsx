function TaskFilter({ setFilter, filter }) {
  const handleAllFilter = (e) => {
    const parent = e.target.parentNode;
    const buttons = parent.querySelectorAll('.filter-btn');

    buttons.forEach((btn) => btn.classList.remove('active'));

    e.target.classList.add('active');
    setFilter('all');
  };

  const handleCompletedFilter = (e) => {
    const parent = e.target.parentNode;
    const buttons = parent.querySelectorAll('.filter-btn');

    buttons.forEach((btn) => btn.classList.remove('active'));

    e.target.classList.add('active');

    setFilter('completed');
  };

  return (
    <div className="task-filter">
      <button
        className={filter == 'all' ? 'filter-btn active' : 'filter-btn'}
        onClick={(e) => handleAllFilter(e)}
      >
        All
      </button>
      <button
        className={filter == 'completed' ? 'filter-btn active' : 'filter-btn'}
        onClick={(e) => handleCompletedFilter(e)}
      >
        Completed
      </button>
    </div>
  );
}

export default TaskFilter;
