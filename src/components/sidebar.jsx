function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Todo List</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <a href="#" className="active">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#">Tasks</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
