import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import Calendar from 'react-calendar';

function App() {
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();

  const handleDateChange = (newDate) => {
    setDate(newDate);
    navigate(`/date/${newDate.toISOString().split('T')[0]}`);
  };

  return (
    <div className="App">
      <h1 className='text-center'>Calendar</h1>
      <div className='calendar-container'>
        <Calendar onChange={handleDateChange} value={date} />
      </div>
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
    </div>
  );
}

export default App;
