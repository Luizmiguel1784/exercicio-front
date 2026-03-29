import './style.css';
import Header from './assets/components/Header/Header.jsx';
import TaskList from './assets/components/Task/TaskList.jsx';
import Timer from './assets/components/Timer.jsx';

function App() {
  return (
    <div className="app">
      <Header />

      <div className="main">
        <TaskList />
        <Timer />
      </div>
    </div>
  );
}

export default App;
