// import React, {useState} from "react";
// import './App.css';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


// import  Calendar from "react-calendar";

// function App() {

//   const [date, setDate] = useState(new Date());


//   return (
//     <div className="App">

//       <h1 className='text-center'>Calendar</h1>
//           <div className='calendar-container'>
//             <Calendar onChange={setDate} value={date} />
//           </div>
//           <p className='text-center'>
//             <span className='bold'>Selected Date:</span>{' '}
//             {date.toDateString()}
//           </p>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Calendar from "react-calendar";
import './App.css';
import AddEvent from './AddEvent';

function App() {
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();

  const handleDateClick = (value) => {
    setDate(value);
    navigate(`/add-event?date=${value.toISOString()}`);
  };

  return (
    <div className="App">
      <h1 className='text-center'>Calendar</h1>
      <div className='calendar-container'>
        <Calendar onChange={handleDateClick} value={date} />
      </div>
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>

      <Routes>
        <Route path="/add-event" element={<AddEvent />} />
      </Routes>
    </div>
  );
}

export default App;
