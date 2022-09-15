import logo from './logo.svg';
import './App.scss';
import Nav from './nav/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
} from "react-router-dom";
import { ToastContainer } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
import Routess from '../router/Routerss';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <Routess />
        </header>
        <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
