// Sidebar.js
import React , {useState} from 'react';

import { Dropdown } from 'primereact/dropdown';
        
const Sidebar = () => {
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

  return (
    <div style={{ width: '250px', height: '100%', backgroundColor: '#0072c6', position: 'fixed', top: '84px', left: 0, color: '#fff' }}>
      {/* Add your sidebar content here */}
      <h3 style={{ padding: '20px' }}>DropDown</h3>
      <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                placeholder="Select a City" className="w-full md:w-14rem" />

    </div>
  );
};

export default Sidebar;
