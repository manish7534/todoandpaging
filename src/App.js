import logo from './logo.svg';
import './App.css';
import Todo from './Components/todo/Todo'
import Paging from './Components/Paging/Paging';

function App() {
  return (
    <div className="App">
     <Todo/>
     <Paging/>
    </div>
  );
}

export default App;
