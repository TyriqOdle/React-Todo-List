# 📝 React To-Do List App

## 📌 Overview

This project is a **React-based To-Do List application** that allows users to add, mark, and remove tasks while maintaining data persistence through **local storage**.  
It includes **task filtering** and a **sidebar navigation layout**, creating a simple but functional productivity dashboard.

---

## ⚙️ Features

- ✅ **Add new tasks** — Type a new to-do item and press **Enter** or click **Add To Do**.
- ✔️ **Mark tasks as completed** — Marks an item as done without deleting it.
- ❌ **Remove tasks** — Deletes a selected to-do item.
- 🔍 **Filter tasks** — Switch between viewing **All** or **Completed** tasks.
- 💾 **Local storage support** — Keeps all to-dos and filter settings saved even after reloading the page.

---

## 🧩 Component Breakdown

### 1. `App.jsx`

The root component that sets up the main structure of the app.

Imports the sidebar, todo list, and styles:

```jsx
import Sidebar from './components/sidebar';
import TodoList from './components/TodoList';
import './index.css';
```

- **Sidebar** — displays the navigation section.
- **TodoList** — handles all main to-do list logic.

---

### 2. `Sidebar.jsx`

A basic sidebar component for navigation.  
It includes menu links for future expansion.

```jsx
<aside className="sidebar">
  <h2>Todo List</h2>
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
</aside>
```

---

### 3. `TodoList.jsx`

The **main functional component** of the app.  
It manages:

- The **list of all tasks**
- The **completed tasks list**
- The **filter state**
- **Local storage** synchronization

#### Main Functions:

- `handleRemoveToDo(index)` — removes a selected to-do.
- `handleMarkComplete(index)` — marks a to-do as completed.
- Uses `useEffect()` to:
  - Load saved data on app start.
  - Save all updates automatically when data changes.

It displays different lists depending on the active filter ("all" or "completed").

---

### 4. `TodoInput.jsx`

Handles **adding new tasks** using a controlled input.

- Adds a new task when pressing **Enter** or clicking **Add To Do**.
- Clears the input automatically after adding.
- Prevents empty entries.

Example snippet:

```jsx
onKeyDown={(e) => e.key === 'Enter' ? handleAddToDo() : null}
```

---

### 5. `TodoItem.jsx`

Represents a single to-do item.  
Each item displays:

- Task text
- A **Remove** button
- A **Mark Complete** button

CSS class changes dynamically:

```jsx
<div className={`todo-item ${todo.isCompleted ? 'Completed' : 'Active'}`}>
```

---

### 6. `TaskFilter.jsx`

Provides **filter buttons** to toggle between “All” and “Completed” tasks.

- Highlights the active button.
- Updates the filter state via props.

Example:

```jsx
<button
  className={filter == 'all' ? 'filter-btn active' : 'filter-btn'}
  onClick={(e) => handleAllFilter(e)}
>
  All
</button>
```

## 🚀 Setup & Run

### Prerequisites

Make sure you have **Node.js** and **npm** installed.

### Steps

1. Clone this repository:
   ```bash
   git clone https://github.com/TyriqOdle/react-todo-list.git
   ```
2. Move into the project folder:
   ```bash
   cd react-todo-list
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open your browser and go to:
   ```
   http://localhost:3000
   ```

---

## 🧠 Technologies Used

- **React.js (Hooks)** — component structure and state management
- **JavaScript (ES6+)** — event handling and logic
- **Local Storage API** — persistent data storage
- **CSS** — basic layout and visual design

---

## 📂 Folder Structure

```
src/
├── components/
│   ├── App.jsx
│   ├── Sidebar.jsx
│   ├── TodoList.jsx
│   ├── TodoInput.jsx
│   ├── TodoItem.jsx
│   └── TaskFilter.jsx
├── index.css
└── index.js
```

---

## 🧑‍💻 Future Improvements

- ✏️ Add the ability to **edit tasks**
- 🗓️ Add **due dates** and **categories**
- ☁️ Integrate with a backend (e.g., MongoDB) for user accounts
- 📱 Improve mobile responsiveness and design

---

## 🏷️ License

This project is open-source and available under the **MIT License**.

---

## 👨‍🎨 Author

Developed by **Tyriq ODle**  
💻 GitHub: [TyriqOdle](https://github.com/TyriqOdle)
