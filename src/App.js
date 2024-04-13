import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import  Calendar from "react-calendar";

function App() {

  const [date, setDate] = useState(new Date());


  return (
    <div className="App">

      <h1 className='text-center'>React Calendar</h1>
          <div className='calendar-container'>
            <Calendar onChange={setDate} value={date} />
          </div>
          <p className='text-center'>
            <span className='bold'>Selected Date:</span>{' '}
            {date.toDateString()}
          </p>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* 
           */}
           test
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
