import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ToDo from './ReactApps/ToDo';
import ModalWindow from './ReactApps/ModalWindow';
import DropDown from './ReactApps/DropDown.js';
import QuizApp from './ReactApps/QuizApp';
import RegistrationFormApp from './ReactApps/RegistrationFormApp';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className=' con container mt-3'>
        <ul className='ul'>
          <li>
            <Link className='link' to='todo'>
              ToDo React APP
            </Link>
          </li>
          <li>
            <Link className='link' to='modal'>
              Modal Window
            </Link>
          </li>
          <li>
            <Link className='link' to='dropdown'>
              Dropdown Menu
            </Link>
          </li>
          <li>
            <Link className='link' to='quizapp'>
              Quiz App
            </Link>
          </li>

          <li>
            <Link className='link' to='registrationForm'>
              Registration Form
            </Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path='todo' element={<ToDo />} />
        <Route path='modal' element={<ModalWindow />} />
        <Route path='dropdown' element={<DropDown />} />
        <Route path='quizapp' element={<QuizApp />} />
        <Route path='registrationForm' element={<RegistrationFormApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
