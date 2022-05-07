import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
      <li>{value.name}</li>
  );
}

function App() {
  return (
    <div>
      <Task name="almocar" />
    </div>
  );
}

export default App;
