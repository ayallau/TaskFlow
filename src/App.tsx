import './App.css'
import { TaskCard } from './components/TaskCard';
import { UserCard } from './components/UserCard';

const user = {
  id: '1',
  name: 'Ayal',
  role: 'Developer',
  isActive: true,
};

const appName = 'TaskFlow';

function App() {
  return (
    <>
      <header>
        <h1>{appName}</h1>
      </header>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <main>
        <h2>Welcome to {appName}</h2>
        <section>
          <p>
            <b>User Details</b>
          </p>
          <UserCard
            id={user.id}
            name={user.name}
            role={user.role}
            isActive={user.isActive}
          />
        </section>
        <section>
          <h2>Task List</h2>
          <TaskCard
            id={1}
            title="Task 1"
            status="To Do"
            priority="High"
            assignee="Ayal"
          />
        </section>
      </main>
      <footer>
        <p>Copyright © 2026 Ayal Laufer</p>
      </footer>
    </>
  );
}

export default App