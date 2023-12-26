import React, { useState } from 'react';

const DropdownExample = () => {
  // State for the first dropdown
  const [dropdown1, setDropdown1] = useState('');
  
  // State for the second dropdown
  const [dropdown2, setDropdown2] = useState('');

  // Options for the dropdowns
  const options1 = ['Option 1A', 'Option 1B', 'Option 1C'];
  const options2 = ['Option 2A', 'Option 2B', 'Option 2C'];

  // Event handler for the first dropdown
  const handleDropdown1Change = (event) => {
    setDropdown1(event.target.value);
    // You can add additional logic here if needed
  };

  // Event handler for the second dropdown
  const handleDropdown2Change = (event) => {
    setDropdown2(event.target.value);
    // You can add additional logic here if needed
  };

  return (
    <div>
      <label>
        Dropdown 1:
        <select value={dropdown1} onChange={handleDropdown1Change}>
          <option value="">Select an option</option>
          {options1.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label>
        Dropdown 2:
        <select value={dropdown2} onChange={handleDropdown2Change}>
          <option value="">Select an option</option>
          {options2.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      
      <div>
        {/* Display the selected values */}
        <p>Selected value for Dropdown 1: {dropdown1}</p>
        <p>Selected value for Dropdown 2: {dropdown2}</p>
      </div>
    </div>
  );
};

export default DropdownExample;
