import Sidebar from './components/sidebar';
import TaskFilter from './components/TaskFilter';
import TodoList from './components/TodoList';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <TodoList />
      </main>
    </div>
  );
}

export default App;
