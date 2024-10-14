import React, { useState } from 'react';

const SwitchCase = () => {
  const [studentName, setStudentName] = useState('Darshan'); 
  const [inputValue, setInputValue] = useState('');

  let fullName; 
  switch (studentName) {
    case 'Darshan':
      fullName = <p>Darshan Chauhan</p>;
      break;
    case 'VijayS':
      fullName = <p>Vijay Solanki</p>;
      break;
    case 'VijayD':
      fullName = <p>Vijay Dankhra</p>;
      break;
    case 'Dhaval':
      fullName = <p>Dhaval Solanki</p>;
      break;
    case 'Krish':
      fullName = <p>Krish Ranghani</p>;
      break;
    case 'Mahendr':
      fullName = <p>Mahendr Purohit</p>;
      break;
    case 'Vrishabh':
      fullName = <p>Vrishabh Jogani</p>;
      break;
    case 'Dipesh':
      fullName = <p>Dipesh Parmar</p>;
      break;
    case 'Nayan':
      fullName = <p>Nayan Katariya</p>;
      break;
    default:
      fullName = <p>There is no such student</p>;
      break;
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSwitchStudent = () => {
    setStudentName(inputValue);
    setInputValue('');
  };

  return (
    <div>
      <h1 className='p-2 bg-red-400 text-white text-center'>Switch Case</h1>
      <h3>Current Student: {studentName}</h3>
      <h3>Full Name: {fullName}</h3>

      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter student name"
      />
      <button onClick={handleSwitchStudent}>Switch Student</button>
    </div>
  );
};

export default SwitchCase;
