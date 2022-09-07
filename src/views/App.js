import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyFirstComponent from './Example/MyFirstComponent';
import ListToDo from './ToDo/ListToDo';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='mt-2'>
          {/* <MyFirstComponent /> */}
          {<ListToDo />}
        </div>
      </header>
    </div>
  );
}

export default App;
