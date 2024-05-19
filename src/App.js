import './App.css';
import {useState} from "react";
// import { Routes, Route, useNavigate } from 'react-router-dom';

import  Calendar from "react-calendar";
// import DatePage from './DatePage';

function App() {

  const [date, setDate] = useState(new Date());
    const navigate = useNavigate();



  return (
    <div className="App">

      <h1 className='text-center'>Calendar</h1>
          <div className='calendar-container'>
            <Calendar onChange={setDate} value={date} />
          </div>
          <p className='text-center'>
            <span className='bold'>Selected Date:</span>{' '}
            {date.toDateString()}
          </p>
    </div>
  );
}

export default App;
