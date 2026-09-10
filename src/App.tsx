import './App.css'

const user = {
  name: 'Ayal',
  role: 'Developer',
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
          <p><b>User Details</b></p>
          <p>Your name is: {user.name}</p>
          <p>Your role is: {user.role}</p>
        </section>
      </main>
      <footer>
        <p>Copyright © 2026 Ayal Laufer</p>
      </footer>
    </>
  );
}

export default App